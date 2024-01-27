<template>
  <div
    class="card"
    :class="{ flipped: card.isFlipped, matched: card.isMatched }"
    @click="handleCardClick"
  >
    <div class="card-inner">
      <div class="card-front"></div>
      <div class="card-back">
        <img :src="card.image" alt="Animal Card" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['card'])
const emit = defineEmits()

const handleCardClick = () => {
  if (!props.card.isFlipped && !props.card.isMatched) {
    emit('card-click', props.card.id)
  }
}
</script>

<style scoped>
.card {
  width: 100px;
  height: 150px;
  margin: 5px;
  perspective: 1000px;
  transform-style: preserve-3d;
  cursor: pointer;
}

.card-inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card-front {
  background-color: #eee;
  border: 1px solid #ddd;
}

.card-back {
  transform: rotateY(180deg);
}

.card-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card.matched {
  pointer-events: none;
  opacity: 0.5;
}
</style>
