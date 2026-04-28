import { createRouter, createWebHistory } from 'vue-router'
import { buildDocumentTitle } from '@/helpers/documentTitle'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Inicio' },
    },
    {
      path: '/comunas',
      name: 'comunas',
      component: () => import('@/views/ComunasView.vue'),
      meta: { title: 'Comunas' },
    },
    {
      path: '/atractivos',
      name: 'atractivos',
      component: () => import('@/views/AtractivosView.vue'),
      meta: { title: 'Atractivos' },
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('@/views/ServiciosView.vue'),
      meta: { title: 'Servicios' },
    },
    {
      path: '/comunidad',
      name: 'comunidad',
      component: () => import('@/views/ComunidadView.vue'),
      meta: { title: 'Comunidad' },
    },
    {
      path: '/emprendedores',
      name: 'emprendedores',
      component: () => import('@/views/EmprendedoresView.vue'),
      meta: { title: 'Panel de emprendedores' },
    },
    {
      path: '/publicar-servicio',
      name: 'publicar-servicio',
      component: () => import('@/views/PublicarServicioView.vue'),
      meta: { title: 'Publicar servicio' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

router.afterEach((to) => {
  document.title = buildDocumentTitle(to.meta.title)
})

export default router
