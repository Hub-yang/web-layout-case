<template>
  <div class="container">
    <div class="flex_container">
      <img src="../../../public/images/avatar.jpg" alt="我们要水平垂直居中" />
      <h3>大漠|W3cplus.com</h3>
      <p>掘金小册.现代Web布局</p>
    </div>
  </div>
</template>

<script setup lang="scss"></script>
<style scoped lang="scss">
.container {
  @include base_main_container;
  display: flex;
  justify-content: center;
  align-items: center;
  .flex_container {
    @include base_view_contanier;
    min-height: 300px;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
}
</style>
