<template>
  <div class="container">
    <div class="footer">
      <div class="item">
        <img src="../../../public/images/avatar.jpg" alt="" />
        <span>test</span>
      </div>
      <div class="item">
        <img src="../../../public/images/avatar.jpg" alt="" />
        <span>test</span>
      </div>
      <div class="item">
        <img src="../../../public/images/avatar.jpg" alt="" />
        <span>test</span>
      </div>
      <div class="item">
        <img src="../../../public/images/avatar.jpg" alt="" />
        <span>test</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container {
  @include base_main_container;
  display: flex;

  .footer {
    padding: 10px;
    width: 50vw;
    background: white;
    border-radius: 10px;
    color: #000;
    font-size: 1.5rem;
    box-shadow: 0 10px 40px rgb(0 0 0 / 10%);
    margin: auto;

    img {
      width: 70px;
      height: 70px;
    }
  }

  // 布局代码
  .footer {
    display: flex;

    .item {
      flex: 1;
      min-width: 0; // 很重要！！！
    }

    .item {
      display: inline-flex;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  }
}
</style>
