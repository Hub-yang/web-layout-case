<template>
  <!-- 圣杯布局是一个非常普通的三列布局。对圣杯布局有一定了解的同学都应该知道，构建圣杯布局时，对 HTML 的结构是有一定的要求，即 主内容为先 。早期这样做，是让用户在 Web 页面加载缓慢时，就能先看到主内容。 -->
  <!-- 经典圣布局 -->
  <!-- 圣杯布局应该具备的能力 -->
  <!-- 在 HTML 文档的源码中，主内容 <article> 要位于两个侧边栏 <aside> 之前；
    页头 <header> 和页脚 <footer> 并没有固定高度，即它们的 height 为 auto，由其内容或相关盒模型属性值（比如 padding 、margin 或 border）决定大小；
    在垂直方向，中间三列（<main>）的高度占据 <header> 和 <footer> 之外的浏览器视窗高度，并且随着内容增多而变高；
    在水平方向，一般情况之下两个侧边栏也是由其内容来决定大小，但多数情况之下会给两个侧边栏设置一个固定宽度，比如左侧边栏是 220px ，右侧边栏是 320px 。中间主内容列 <article> 占据两侧边栏之外的浏览器视窗宽度，并且随着内容增加，不会出现水平滚动条。 -->
  <div class="container">
    <header>
      <h3>logo</h3>
      <h3>导航</h3>
    </header>
    <main>
      <!-- 注意：内容先行！！！！！ -->
      <article>
        <h3>文章内容</h3>
      </article>
      <aside>
        <h3>左侧边栏</h3>
      </aside>
      <aside>
        <h3>右侧边栏</h3>
      </aside>
    </main>
    <footer>
      <h3>页脚</h3>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container {
  background-color: $theme_bgColor;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-height: 100%;

  main {
    flex: 1 1 0%;
    min-height: 0;

    display: flex;
    gap: 1px;

    aside:nth-of-type(1) {
      background-color: red;
      order: -1;
      min-width: 220px;
      max-width: 220px;
    }

    aside:nth-of-type(2) {
      background-color: blue;
      min-width: 220px;
      max-width: 220px;
    }

    article {
      flex: 1 1 0%;
      min-width: 0;
    }
  }

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  footer {
    display: flex;
    justify-content: center;
  }
}

// 媒体查询
@media screen and (max-width: 800px) {
  main {
    flex-direction: column;

    aside {
      width: 100%;
      max-width: none !important;

      &:nth-of-type(1) {
        order: 1 !important;
      }
    }
  }
}
</style>
