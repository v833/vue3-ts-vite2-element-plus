<template>
  <div>
    <q-choose-area @change="handleChange" />
  </div>
</template>

<script lang="ts" setup name="ChooseArea">
const handleChange = (place) => {
  console.log(place)
}
</script>
<style lang=""></style>
