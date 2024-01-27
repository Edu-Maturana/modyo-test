<!-- components/GameBoard.vue -->

<template>
  <div>
    <EnterName v-if="!playerName" @name-submitted="handleNameSubmitted" />
    <div v-else>
      <h2 class="text-center">Vamos, {{ playerName }}!</h2>
      <div class="game-board" v-if="cards.length">
        <Card v-for="card in cards" :key="card.id" :card="card" @card-click="handleCardClick" />
      </div>

      <ScoreBoard :errors="errors" :matches="matches" />
      <div v-if="gameOver" class="game-over">
        <p>Congratulations, {{ playerName }}!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { CardService } from '@/services/CardService'
import Card from '@/components/Card.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import EnterName from '@/components/EnterName.vue'

const cards = ref([])
const flippedCards = ref([])
const errors = ref(0)
const matches = ref(0)
const playerName = ref(localStorage.getItem('playerName') || '')
const gameOver = computed(() => {
  return matches.value === cards.value.length / 2
})

const fillBoard = async () => {
  const animalImages = await CardService.getAnimalImages()
  const pairedCards = CardService.createCardPairs(animalImages)
  cards.value = CardService.shuffleCards(pairedCards)
}

const handleCardClick = (clickedCardId) => {
  const clickedCard = cards.value.find((card) => card.id === clickedCardId)

  if (!canFlipCard(clickedCard)) {
    return
  }

  flipCard(clickedCard)

  if (flippedCards.value.length < 2) {
    return
  }

  const [firstCard, secondCard] = flippedCards.value

  if (areCardsMatching(firstCard, secondCard)) {
    handleMatchingCards(firstCard, secondCard)
    return
  }

  handleNonMatchingCards(firstCard, secondCard)
}

const canFlipCard = (card) => {
  return !card.isFlipped && flippedCards.value.length < 2
}

const flipCard = (card) => {
  card.isFlipped = true
  flippedCards.value.push(card)
}

const areCardsMatching = (firstCard, secondCard) => {
  return firstCard.image === secondCard.image
}

const handleMatchingCards = (firstCard, secondCard) => {
  firstCard.isMatched = true
  secondCard.isMatched = true
  flippedCards.value = []
  matches.value += 1
}

const handleNonMatchingCards = (firstCard, secondCard) => {
  errors.value += 1

  setTimeout(() => {
    firstCard.isFlipped = false
    secondCard.isFlipped = false
    flippedCards.value = []
  }, 1000)
}

const handleNameSubmitted = (name) => {
  playerName.value = name
}

onMounted(() => {
  fillBoard()
})
</script>

<style scoped>
.game-board {
  display: flex;
  flex-wrap: wrap;
}

.game-over {
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  color: #28a745;
}
</style>
