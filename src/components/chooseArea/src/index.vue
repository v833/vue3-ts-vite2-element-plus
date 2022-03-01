<template>
  <div class="container">
    <el-select v-model="province" placeholder="请选择省">
      <el-option v-for="item of china" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select v-model="city" placeholder="请选择市" :disabled="!province">
      <el-option
        v-for="city of selectCity"
        :key="city.code"
        :label="city.name"
        :value="city.code"
      />
    </el-select>
    <el-select v-model="area" placeholder="请选择区" :disabled="province && !city">
      <el-option
        v-for="area of selectArea"
        :key="area.code"
        :label="area.name"
        :value="area.code"
      />
    </el-select>
    <el-select v-model="town" placeholder="请选择乡镇" :disabled="province && city && !area">
      <el-option
        v-for="town of selectTown"
        :key="town.code"
        :label="town.name"
        :value="town.code"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup name="ChooseArea">
import ChinaPlace from './area.json'
// console.log('ChinaPlace: ', ChinaPlace)
import { ref, computed, watch } from 'vue'
export interface AreaItem {
  code: string
  name: string
  children: any[]
}
const china = ref(ChinaPlace)
const province = ref('')
const city = ref('')
const area = ref('')
const town = ref('')
const selectCity: AreaItem = computed(() => {
  city.value = ''
  area.value = ''
  town.value = ''
  if (!province.value) return []
  else {
    return china.value.find((item) => item.code === province.value)?.children
  }
})

const selectArea: AreaItem = computed(() => {
  area.value = ''
  town.value = ''
  if (!city.value) return []
  else {
    return selectCity.value.find((item) => item.code === city.value)?.children
  }
})

const selectTown: AreaItem = computed(() => {
  town.value = ''
  if (!area.value) return []
  else {
    return selectArea.value.find((item) => item.code === area.value)?.children
  }
})

watch(
  () => town.value,
  (val) => {
    if (val) {
      const _province = {
        code: province.value,
        name: province.value && china.value.find((item) => item.code === province.value).name,
      }
      const _city = {
        code: city.value,
        name: city.value && selectCity.value.find((item) => item.code === city.value).name,
      }
      const _area = {
        code: area.value,
        name: area.value && selectArea.value.find((item) => item.code === area.value).name,
      }
      const _town = {
        code: town.value,
        name: town.value && selectTown.value.find((item) => item.code === val).name,
      }

      emits('change', {
        province: _province,
        city: _city,
        area: _area,
        town: _town,
      })
    }
  }
)

const emits = defineEmits(['change'])
</script>
<style lang="scss">
.container {
  display: flex;
  .el-select {
    margin-right: 20px;
  }
}
</style>
