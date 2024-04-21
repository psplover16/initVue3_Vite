import { defineStore } from 'pinia';

// 這邊 defineStore 會自動動態註冊模組，回傳值為 hook function
export const useLoading = defineStore('loadstore', {
  // 注意 state 是一個 function，推薦使用 arrow function
  // 可幫助 typescript 更好進行類型推斷
  state: () => ({
    loading: false,
    counter: 1,
    routeformPath:"" //放 router跳轉時，舊的route
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
    // doubleCounter() { return this.counter * 2 }
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    changeLoadingStatus(e) {
      this.loading = e
    }
  },
})