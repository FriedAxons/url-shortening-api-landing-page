/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all relevant files in your src directory
  ],
  theme: {
    extend: {
      screens: {
        sm: "374px",
        md: "375px",
        lg: "1440px",
        xl: "1920px",
      },
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        cyanlight: "hsl(180, 66%, 70%)", // For ShortenURL component button
        darkviolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        grayishviolet: "hsl(257, 7%, 63%)",
        darkblue: "hsl(255, 11%, 22%)",
        verydarkviolet: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
