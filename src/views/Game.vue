<template>
  <div class="game">
    <h1>Bienvenido al Memory Game</h1>
    <GameBoard />
  </div>
</template>

<script setup>
import GameBoard from '@/components/GameBoard.vue'
</script>

<style scoped>
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
}
</style>
