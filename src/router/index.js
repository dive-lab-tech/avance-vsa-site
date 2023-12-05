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
      path: '/home',
      redirect: { name: 'home' }
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
      path: '/amenidades',
      name: 'amenidades',
      component: ()=> import('../views/AmenidadesView.vue')
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: ()=> import('@/components/common/ContactComponent.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: ()=> import('../views/NotFoundView.vue')
    },
  ]
})

export default router
