/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    "w-1/2",
    "w-1/3",
    "w-1/4",
    "w-full",
    "bg-red-800",
    "hover:bg-red-700",
    "text-right"
  ],
  theme: {
    extend: {
      colors: {
        gary: "#f00",
      },
      backgroundImage: {
        'firstPage': "url('@/assets/images/notGet/first.jpg')",
      },
    },
  },
  plugins: [],
};

// 1.npm install -D tailwindcss postcss autoprefixer
// 2.npx tailwindcss init -p
// 3.創建本文件
// 4.創建css 及 引入css (main.js中引用)
