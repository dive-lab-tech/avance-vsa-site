import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/HomeView.vue')
    },
    {
      path: '/modelos',
      name: 'modelos',
      component: ()=> import('../views/ModelosView.vue')
    },
    {
      path: '/modelos/veranera-a',
      name: 'veranera-a',
      component: ()=> import('../views/VeraneraAView.vue')
    },
    {
      path: '/modelos/buganvilia-a',
      name: 'buganvilia-a',
      component: ()=> import('../views/BuganviliaAView.vue')

    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: ()=> import('../views/NotFoundView.vue')
    },
  ]
})

export default router
