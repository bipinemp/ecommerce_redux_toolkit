/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
    screens: {
      md: { max: "1000px" },
      sm: { max: "500px" },
    },
  },
  plugins: [],
};
