<template>
  <router-link to="/example1">
    <div class="inline-block px-10 py-2 text-2xl font-bold mr-20 rounded-lg" :class="[
      route.path == '/example1'
        ? 'bg-black text-white'
        : 'bg-white text-black',
    ]">
      example1
    </div>
  </router-link>

  <div class="inline-block px-10 py-2 text-2xl font-bold mr-20 rounded-lg" :class="[
      route.path == '/example2'
        ? 'bg-black text-white'
        : 'bg-white text-black',
    ]" @click="go_example2">
    example2
  </div>

  <div @click="getscreenWidthData" class="inline-block px-10 py-2 text-2xl font-bold mr-20 rounded-lg">得到screenWidth全部資料</div>
  <div @click="getAPIData_token" class="inline-block px-10 py-2 text-2xl font-bold mr-20 rounded-lg">撈取登入資料(example)</div>
</template>

<script setup>
import { useStore } from "@/store";
import { onMounted, ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { clearCookies,setToken } from "@/utils/cookie";
import { getdata } from "@/utils/request";


defineProps({
  msg: String,
})

const { usescreenWidth } = useStore();
const router = useRouter();
const route = useRoute();

// API範例，以及示範settoken用法
const senddata = reactive({
  email: "aa@yahoo.com.tw",
  password: "aa",
});
const url = `${import.meta.env.VITE_BASIC_APIURL}`; // 從env撈
const getAPIData_token = async () => {
  console.log(url);
  const { data } = await getdata(`${url}/api/auth/login`, "post", senddata);
  setToken(data.tokenStr);
}

// ------------------------------------------------------------------
// 判斷是否超過寬度640
const mediaQuery = window.matchMedia("(min-width: 640px)");
usescreenWidth().min640 = mediaQuery.matches
mediaQuery.addListener((mq) => {
  usescreenWidth().min640 = mq.matches;
});
// ------------------------------------------------------------------
// 監控寬度，存在pinia
const adjustWidthstore = () => {
  usescreenWidth().windowWidth = window.innerWidth
}
// 監控是否為橫版/直版
const checkHorizontal = () => {
  // console.log(window.innerWidth)
  if (window.innerWidth >= window.innerHeight) {
    usescreenWidth().isHorizontal = true
  } else {
    // console.log(2)
    usescreenWidth().isHorizontal = false
  }
}
// ------------------------------------------------------------------
const getscreenWidthData = () => {
  console.log(usescreenWidth().min640);
  console.log(usescreenWidth().windowWidth);
  console.log(usescreenWidth().isHorizontal);
}

const go_example2 = (e) => {
  router.push("/example2");
}

onMounted(() => {
  clearCookies();
});


</script>
<style scoped></style>
