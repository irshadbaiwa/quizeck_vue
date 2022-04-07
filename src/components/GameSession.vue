<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import Question from './Question.vue'

// get quiz questions from GameEngine(parent)
const props = defineProps({
  questions: Array
})

// keep track of answered questions here
const elapsedQuestions = reactive([])
// array index for accessing Qs one at a time
const index = ref(0)
// no. of Qs
const totalQuestions = computed(() => props.questions.length)
// router hook
const router = useRouter()

// show next question
function nextQuestion(prevQuestion) {
  elapsedQuestions.push(prevQuestion)
  index.value++
}

// finish quiz
function finish(lastQuestion) {
  elapsedQuestions.push(lastQuestion)
  // show results page
  router.push({ name: 'result', params: {result: JSON.stringify(elapsedQuestions)} })
}

</script>

<template>
  <div class="p-5">
    
    <div class="text-center m-2">
      <span>Question: </span><span>{{index + 1}} of {{totalQuestions}}</span>
    </div>

    <div class="relative w-48 rounded-xl h-2 mx-auto mb-4 bg-white">
      <div 
        :style="{ width: `${Math.round(((index+1) / totalQuestions) * 100)}%` }" 
        class="absolute top-0 left-0 h-full bg-sky-600 rounded-xl"
      >
      </div>
    </div>

    <Question 
      @next="nextQuestion"
      @finish="finish"
      :question="questions[index]" 
      :index="index" 
      :totalQuestions="totalQuestions"
    />

  </div>
</template>
