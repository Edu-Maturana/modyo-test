<template>
  <div class="content w-100 d-flex flex-column align-items-center">
    <h1 class="mb-3">Bienvenido a Memory Game</h1>

    <div class="mb-3 w-100">
      <label for="playerName" class="visually-hidden">Ingresa tu nombre</label>
      <input
        v-model="name"
        id="playerName"
        class="form-control"
        placeholder="Ingresa tu nombre"
        @keyup.enter="saveName"
        autofocus
      />
    </div>

    <button
      @click="saveName"
      class="btn btn-primary w-100"
      tabindex="0"
      :disabled="!submitEnabled"
      data-testid="submit-button"
    >
      Comenzar a jugar
    </button>
  </div>
  <p class="made-by text-center mt-3">
    Hecho con
    <span class="text-danger">&hearts;</span>
    por
    <a href="https://github.com/Edu-Maturana" target="_blank" rel="noopener noreferrer"
      >@Edu-Maturana</a
    >
  </p>
</template>

<script setup>
import { ref, defineEmits, computed } from 'vue'

const emit = defineEmits(['name-submitted'])
const name = ref('')
const submitEnabled = computed(() => name.value.trim() !== '')

const saveName = () => {
  localStorage.setItem('playerName', name.value)
  emit('name-submitted', name.value)
}
</script>
