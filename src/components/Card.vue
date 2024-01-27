<template>
  <div
    class="card"
    :class="{ flipped: card.isFlipped, matched: card.isMatched }"
    @click="handleCardClick"
  >
    <img :src="card.image" alt="Animal Card" />
  </div>
</template>

<script setup>
const props = defineProps(['card'])

const handleCardClick = () => {
  if (!card.isFlipped && !card.isMatched) {
    emit('card-click', card.id)
  }
}
</script>

<style scoped>
.card {
  width: 100px;
  height: 150px;
  background-color: #eee;
  border: 1px solid #ddd;
  cursor: pointer;
  margin: 5px;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card.matched {
  pointer-events: none;
  opacity: 0.5;
}
</style>
