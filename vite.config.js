import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd())
  // console.log(env.VITE_BASIC_APIURL); //輸出VITE_BASE的環境變數
  return {
    plugins: [vue()],
    // envPrefix:"GGWP", //env的開頭必須是VITE，但此處可以自訂義開頭
    base: "./",
    // publicPath: "./",
    resolve: {
      alias: {
        '@': [path.resolve(__dirname, './src')] //設置路徑代表的東西
      }
    },
    envDir: path.resolve(__dirname, "./env"),
  }
})