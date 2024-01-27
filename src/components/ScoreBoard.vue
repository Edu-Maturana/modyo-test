<template>
  <div class="score-board">
    <div class="score-item">
      <p>Errores:</p>
      <span>{{ errors }}</span>
    </div>
    <div class="score-item">
      <p>Aciertos:</p>
      <span>{{ matches }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['errors', 'matches'])
</script>

<style scoped>
.score-board {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.score-item {
  text-align: center;
}

.score-item p {
  margin-bottom: 5px;
}
</style>
