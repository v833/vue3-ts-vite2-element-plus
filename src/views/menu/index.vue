<template>
  <div>
    <q-i-menu :data="data" defaultActive="1" />
  </div>
</template>

<script lang="ts" setup name="menu">
const data = [
  {
    name: 'one',
    index: '1',
    icon: 'menu',
  },
  {
    name: 'Two',
    index: '2',
    icon: 'menu',
  },
  {
    name: 'Three',
    index: '3',
    icon: 'menu',
    children: [
      {
        name: '3-3',
        index: '3-3',
        children: [
          {
            name: '3-3-3',
            index: '3-3-3',
          },
        ],
      },
    ],
  },
]
</script>
<style lang=""></style>
