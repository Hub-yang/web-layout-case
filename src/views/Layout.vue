<template>
  <div class="container">
    <!-- 操作区域 -->
    <div class="operate-area">
      <div class="switch-box">
        <label for="test">{{ wrapVal }}:&nbsp;</label>
        <input type="checkbox" id="test" v-model="isWrap" />
      </div>
      <div class="select-box">
        <span>justify-content:&nbsp;</span>
        <select v-model="justifyContentVal">
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
    <div
      class="main-area"
      :style="{
        width: isWrap ? '55%' : '55%',
        flexWrap: wrapVal,
        flexDirection: 'row',
        justifyContent: justifyContentVal,
      }"
    >
      <div
        class="item"
        :style="{ backgroundColor: item }"
        v-for="(item, index) in colors"
        :key="item"
      >
        {{ index + 1 }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const justifyContentVal = ref("")
const isWrap = ref(false)
const wrapVal = computed(() => {
  return isWrap.value ? "wrap" : "nowrap"
})

const colors = [
  "#e9f0fd",
  "#ede1fd",
  "#c0d6b3",
  "#e4bdbc",
  "#6eecfc",
  "#d1b13c",
  "#6fecb3",
  "#cb2ba5",
]

const options = [
  {
    value: "flex-start",
    label: "flex-start",
  },
  {
    value: "center",
    label: "center",
  },
  {
    value: "flex-end",
    label: "flex-end",
  },
  {
    value: "start",
    label: "start",
  },
  {
    value: "end",
    label: "end",
  },
  {
    value: "space-around",
    label: "space-around",
  },
  {
    value: "space-between",
    label: "space-between",
  },
  {
    value: "space-evenly",
    label: "space-evenly",
  },
  {
    value: "inherit",
    label: "inherit",
  },
  {
    value: "initial",
    label: "initial",
  },
  {
    value: "revert",
    label: "revert",
  },
  {
    value: "unset",
    label: "unset",
  },
]
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #494866;

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
        width: 90px;
        text-align: end;
      }
      input {
        display: inline-block;
        width: 20px;
        height: 20px;
      }
    }
    .select-box input {
      width: 155px;
      height: 30px;
    }
  }

  .main-area {
    margin: 0 auto;
    width: 55%;
    height: 60%;
    background-color: #fff;
    border: 3px solid #7b857f;
    border-radius: 10px;
    display: flex;

    .item {
      width: 120px;
      height: 120px;
      border-radius: 8px;
      border: 2px solid #2c38e0;
      color: #000;
      font-weight: bolder;
      font-size: 20px;
      line-height: 120px;
      text-align: center;
    }
  }
}
</style>
