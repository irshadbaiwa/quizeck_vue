<script setup>
import Header from '../components/Header.vue'
import TextHeading from '../components/TextHeading.vue'
</script>

<template>
  <Header />
  <div class="w-5/6 max-w-screen-sm p-4 m-auto text-center">
    <TextHeading class=" text-2xl sm:text-4xl mb-4">
      <div>
        <svg class="inline-block h-6 sm:h-10 mr-2 sm:mr-4 fill-sky-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/></svg>
        <span>About</span>
      </div>
    </TextHeading>
    <p class="text-xl">
      This was created by 
      <a href="https://github.com/irshadbaiwa" target="_blank" class="text-blue-400">irshadbaiwa</a> 
      using Vue 3, Vue Router, Vite, Tailwind and FontAwesome Icons. 
    </p>
    <p class="mt-6">
      Questions are fetched from 
      <a href="https://opentdb.com" target="_blank" class="text-blue-400">
        opentdb.com
      </a>
    </p>
  </div>
</template>