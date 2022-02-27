<template>
  <ChooseIcon title="选择图标" v-model:visible="visible" />
</template>

<script lang="ts" setup name="ChooseIcon">
import ChooseIcon from '@c/chooseIcon/src/index.vue'
import { ref } from 'vue'
const visible = ref(false)
</script>
<style lang="scss"></style>
