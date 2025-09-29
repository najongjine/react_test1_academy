npm install -D tailwindcss@3 postcss autoprefixer

npx tailwindcss init

tailwind.config.js 파일을 열고, Tailwind CSS가 적용될 파일 경로를 지정합니다

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}"
],
theme: {
extend: {},
},
plugins: [],
}
