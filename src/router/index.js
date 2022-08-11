import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/pages/HomeSite.vue'
import About from '../components/pages/AboutSite.vue'
import Contact from '../components/pages/ContactSite.vue'





const routes=[
  {
  path:'/home',
  component:Home
  },
  
  {
  path:'/Contact',
  component:Contact
  },
  
  {
  path:'/about',
  component:About
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})




export default router
    