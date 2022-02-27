import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@v/Home.vue'
import Container from '@c/container/src/index.vue'
import ChooseIcon from '@v/chooseIcon/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Container',
    component: Container,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/choose-icon',
        name: 'ChooseIcon',
        component: ChooseIcon,
      },
    ],
  },
]

export default createRouter({
  routes,
  history: createWebHashHistory(),
})
