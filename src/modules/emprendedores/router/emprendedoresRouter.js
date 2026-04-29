export default {
  path: '/emprendedores',
  name: 'emprendedores',
  component: () => import('@/modules/emprendedores/views/EmprendedoresView.vue'),
  meta: { title: 'Panel de emprendedores' },
}
