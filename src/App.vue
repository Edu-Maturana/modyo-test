<template>
  <div id="app">
    <h1>Concentration Game</h1>
    <GameBoard :playerName="playerName" />
    <ScoreBoard :errors="errors" :matches="matches" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GameBoard from './components/GameBoard.vue'
import ScoreBoard from './components/ScoreBoard.vue'

const playerName = ref('')
const errors = ref(0)
const matches = ref(0)
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
