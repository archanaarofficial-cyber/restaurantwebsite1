/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff8eb",
          100: "#ffecc7",
          200: "#ffdc94",
          300: "#ffc55b",
          400: "#ffac32",
          500: "#f98b07",
          600: "#dd6802",
          700: "#b74806",
          800: "#94380d",
          900: "#7a300e"
        },
        veg: "#2f855a",
        nonveg: "#9b2c2c"
      },
      boxShadow: {
        glow: "0 10px 30px rgba(249, 139, 7, 0.18)"
      }
    }
  },
  plugins: []
};
