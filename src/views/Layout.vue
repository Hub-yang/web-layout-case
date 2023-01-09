<template>
  <h2>{{ countStore.count }}</h2>
</template>

<script setup lang="ts">
import { useCountStore } from "../store/count"
const countStore = useCountStore()
</script>

<style scoped lang="scss"></style>
