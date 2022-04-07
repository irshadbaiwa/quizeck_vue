<script setup>
import LogoIcon from './LogoIcon.vue'
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center"> 
    <LogoIcon class="h-20 sm:h-24 block fill-sky-600 loader" />
  </div>
</template>

<style scoped>
.loader {
  animation: load 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes load {
  0%, 100% {
    opacity: .6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>