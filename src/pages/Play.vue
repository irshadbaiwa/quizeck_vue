<script setup>
import { ref } from 'vue'
import GameEngine from '../components/GameEngine.vue'
import GameOptions from '../components/GameOptions.vue'

const ready = ref(false)
const gameOptions = ref({
  // default game options
  quantity: 10, // 10 questions
  difficulty: null, // random
  category: null, // random
})

function startGame(options) {
  // update game options
  gameOptions.value = { ...options }
  // start game
  ready.value = true
}

</script>

<template>
  <GameEngine v-if="ready" :options="gameOptions" />
  <GameOptions v-else @advance="startGame" />
</template>

