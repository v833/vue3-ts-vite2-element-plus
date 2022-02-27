<template>
  <div>
    <el-aside width="auto">
      <el-menu :collapse="collapse" default-active="1" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <el-icon-menu />
          <span>首页</span>
        </el-menu-item>

        <el-menu-item index="2">
          <el-icon-menu />
          <span>图标选择器</span>
        </el-menu-item>

        <el-menu-item index="3">
          <el-icon-menu />
          <span>趋势标记</span>
        </el-menu-item>

        <el-menu-item index="4">
          <el-icon-menu />
          <span>4</span>
        </el-menu-item>
      </el-menu>
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
</script>
<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
