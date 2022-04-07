import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Play from './pages/Play.vue'
import GameResult from './pages/GameResult.vue'
import Rules from './pages/Rules.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'

// define routes
const routes = [
  { 
    path: '/',
    name: 'home', 
    component: Home 
  },
  { 
    path: '/play', 
    name: 'play',
    component: Play
  },
  { 
    path: '/result', 
    name: 'result', 
    component: GameResult,
    props: true
  },
  { 
    path: '/rules', 
    name: 'rules',
    component: Rules 
  },
  { 
    path: '/about',
    name: 'about', 
    component: About 
  },
  { 
    path: '/:notFound(.*)*', 
    name: '404',
    component: NotFound 
  },
]

// create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

