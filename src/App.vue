<template>
  <div id="app">
    <Game />
  </div>
</template>

<script setup>
import Game from '@/views/Game.vue'
</script>

<style>
body {
  background-color: #1a202c;
  color: #fff;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
