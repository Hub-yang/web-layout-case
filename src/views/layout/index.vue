<template>
  <!-- 导航栏 -->
  <nav class="nav_container">
    <button
      :class="curPath === 'flex' ? 'active' : ''"
      @click="handleRouterLink('flex')"
    >
      flex属性demo
    </button>
    <button
      :class="curPath === 'test' ? 'active' : ''"
      @click="handleRouterLink('test')"
    >
      test
    </button>
  </nav>
  <main class="main_container">
    <router-view></router-view>
  </main>
</template>

<script setup>
const router = useRouter()
const route = useRoute()
const curPath = ref("")

const handleRouterLink = (path) => {
  router.push(path)
}
watch(
  route,
  (newVal) => {
    curPath.value = newVal.name
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.nav_container {
  height: $base_nav_height;
  background-color: $theme_bgColor;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    min-width: 50px;
    &.active {
      color: red;
    }
  }
}
.main_container {
  height: calc(100vh - 50px);
}
</style>
