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

src/App.css 파일을 생성하거나 기존 파일을 열어 다음 지시어를 추가합니다
@tailwind base;
@tailwind components;
@tailwind utilities;

src/App.tsx 파일에서 App.css를 import하여 Tailwind CSS를 적용합니다
import React from 'react'
import './index.css'

...
