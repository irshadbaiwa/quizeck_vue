<script setup>
import Header from '../components/Header.vue'
import LogoIcon from '../components/LogoIcon.vue'
import IntroSection from '../components/IntroSection.vue'
</script>

<template>
  <div class="relative h-screen" id="gradient-wrapper">
    <Header class="absolute top-0 left-0" />
    <main class="h-full flex flex-col justify-center  items-center">
      <IntroSection />
    </main>
  </div>
</template>

<style scoped>
#gradient-wrapper {
  background: linear-gradient(125deg, #ECFCFF 0%, #ECFCFF 40%, #B2FCFF calc(40% + 1px), #B2FCFF 60%, #5EDFFF calc(60% + 1px), #5EDFFF 72%, #0284C7 calc(72% + 1px), #0284C7 100%);
}
</style>
