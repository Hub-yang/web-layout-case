<template>
  <!-- 导航栏 -->
  <nav class="nav_container">
    <button
      v-for="btn in btnList"
      :key="btn.path"
      :class="curPath === btn.path ? 'active' : ''"
      @click="handleRouterLink(btn.path)"
    >
      {{ btn.text }}
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

const btnList = ref([
  { path: "flex", text: "flex属性demo" },
  { path: "width", text: "width" },
  { path: "centered", text: "水平垂直居中" },
  { path: "contour", text: "等高布局" },
  { path: "equalization", text: "均分列布局" },
])

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
  border-bottom: 2px solid #000;
  gap: 5px;
  button {
    min-width: 50px;
    &.active {
      color: red;
    }
  }
}
.main_container {
  height: calc(100vh - 50px - 2px);
}
</style>
