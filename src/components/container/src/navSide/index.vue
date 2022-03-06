<template>
  <div>
    <el-aside width="auto">
      <q-i-menu
        :data="data"
        router
        :collapse="collapse"
        :default-active="$route.path"
        class="el-menu-vertical-demo"
      >
      </q-i-menu>
    </el-aside>
  </div>
</template>

<script lang="ts" setup name="NavSide">
import { ref } from 'vue'
// const props = defineProps({
//   isCollapse: {
//     type: Boolean,
//     default: false,
//   },
// })
const props = defineProps<{ collapse: boolean }>()
const data = [
  {
    icon: 'homefilled',
    name: '首页',
    index: '/',
  },
  {
    icon: 'check',
    name: '图标选择器',
    index: '/choose-icon',
  },
  {
    icon: 'location',
    name: '省市区选择',
    index: '/choose-area',
  },
  {
    icon: 'sort',
    name: '趋势标记',
    index: '/trend',
  },
  {
    icon: 'menu',
    name: '导航菜单',
    index: '/menu',
  },
  {
    icon: 'timer',
    name: '时间选择器',
    index: '/chooseTime',
  },
  {
    icon: 'turnoff',
    name: '城市选择',
    index: '/choose-city',
  },
  {
    icon: 'darrowright',
    name: '进度条',
    index: '/progress',
  },
  {
    icon: 'calendar',
    name: '日历',
    index: '/calendar',
  },
  {
    icon: 'setting',
    name: '表单',
    index: '/form',
  },
  {
    icon: 'shoppingbag',
    name: '表格',
    index: '/table',
  },
]
</script>
<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
