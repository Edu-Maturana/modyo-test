<template>
  <div class="content w-100">
    <div class="mb-3">
      <input v-model="name" class="form-control" placeholder="Ingresa tu nombre" />
    </div>
    <button @click="submitName" class="btn btn-primary w-100">Comenzar a jugar</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits()
const name = ref('')

const submitName = () => {
  if (name.value.trim() !== '') {
    emit('name-submitted', name.value)
  }
}
</script>
