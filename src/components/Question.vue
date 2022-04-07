<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  question: Object,
  index: Number,
  totalQuestions: Number,
})
const emit = defineEmits(['next', 'finish'])
const selected = ref(null)

const buttonText = computed(() => {
  return (props.index+1 === props.totalQuestions) ? 'Finish' : 'Next'
})

// move to next question
function next() { 
  // record current question
  const currentQuestion = {
    id: props.index + 1,
    question: props.question.question,
    correctAnswer: props.question.options.filter(option => option.isCorrect)[0].option,
    selectedAnswer: selected.value ? selected.value : 'Unanswered',
  } 
  
  // finish quiz if no more questions
  if (props.index+1 === props.totalQuestions) emit('finish', currentQuestion)
  else emit('next', currentQuestion)

  // clear selected answer variable
  selected.value = null
}

</script>

<template>
  <div class="w-4/5 max-w-xl m-auto">

    <div class="flex flex-col text-center sm:flex-row justify-between my-2">
      <p class="text-green-800">
        Category - {{props.question.category}}
      </p>
      <p class="text-cyan-800">
        Difficulty - {{props.question.difficulty}}
      </p>
    </div>  

    <p 
      v-html="props.question.question" 
      class="text-center my-2 italic text-xl text-rose-800"
    >
    </p>

    <form>
      <div 
        v-for="(option, idx) in question.options" 
        :key="idx+1" 
        class="m-2"
      >
        <input 
          type="radio" 
          :value="option.option" 
          v-model="selected" 
          :id="`option${idx+1}`" 
        />
        <label 
          :for="`option${idx+1}`" 
          v-html="option.option" 
          class="ml-2"
        >
        </label>
      </div>
      <button 
        type="submit" 
        @click.prevent="next" 
        class="py-2 px-4 mt-6 bg-sky-600 hover:bg-sky-700 text-white rounded"
      >
        {{ buttonText }}
      </button>
    </form>

  </div>
</template>