<template>
  <div class="score-board">
    <div class="score-item score-item--errors">
      <p class="score-label">👎Errores:</p>
      <span class="score-value">{{ errors }}</span>
    </div>
    <div class="score-item score-item--matches">
      <p class="score-label">👍Aciertos:</p>
      <span class="score-value">{{ matches }}</span>
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
  border-radius: 16px;
}

.score-item {
  text-align: center;
  padding: 20px;
  width: 100%;
}

.score-item--errors {
  background-color: #f8d7da;
  color: #dc3545;
}

.score-item--matches {
  background-color: #d4edda;
  color: #28a745;
}

.score-label {
  margin-bottom: 5px;
}
</style>
