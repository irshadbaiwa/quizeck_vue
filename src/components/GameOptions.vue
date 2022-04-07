<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TextHeading from './TextHeading.vue'

// No. of questions options
const  quantities = [
    { option: '10', value: 10 },
    { option: '15', value: 15 },
    { option: '20', value: 20 },
    { option: '30', value: 30 },
]

// Category options
const categories = [
  { option: 'Random', value: null },
  { option: 'General Knowledge', value: 9 },
  { option: 'Film', value: 11 },
  { option: 'Video Games', value: 15 },
  { option: 'Mathematics', value: 19 },
  { option: 'Sports', value: 21 },
  { option: 'Computers', value: 18 },
  { option: 'History', value: 23 },
  { option: 'Animals', value: 27 },
]

// Difficulty levels
const  difficulties = [
    { option: 'Random', value: null },
    { option: 'Easy', value: 'easy' },
    { option: 'Medium', value: 'medium' },
    { option: 'Hard', value: 'hard' },
]

// default values
const quantity = ref(10)
const difficulty = ref(null)
const category = ref(null)

// back to home page
const router = useRouter()
function goBack() {
  router.replace('/')
}

// emit advance on form submission
const emit = defineEmits(['advance']);

</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen p-5 max-w-6xl m-auto">

    <form class="w-5/6 max-w-xl h-96 flex flex-col justify-between p-5 bg-white drop-shadow-md rounded-lg">
      
      <TextHeading class=" text-2xl sm:text-4xl">
        <div>
          <svg class="h-6 sm:h-10 inline-block fill-sky-600 mr-2 sm:mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z"/></svg>
          <span>Game Options</span>
        </div>
      </TextHeading>
      
      <div class="flex flex-col justify-center items-center">
        
        <label 
          class="block text-lg sm:text-xl" 
          for="quantity"
        >
          Total Questions:
        </label>
        <select 
          v-model="quantity" 
          id="quantity" 
          class="block bg-slate-100 rounded-md px-2 h-8 w-56 max-w-full border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-sky-200 mb-5"
        >
          <option 
            v-for="option in quantities" 
            :value="option.value" 
            :key="option.value"
          >
            {{ option.option }}
          </option>
        </select>

        <label 
          class="block text-lg sm:text-xl" 
          for="category"
        >
          Category:
        </label>
        <select 
          v-model="category" 
          id="category" 
          class="block bg-slate-100 rounded-md px-2 h-8 w-56 max-w-full border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-sky-200 mb-5"
        >
          <option 
            v-for="option in categories" 
            :value="option.value" 
            :key="option.value"
          >
            {{ option.option }}
          </option>
        </select>
      
        <label 
          class="block text-lg sm:text-xl" 
          for="difficulty"
        >
          Difficulty:
        </label>
        <select 
          v-model="difficulty" 
          id="difficulty" 
          class="block bg-slate-100 rounded-md px-2 h-8 w-56 max-w-full border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-sky-200 mb-5"
        >
          <option 
            v-for="option in difficulties" 
            :value="option.value" 
            :key="option.value"
          >
            {{ option.option }}
          </option>
        </select>
      
      </div>

      <div class="flex justify-between">
        <button 
          @click="goBack" 
          type="button" 
          class="py-2 px-4 bg-sky-600 text-white rounded-md"
        >
          Back
        </button>
        <button 
          @click.prevent="emit('advance', { quantity, category, difficulty })" 
          type="submit" 
          class="py-2 px-4 bg-emerald-600 text-white rounded-md"
        >
          Start
        </button>
      </div>

    </form>

  </div>
</template>