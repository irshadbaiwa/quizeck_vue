<script setup>
import LogoIcon from './LogoIcon.vue'
</script>

<template>
  <!-- Logo SVG -->
  <RouterLink to="/" class="inline-block p-2">
    <LogoIcon class="h-10 inline-block mr-2 fill-sky-600" />
    <span class="font-serif text-sky-600 font-semibold text-2xl sm:text-3xl">
      Quizeck!
    </span>
  </RouterLink>
</template>