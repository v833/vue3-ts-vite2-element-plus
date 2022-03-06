<template>
  <div>
    <el-menu v-for="item of data" style="width: 100px; height: auto" class="el-menu-demo">
      <el-menu-item :index="item.index">{{ item.name }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup name="Menu">
import { MenuItem } from './type'
import { PropType } from 'vue'
const props = defineProps({
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
})
</script>
<style lang=""></style>
