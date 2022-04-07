<script setup>
import LogoIcon from './LogoIcon.vue'
</script>

<template>
  <LogoIcon class="h-20 sm:h-28 block fill-sky-600" />
  <h1 class="text-xl sm:text-3xl text-sky-800 font-semibold px-12 sm:px-20 text-center py-4 my-4 max-w-2xl">
    Test your 
      <span class="text-gradient">knowledge</span>
    on a variety of topics in a fun way.
  </h1>
  <RouterLink to="/play">
    <button class="text-center block py-4 px-6 my-2 text-lg font-semibold hover:scale-105 transition-transform sm:text-2xl button-gradient text-sky-50 rounded-lg">
      Play Now
    </button>
  </RouterLink>
</template>

<style scoped>
.button-gradient {
  background: linear-gradient(180deg, #FFFFFF 0%, #000000 100%), linear-gradient(90deg, #FFFFFF 0%, #000000 100%), #00FFFF;
  background-blend-mode: multiply, screen, normal;
}
.text-gradient {
  background: linear-gradient(238.72deg, #0044A9 0%, #F700A3 100%), radial-gradient(100% 188.01% at 76.14% 0%, #43DDFF 0%, #FF0000 100%), linear-gradient(0deg, #DB00FF 0%, #14FF00 100%), radial-gradient(59.2% 100% at 50% 100%, #6A00D5 0%, #00E0FF 100%), radial-gradient(100% 148.07% at 0% 0%, #FF9900 0%, #001AFF 100%);
  background-blend-mode: hard-light, overlay, color-burn, color-burn, normal;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>