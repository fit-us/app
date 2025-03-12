/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        main: "#9D4EDD",
      },
      fontFamily: {
        "suit-regular": ["SUIT-Regular"],
        "suit-extrabold": ["SUIT-ExtraBold"],
        "suit-bold": ["SUIT-Bold"],
        "suit-light": ["SUIT-Light"],
      },
    },
  },
  plugins: [],
};
