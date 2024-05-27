/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:"#312651",
          100:"#444262",
          200:"#83829A"
        },
        secondary:"#FF7754",
        gray:"#E6E4E6"
      }}
    },
  },
  plugins: [],
}

