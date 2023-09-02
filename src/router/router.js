import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenerarToken from '../pages/GenerarToken'
import GuardarEstudiante from '../pages/GuardarEstudiante'

const routes = [
  {
    path: '/token',
    name: 'GenerarToken',

    component: () => import('../pages/GenerarToken')
  },
  {
    path: '/estudiante',
    name: 'GuardarEstudiante',

    component: () => import('../pages/GuardarEstudiante')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
