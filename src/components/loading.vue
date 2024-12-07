<template>
  <div v-if="isVisible" class="loader">
    <video autoplay muted loop >
      <source src="/src/Render.mp4" type="video/mp4">
      Ваш браузер не поддерживает видео.
    </video>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false;
  }, 2000); 
});
</script>

<style scoped>
.loader {
  position: fixed;
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
}
@media (max-width: 768px) {
  video {
    width: 80%; 
    height: auto;
  }
}
</style>