<script setup>
import { useRouter } from 'vue-router'

// back to home
const router = useRouter()
function goHome() {
  router.replace('/')
}

</script>

<template>
  <div class="flex flex-col justify-center text-center p-5 max-w-md m-auto">
    <h1 class="m-2 text-red-600 font-semibold text-2xl sm:text-4xl">
      Error!
    </h1>
    <p class="m-2 text-lg">
      An error occured while to fetching questions, 
      please check your internet connection and try again.
    </p>
    <button @click="goHome" class="py-2 px-4 mt-4 bg-sky-600 hover:bg-sky-700 text-white rounded-md">
      Back
    </button>
  </div>
</template>