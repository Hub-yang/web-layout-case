<template>
  <div class="container">
    <div class="cards">
      <div class="card">
        <img src="../../../public/images/avatar.jpg" alt="缩略图" />
        <h3>Card Title</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
          inventore?
        </p>
        <button>Button</button>
      </div>
      <div class="card">
        <img src="../../../public/images/avatar.jpg" alt="缩略图" />
        <h3>Card Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          libero maiores harum aliquam tempora quae.
        </p>
        <button>Button</button>
      </div>
      <div class="card">
        <img src="../../../public/images/avatar.jpg" alt="缩略图" />
        <h3>Card Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
          iusto illum provident doloribus eos sed fugit recusandae ipsa autem
          nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Placeat, iusto illum provident
        </p>
        <button>Button</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container {
  @include base_main_container;
  display: flex;

  .cards {
    margin: auto;
    width: 90%;
    height: 85%;
    border-radius: 10px;
    background-color: #589388;
    padding: 30px;
    overflow-x: hidden;
    overflow-y: scroll;
    .card {
      height: 600px;
      border-radius: 10px;
      background-color: white;
      padding: 10px;
      img {
        height: 45%;
        border-radius: 10px 10px 0 0;
        object-fit: cover;
      }
      h3 {
        font-size: 1.5rem;
        color: #589388;
        font-weight: bolder;
      }
      p {
        line-height: 25px;
        font-size: 1rem;
      }
      button {
        outline: none;
        background-color: #589388;
        border: none;
        height: 40px;
        min-width: 100px;
        margin-bottom: 10px;
      }
    }
  }

  // 布局相关
  .cards {
    display: flex;
    justify-content: flex-start;
    gap: 30px;
    flex-wrap: wrap;

    .card {
      display: flex;
      flex-direction: column;
      flex: 1 1 400px;
      gap: 15px;

      p {
        flex-grow: 1;
      }
      button {
        align-self: flex-end;
      }
    }
  }
}
</style>
