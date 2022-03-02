<template>
  <div :style="{ color: type === 'up' ? upTextColor : downTextColor }">
    <span v-if="!slots.default"> {{ text }}</span>
    <slot v-else></slot>
  </div>
  <component
    :is="`el-icon-${upIcon}`"
    v-if="type === 'up'"
    :style="{ color: upIconColor }"
  ></component>
  <component :is="`el-icon-${downIcon}`" v-else :style="{ color: downIconColor }"></component>
</template>

<script lang="ts" setup name="Trend">
import { useSlots } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'up',
  },
  upIconColor: {
    type: String,
    default: 'red',
  },
  downIconColor: {
    type: String,
    default: 'green',
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  upTextColor: {
    type: String,
    default: 'rgb(0,0,0)',
  },
  downTextColor: {
    type: String,
    default: 'rgb(0,0,0)',
  },
  upIcon: {
    type: String,
    default: 'arrowup',
  },
  downIcon: {
    type: String,
    default: 'arrowdown',
  },
})
const slots = useSlots()
</script>
<style lang=""></style>
