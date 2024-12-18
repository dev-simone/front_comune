/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web"],
      },
      colors: {
        primary: "var(--primary)",
        primaryDark: "var(--primary-dark)",
      },
    },
  },
  plugins: [],
};
