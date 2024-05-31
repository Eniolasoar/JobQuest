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
        lightGray:"#E6E4E6",
        lightWhite:"#F3F4F8"
      },
    fontFamily:{
      dmregular:["DMSans-Regular"],
      dmmedium:["DMSans-Medium"],
      dmbold:["DMSans-Bold"]
    },
    boxShadow: {
      custom: '0 2px 5.84px rgba(0, 0, 0, 0.25)',
    }
    }
    },plugins: [],
  };

