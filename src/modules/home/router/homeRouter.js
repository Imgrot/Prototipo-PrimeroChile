export default {
  path: '/',
  name: 'home',
  component: () => import('@/modules/home/views/HomeView.vue'),
  meta: { title: 'Inicio' },
}
