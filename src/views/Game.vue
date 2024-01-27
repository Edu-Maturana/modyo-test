<template>
  <div class="game d-flex flex-column align-items-center justify-content-center">
    <GameBoard />
  </div>
</template>

<script setup>
import GameBoard from '@/components/GameBoard.vue'
</script>

<style scoped>
.game {
  height: 100vh;
  margin: 0 auto;
}
</style>
