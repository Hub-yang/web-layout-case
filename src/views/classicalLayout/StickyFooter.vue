<template>
  <div class="container">
    <header>header</header>
    <main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, magnam
        vitae? Aspernatur at ipsum sequi a placeat exercitationem dolore culpa
        voluptas beatae veritatis quia minus ullam rem, ipsa voluptatum
        voluptatem? Accusamus inventore deleniti iure amet nam eum nihil minima
        dolorum sed reprehenderit. Porro, debitis quaerat doloremque tempora
        ratione aliquam cupiditate aperiam fugiat deserunt nam a molestiae
        facere enim consectetur possimus repellendus quo, numquam maxime.
        Adipisci deleniti odit facilis dolores ipsum et consectetur nihil unde
        est aliquid beatae rem facere voluptas quod consequatur recusandae
        dolorum architecto porro, maxime aspernatur. Autem omnis dolor in
        assumenda ex vel veritatis libero doloremque tenetur quos?
      </p>
    </main>
    <footer>footer</footer>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container {
  background-color: $theme_bgColor;
  font-size: 20px;
}

//布局相关
.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  main {
    flex: 1 0 auto; // flex-shrink为0,避免浏览器视窗高度较小时，主内容的高度进行收缩
    min-height: 0;
  }

  header,
  footer {
    flex-shrink: 0; //flex-shrink为0,避免页头和页脚因浏览器视窗高度较小时被挤压
  }

  // 或者设置footer的margin-top位auto
  // & > * {
  //   flex-shrink: 0;
  // }

  // footer {
  //   margin-top: auto;
  // }
}
</style>
