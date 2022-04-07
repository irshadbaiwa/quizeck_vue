<script setup>
import { useFetch } from '../helpers/fetchQuestions'
import Loading from './Loading.vue'
import LoadError from './LoadError.vue'
import GameSession from './GameSession.vue'

const props = defineProps({
  options: Object
})

// fetch quiz
const { data, error } = useFetch(props.options);

</script>

<template>
  <LoadError v-if="error" />
  <GameSession v-else-if="data" :questions="data" />
  <Loading v-else />
</template>