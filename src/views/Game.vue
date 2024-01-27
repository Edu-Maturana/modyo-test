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
  background: url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXd1cHJzYnJ5ZDQ0N2tqNmprcXRkcWt3YjdsaGZnMjc5ZWRsZjlrdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2bYewTk7K2No1NvcuK/giphy.gif');
  background-size: cover;
}
</style>
