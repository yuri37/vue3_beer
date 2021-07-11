import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BeerOption from '../views/BeerOption.vue'
import BeerCompositionReactive from '../views/BeerCompositionReactive.vue'
import BeerCompositionRef from '../views/BeerCompositionRef.vue'
import BeerCompositionToRefs from '../views/BeerCompositionToRefs.vue'
import BeerCompositionLogic from '../views/BeerCompositionLogic.vue'
// import Phones from '../views/Phones.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/BeerOption',
    name: 'BeerOption',
    component: BeerOption
  },
  {
    path: '/BeerCompositionReactive',
    name: 'BeerCompositionReactive',
    component: BeerCompositionReactive
  },
    {
    path: '/BeerCompositionRef',
    name: 'BeerCompositionRef',
    component: BeerCompositionRef
  },
  {
    path: '/BeerCompositionToRefs',
    name: 'BeerCompositionToRefs',
    component: BeerCompositionToRefs
  },
  {
    path: '/BeerCompositionLogic',
    name: 'BeerCompositionLogic',
    component: BeerCompositionLogic
  },
  // {
  //   path: '/Phones',
  //   name: 'Phones',
  //   component: Phones
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
