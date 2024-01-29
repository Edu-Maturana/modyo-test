<template>
  <div>
    <EnterName v-if="!playerName" @name-submitted="handleNameSubmitted" />
    <div v-else-if="loading">
      <Loader />
    </div>
    <div v-else>
      <h3 class="game-title text-center" tabindex="0">¡Vamos, {{ playerName }}!</h3>
      <p class="game-subtitle text-center">Encuentra los pares de cartas</p>
      <div class="game-board" v-if="cards.length" role="grid">
        <Card
          v-for="card in cards"
          :key="card.id"
          :card="card"
          @card-click="handleCardClick"
          class="game-board__card"
          tabindex="0"
        />
      </div>

      <ScoreBoard :errors="errors" :matches="matches" />
      <div v-if="gameOver" class="text-center" role="status">
        <p class="game-over__message">¡Felicitaciones, {{ playerName }}!</p>
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
import Loader from '@/components/Loader.vue'

const cards = ref([])
const flippedCards = ref([])
const errors = ref(0)
const matches = ref(0)
const playerName = ref(localStorage.getItem('playerName') || '')
const loading = ref(true)
const gameOver = computed(() => {
  return matches.value === cards.value.length / 2
})

const fillBoard = async () => {
  const animalImages = await CardService.getAnimalImages()
  const pairedCards = CardService.createCardPairs(animalImages)
  cards.value = CardService.shuffleCards(pairedCards)
  loading.value = false
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
  justify-content: center;
  max-width: 700px;
  margin: auto;
}

.game-board__card {
  flex: 0 0 calc(25% - 10px);
  margin: 5px;
}

@media (max-width: 768px) {
  .game-board {
    max-width: 500px;
  }
  .game-board__card {
    flex: 0 0 calc(33% - 15px);
  }
}
.game-over {
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  color: #28a745;
}
</style>
