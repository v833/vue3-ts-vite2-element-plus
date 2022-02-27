<template>
  <div class="q--choose-icon-dialog-body-height">
    <el-button @click="handleClick" type="primary">选择图标</el-button>
    <el-dialog v-model="dialogVisible" :title="title">
      <div class="container">
        <div class="item" v-for="(item, index) in Object.keys(ElIcons)" :key="index">
          <component
            @click="handleCopyClick(item)"
            class="icon"
            :is="`el-icon-${toLine(item)}`"
          ></component>
          <div>{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup name="ChooseIcon">
import * as ElIcons from '@element-plus/icons-vue'
import { toLine } from '@/utils'
import { useCopy } from '@/hooks/useCopy'
import { ref, watch } from 'vue'
const props = defineProps<{
  title: string
  visible: boolean
}>()
const emits = defineEmits(['update:visible'])
const dialogVisible = ref(props.visible)
const handleClick = () => {
  emits('update:visible', !props.visible)
}
const handleCopyClick = (item: string) => {
  let _text = `<el-icon-${toLine(item)}></el-icon-${toLine(item)}>`
  useCopy(_text)
  dialogVisible.value = false
}
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val
  }
)
watch(
  () => dialogVisible.value,
  (val) => {
    emits('update:visible', val)
  }
)
</script>
<style lang="scss">
.container {
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
.item {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
}
.icon {
  height: 50px;
}
svg {
  width: 1.5em;
  height: 1.5em;
}
</style>
