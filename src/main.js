import { createApp } from 'vue'
import "./index.css";

import App from './App.vue'
import pinia from "./store/pinia";
import router from "./router";
import VueCookies from "vue-cookies";
import { useStore } from "@/store";

import * as directive from "./utils/directive.js";




const app = createApp(App);

Object.keys(directive).forEach((item) => {
  directive[item](app)
})


// 在 beforeCreate 钩子中重置 myStore 实例的状态
window.addEventListener("beforeunload", () => {
  
});
//

app.use(router);
app.use(pinia);
app.use(VueCookies, { expires: "12h" }); //cookie保存7天
//
app.mount("#app");
