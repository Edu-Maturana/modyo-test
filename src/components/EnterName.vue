<template>
  <div class="content w-100 d-flex flex-column align-items-center">
    <h1 class="mb-3">Bienvenido a Memory Game</h1>

    <div class="mb-3 w-100">
      <input v-model="name" class="form-control" placeholder="Ingresa tu nombre" />
    </div>
    <button @click="saveName" class="btn btn-primary w-100">Comenzar a jugar</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits()
const name = ref('')

const saveName = () => {
  if (name.value.trim() !== '') {
    localStorage.setItem('playerName', name.value)
    emit('name-submitted', name.value)
  }
}
</script>
