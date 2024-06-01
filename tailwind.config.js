/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      ny: ["New York", "serif"],
      pretendard: ["Pretendard", "sans-serif"],
      nm: ["Nanum Myeongjo", "serif"],
      p: ["Poppins", "sans-serif"],
      dm: ["DM Serif Display", "serif"],
    },
  },
  plugins: [],
};
