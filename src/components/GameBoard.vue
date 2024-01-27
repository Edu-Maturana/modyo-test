<!-- components/GameBoard.vue -->

<template>
  <div>
    <EnterName v-if="!playerName" @name-submitted="handleNameSubmitted" />
    <div v-if="playerName">
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
import { ref, onMounted } from 'vue'
import { CardService } from '@/services/CardService'
import Card from '@/components/Card.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import EnterName from '@/components/EnterName.vue'

const cards = ref([])
const flippedCards = ref([])
const gameOver = ref(false)
const errors = ref(0)
const matches = ref(0)
const playerName = ref('')

const fillBoard = async () => {
  const animalImages = await CardService.getAnimalImages()
  const pairedCards = CardService.createCardPairs(animalImages)
  cards.value = CardService.shuffleCards(pairedCards)
}

const checkGameOver = () => {}

const handleCardClick = (clickedCardId) => {
  const clickedCard = cards.value.find((card) => card.id === clickedCardId)

  if (!clickedCard.isFlipped && flippedCards.value.length < 2) {
    clickedCard.isFlipped = true
    flippedCards.value.push(clickedCard)

    if (flippedCards.value.length === 2) {
      const [firstCard, secondCard] = flippedCards.value
      if (firstCard.image === secondCard.image) {
        firstCard.isMatched = true
        secondCard.isMatched = true
        flippedCards.value = []
        matches.value += 1
      } else {
        errors.value += 1

        setTimeout(() => {
          firstCard.isFlipped = false
          secondCard.isFlipped = false
          flippedCards.value = []
        }, 1000)
      }
    }
  }

  checkGameOver()
}

const handleNameSubmitted = (name) => {
  playerName.value = name
  fillBoard()
}

onMounted(() => {
  // Optionally show the modal here if playerName is not set
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
