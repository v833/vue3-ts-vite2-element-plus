import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@v/Home.vue'
import Container from '@c/container/src/index.vue'
import ChooseIcon from '@v/chooseIcon/index.vue'
import ChooseArea from '@v/chooseArea/index.vue'
import Trend from '@v/trend/index.vue'
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
      {
        path: '/choose-area',
        name: 'ChooseArea',
        component: ChooseArea,
      },
      {
        path: '/trend',
        name: 'Trend',
        component: Trend,
      },
    ],
  },
]

export default createRouter({
  routes,
  history: createWebHashHistory(),
})
