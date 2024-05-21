/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif', ],
        'pretendard': ['Pretendard', 'sans-serif']// Ensure the fallback font is sensible
      },
      fontSize: {
        'custom': '12px' // 'custom'은 원하는 클래스 이름으로 변경 가능
      },
      lineHeight: {
        'custom': '22px' // 'custom'은 원하는 클래스 이름으로 변경 가능
      },
    },
  },
  plugins: [],
}