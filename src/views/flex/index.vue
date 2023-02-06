<template>
  <div class="container">
    <!-- 操作区域 -->
    <div class="operate-area">
      <!-- item是否设置高度 -->
      <div class="switch-box">
        <label for="isheight">设置项目高度:&nbsp;</label>
        <input type="checkbox" id="isheight" v-model="isHeight" />
      </div>
      <!-- flex-wrap -->
      <div class="switch-box">
        <label for="iswrap">{{ wrapVal }}:&nbsp;</label>
        <input type="checkbox" id="iswrap" v-model="isWrap" />
      </div>
      <!-- flex-direction -->
      <div class="select-box">
        <span>flex-direction:&nbsp;</span>
        <select v-model="flexDirectionVal">
          <option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></option>
        </select>
      </div>
      <!-- justify-content -->
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
      <!-- align-content -->
      <div class="select-box">
        <span>align-content:&nbsp;</span>
        <select v-model="alignContentVal">
          <option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></option>
        </select>
      </div>
      <!-- align-items -->
      <div class="select-box">
        <span>align-items:&nbsp;</span>
        <select v-model="alignItemsVal">
          <option
            v-for="item in options4"
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
        flexWrap: wrapVal,
        flexDirection: flexDirectionVal,
        justifyContent: justifyContentVal,
        alignContent: alignContentVal,
        alignItems: alignItemsVal,
      }"
    >
      <div
        class="item"
        :style="{
          backgroundColor: item,
          height: isHeight ? '120px' : '',
          width: '120px',
        }"
        v-for="(item, index) in colors"
        :key="item"
      >
        {{ index + 1 }}
      </div>
      <div
        class="item"
        :style="{
          height: isHeight ? '135px' : '',
          width: '135px',
          backgroundColor: 'aqua',
        }"
      >
        {{ colors.length + 1 }}
      </div>
    </div>
  </div>
</template>

<script setup>
const justifyContentVal = ref("")
const isWrap = ref(false)
const isHeight = ref(true)
const wrapVal = computed(() => {
  return isWrap.value ? "wrap" : "nowrap"
})
const flexDirectionVal = ref("")
const alignContentVal = ref("")
const alignItemsVal = ref("")

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

const options2 = [
  {
    value: "row",
    label: "row",
  },
  {
    value: "row-reverse",
    label: "row-reverse",
  },
  {
    value: "column",
    label: "column",
  },
  {
    value: "column-reverse",
    label: "column-reverse",
  },
]

const options3 = [
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
    value: "stretch",
    label: "stretch",
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

const options4 = [
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
    value: "baseline",
    label: "baseline",
  },
  {
    value: "stretch",
    label: "stretch",
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
    value: "unset",
    label: "unset",
  },
]
</script>

<style scoped lang="scss">
.container {
  @include base_main_container;

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
    height: 60%;
    display: flex;
    gap: 5px;
    .item {
      border-radius: 8px;
      border: 2px solid #2c38e0;
      color: #000;
      font-weight: bolder;
      font-size: 20px;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
