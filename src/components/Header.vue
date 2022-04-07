<script setup>
import { ref, reactive } from 'vue'
import Logo from './Logo.vue'
import NavLarge from './NavLarge.vue'
import MenuToggler from './MenuToggler.vue'
import NavSmall from './NavSmall.vue'

// Tailwind utility class
// for styling
const state = reactive({
  headerClass: [
    'w-screen', 'min-h-fit', 'flex', 
    'flex-col', 'justify-center', 'px-6', 
    'py-1', 'sm:bg-transparent'
  ],
  wrapperClass: [
    'flex', 'flex-row', 'justify-between', 
    'sm:justify-start', 'items-center', 
    'sm:px-6', 'py-2'
  ],
})

/*
 --- This code block is utilised by small screens ---- 
    for toggling navigation menu
*/
const showMenu = ref(false);

function toggleMenu() {
  if (showMenu.value) {
    // close menu
    showMenu.value = false

    // remove white background
    state.headerClass = state.headerClass.filter(className => className !== 'bg-white')
  }
  else {
    // show menu
    showMenu.value = true

    // add white background to header ( small screens )
    state.headerClass.push('bg-white')
  }
}
/* --- block end --- */

</script>

<template>
  <header :class="state.headerClass">
    <div :class="state.wrapperClass">
      <Logo />
      <!-- nav menu for large screens(640px above) -->
      <NavLarge />  
      <!-- nav menu toggler for small screens -->
      <MenuToggler @toggle="toggleMenu" :open="showMenu" />
    </div>
    <!-- nav menu for small screens -->
    <NavSmall v-show="showMenu" />
  </header>
</template>