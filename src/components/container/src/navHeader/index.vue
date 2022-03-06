<template>
  <div class="header">
    <span @click="handleToggleClick">
      <el-icon-expand v-if="collapse" style="cursor: pointer; margin-right: 10px" />
      <el-icon-fold v-else style="cursor: pointer" />
    </span>
  </div>
</template>

<script lang="ts" setup name="NavHeader">
import { ref } from 'vue'
const props = defineProps<{ collapse: boolean }>()
const handleToggleClick = () => {
  emits('update:collapse', !props.collapse)
}
const emits = defineEmits(['update:collapse'])
</script>
<style lang="scss">
.header {
  // margin-left: 20px;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
