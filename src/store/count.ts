import { defineStore } from "pinia"

export const useCountStore = defineStore({
  id: "count",
  state: () => {
    return {
      count: 0,
    }
  },
})
