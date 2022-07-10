/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4587f8",
        darkMode: { primary: "#252525", secondary: "#414141" },
        lightMode: { primary: "#EEEEEE", secondary: "#DDDDDD" },
      },
    },
  },
  plugins: [],
};
