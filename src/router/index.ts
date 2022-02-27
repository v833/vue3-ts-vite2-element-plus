import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@v/Home.vue'),
  },
]

export default createRouter({
  routes,
  history: createWebHashHistory(),
})
