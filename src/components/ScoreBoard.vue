<template>
  <section class="score-board" aria-label="Puntuación">
    <article class="score-item score-item--errors" aria-label="Errores">
      <p class="score-label">❌ Errores:</p>
      <span class="score-value">{{ errors }}</span>
    </article>
    <article class="score-item score-item--matches" aria-label="Aciertos">
      <p class="score-label">✅ Aciertos:</p>
      <span class="score-value">{{ matches }}</span>
    </article>
  </section>
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
  padding: 5px;
  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0;
  }
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
