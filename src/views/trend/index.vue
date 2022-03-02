<template>
  <div>
    <div class="container">
      <q-trend
        text="营业额"
        upIcon="arrowupbold"
        type="up"
        upIconColor="pink"
        upTextColor="red"
      ></q-trend>
      <q-trend text="销售额" type="down" downIconColor="blue" downTextColor="green"></q-trend>
    </div>
  </div>
</template>

<script lang="ts" setup name="Trend"></script>
<style lang=""></style>
