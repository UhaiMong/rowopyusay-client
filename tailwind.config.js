/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#539165",

          "secondary": "#D85251",

          "accent": "#D59B6A",

          "neutral": "#826A5C",

          "base-100": "#2A303C",

          "info": "#3ABFF8",

          "success": "#499380",

          "warning": "#E97F14",

          "error": "#DF1A2F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
