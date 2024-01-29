<template>
  <div
    class="card"
    :class="{ 'card--flipped': card.isFlipped, 'card--matched': card.isMatched }"
    @click="handleCardClick"
    data-testid="card"
  >
    <div class="card__inner">
      <div class="card__front">
        <span v-if="!card.isFlipped" class="card__emoji">🤔</span>
      </div>
      <div class="card__back">
        <img :src="card.image" alt="Animal Card" class="card__image" />
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
  transition: transform 0.5s ease;
  position: relative;
  border: none;
}

.card__inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.card--flipped {
  transform: rotateY(180deg);
}

.card__front,
.card__back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card__front {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__emoji {
  font-size: 3rem;
}

.card__back {
  transform: rotateY(180deg);
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  visibility: visible;
}

.card--matched {
  pointer-events: none;
}
</style>
