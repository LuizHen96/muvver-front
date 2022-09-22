import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TravellerView from '../views/TravellerView.vue'
import FinishView from '../views/FinishView.vue'
import VolumesView from '../views/VolumesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/viajante',
    name: 'viajante',
    component: TravellerView
  },
  {
    path: '/criado',
    name: 'criado',
    component: FinishView
  },
  {
    path: '/volumes',
    name: 'volumes',
    component: VolumesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
