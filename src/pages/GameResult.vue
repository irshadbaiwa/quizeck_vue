<script setup>
import { computed } from 'vue' 
import { useRoute, useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import LogoIcon from '../components/LogoIcon.vue'

// get result from Game Session
// recieved as route parameter
// that's why it is in JSON format
const props = defineProps({
  result: JSON,
})

const route = useRoute()
const router = useRouter()

// if no $result in params
// redirect to /play
if (!props.result) {
  router.replace('/play')
}

// parse JSON
const resultObj = computed(() => {
  return (props.result ? JSON.parse(props.result) : undefined)
})
// compute game score (questions answered correctly)
const score = computed(() => getScore(resultObj.value))

function getScore(result) {
  if (!Array.isArray(result)) return 0;

  const totalQuestions = result.length
  const correctAnswers = result.filter(question => {
    return (question.selectedAnswer === question.correctAnswer)
  }).length

  return ( (correctAnswers / totalQuestions) * 100 ).toFixed(1)
}

function isCorrect(data) {
  return (data.selectedAnswer === data.correctAnswer)
}

</script>

<template>
  <Header />
  <LogoIcon class="h-20 sm:h-24 block fill-sky-600 m-auto mt-5" />
  
  <div class="m-auto text-center text-3xl my-4 text-sky-700 font-bold">
    <h1>
      Your score is: 
      <span :class="score >= 50 ? 'text-emerald-700' : 'text-rose-700'">
        {{ `${score}%` }}
      </span>
    </h1>
  </div>

  <details class="m-auto text-center my-2">
    <summary class="text-lg">
      View details
    </summary>
    <div>
      <div 
        v-for="data in resultObj" 
        :key="data.id"
        class="my-4"  
      >
        <div class="w-5/6 max-w-xl h-56 m-auto p-4 bg-white rounded-xl drop-shadow overflow-y-auto">
          <h2 class="font-semibold my-1 text-lg">
            {{`Question ${data.id}` }}
            <svg v-if="isCorrect(data)" class="h-6 fill-emerald-500 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/></svg>
            <svg v-else class="h-6 fill-rose-600 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/></svg>
          </h2>
          <p v-html="data.question" class="my-2"></p>
          <p>
            Your answer - 
            <span
              v-html="data.selectedAnswer" 
              :class="isCorrect(data) ? 'text-emerald-700' : 'text-rose-700'"
            >
            </span>
          </p>
          <p>
            Correct answer - 
            <span
              v-html="data.correctAnswer" 
              class="text-emerald-700"
            >
            </span>
          </p>
        </div>
      </div>
    </div>
  </details>

  <RouterLink to="/play" class="m-auto text-center my-2 block">
    <button class="py-2 px-4 bg-sky-600 text-white text-lg hover:bg-sky-700 rounded">
      Play Again
    </button>
  </RouterLink>
</template>