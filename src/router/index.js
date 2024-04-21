import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"; //引用 vue-router 的 createRouter() 與 createWebHistory()。
import { getToken } from "@/utils/cookie.js";
let history = createWebHashHistory(); //使用 createWebHistory() 建立 history。
let routes = [
  //將所有 route 設定定義在 routes Object Array。
  {
    path: "/",
    name: "index",
    meta: { name: "首頁 " },
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/example1",
    name: "example1",
    meta: { name: "example1" },
    component: () => import("@/views/example/example1.vue"),
  },
  {
    path: "/example2",
    name: "example2",
    meta: { name: "example2" },
    component: () => import("@/views/example/example2.vue"),
  }

  // {
  //   path: "/layout",
  //   name: "layout",
  //   meta: { name: "大廳" },
  //   redirect: "/layout/news",
  //   component: () => import("@/views/layout/layout.vue"),
  //   children: [
  //     {
  //       path: "news",
  //       name: "news",
  //       meta: {
  //         auth: false,
  //         name: "最新消息",
  //       },
  //       component: () => import("@/views/layout/news.vue"),
  //     }
  //   ],
  // },
];

const router = createRouter({ history, routes });
router.beforeEach((to, from) => {
  // 路由跳轉前觸發
  if (to.meta.auth) {
    // 檢查cookuie
    // console.log(from.name);
    // console.log(to);
    if (!getToken()) {
      console.log(from.name);
      return false;
    }
  }
});
export default router; //使用 createRouter() 根據 history 與 routes 建立 route。
