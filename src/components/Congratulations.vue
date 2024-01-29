<template>
  <div class="backdrop" id="congratsModal" aria-labelledby="congratsModalLabel" aria-hidden="true">
    <div class="congrats-modal">
      <div class="modal-header">
        <h5 class="modal-title" id="congratsModalLabel">¡Felicitaciones, {{ playerName }}!</h5>
      </div>
      <div class="modal-body">
        <p>Terminaste el juego con {{ errors }} errores y {{ matches }} aciertos.</p>
        <button
          type="button"
          class="btn btn-primary close-btn w-100"
          data-bs-dismiss="modal"
          @click="playAgain"
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['playerName', 'errors', 'matches'])

const playAgain = () => {
  window.location.reload()
}
</script>

<style scoped>
.backdrop {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.congrats-modal {
  background-color: #1a202c;
  border-radius: 16px;
  padding: 20px;
  width: 400px;
  max-width: 100%;
}

.modal-body {
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
