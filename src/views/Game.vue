<template>
  <div class="game d-flex flex-column align-items-center justify-content-center">
    <GameBoard />
  </div>
</template>

<script setup>
import GameBoard from '@/components/GameBoard.vue'
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .game {
    padding-top: 1rem;
    padding-bottom: 8rem;
  }
}
</style>
