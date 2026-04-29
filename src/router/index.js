import { createRouter, createWebHistory } from 'vue-router'
import { buildDocumentTitle } from '@/helpers/documentTitle'
import { cancelAllRequests } from '@/global/config/api'
import homeRouter from '@/modules/home/router/homeRouter'
import comunasRouter from '@/modules/comunas/router/comunasRouter'
import atractivosRouter from '@/modules/atractivos/router/atractivosRouter'
import serviciosRouter from '@/modules/servicios/router/serviciosRouter'
import comunidadRouter from '@/modules/comunidad/router/comunidadRouter'
import emprendedoresRouter from '@/modules/emprendedores/router/emprendedoresRouter'
import publicarServicioRouter from '@/modules/publicarServicio/router/publicarServicioRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    homeRouter,
    comunasRouter,
    atractivosRouter,
    serviciosRouter,
    comunidadRouter,
    emprendedoresRouter,
    publicarServicioRouter,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

router.beforeEach((to, from, next) => {
  cancelAllRequests()
  next()
})

router.afterEach((to) => {
  document.title = buildDocumentTitle(to.meta.title)
})

export default router
