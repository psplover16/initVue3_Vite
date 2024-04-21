import { defineStore } from "pinia";

export const usescreenWidth = defineStore("screenWidth", {
  state: () => ({
    min640: false,
    windowWidth: 0,
    isHorizontal:true
  }),
  actions: {
    changeMsg(e) {
      // this.msge;
    },
  },
});
