/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all relevant files in your src directory
  ],
  theme: {
    extend: {
      colors: {
        gray: "hsl(0, 0%, 75%)",
        grayishviolet: "hsl(257, 7%, 63%)",
        darkblue: "hsl(255, 11%, 22%)",
        darkviolet: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
