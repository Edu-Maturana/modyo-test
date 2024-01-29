<template>
  <div class="loader-container text-center">
    <p class="loader-container__text">Cargando cartas...</p>
    <span class="loader-container__icon">🃏</span>
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.loader-container__text {
  margin-bottom: 10px;
}

.loader-container__icon {
  font-size: 36px;
}
</style>
