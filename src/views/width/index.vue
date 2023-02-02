<template>
  <div class="container">
    <!-- 操作区域 -->
    <div class="operate-area">
      <div class="select-box">
        <span>width:&nbsp;</span>
        <select v-model="baseWidth">
          <option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></option>
        </select>
      </div>
    </div>
    <!-- 视图区域 -->
    <div class="main-area">
      <div
        class="item"
        :style="{ backgroundColor: item.color, width: baseWidth }"
        v-for="item in itemList"
        :key="item.color"
      >
        <span>{{ item.first }}</span
        >{{ item.second }}
      </div>
    </div>
  </div>
</template>

<script setup>
const baseWidth = ref("")

const itemList = [
  {
    color: "#d1b1f8",
    first: "A",
    second: "longlonglongword",
  },
  {
    color: "#c6f1ef",
    first: "B",
    second: "ook",
  },
  {
    color: "#fafaaa",
    first: "C",
    second: "ountries in the east",
  },
  {
    color: "#ddfab9",
    first: "D",
    second: "iscuss",
  },
  {
    color: "#f0bdb6",
    first: "E",
    second: "astern",
  },
]

const options = [
  {
    value: "auto",
    label: "auto",
  },
  {
    value: "300px",
    label: "300px",
  },
  {
    value: "30vw",
    label: "30vw",
  },
  {
    value: "30ch",
    label: "30ch",
  },
  {
    value: "30%",
    label: "30%",
  },
  {
    value: "30rem",
    label: "30rem",
  },
  {
    value: "30ex",
    label: "30ex",
  },
  {
    value: "30em",
    label: "30em",
  },
  {
    value: "min-content",
    label: "min-content",
  },
  {
    value: "max-content",
    label: "max-content",
  },
  {
    value: "fit-content",
    label: "fit-content(10em)",
  },
]
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100vw;
  overflow: hidden;
  background-color: $theme_bgColor;

  .operate-area {
    height: 10%;
    color: #fff;
    font-size: 17px;
    font-weight: bolder;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    .switch-box {
      display: flex;
      align-items: center;
      label {
        display: inline-block;
        text-align: end;
      }
      input {
        display: inline-block;
        width: 20px;
        height: 20px;
      }
    }

    .select-box select {
      min-width: 150px;
    }
  }

  .main-area {
    @include base_view_contanier;
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;

    .item {
      transition: all 0.2s ease;
      border-radius: 8px;
      font-weight: bolder;
      span {
        font-size: 3rem;
      }

      &:nth-child(2) {
        text-decoration: underline double currentColor;
      }
      &:nth-child(4) {
        text-decoration: underline dashed currentColor;
      }
      &:last-child {
        text-decoration: underline wavy currentColor;
      }
    }
  }
}
</style>
