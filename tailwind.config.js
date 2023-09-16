/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "light",
    themes: {
      "verdi-gris": {
        
        colors: {
          background: "#0D001A",
          foreground: "#ffffff",
          primary: {
            50: "#fff",
            100: "#ecfdf5",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#10b981",
            600: "#059669",
            700: "#065f46",
            800: "#064e3b",
            900: "#022c22",
            DEFAULT: "#4CB5AE",
            foreground: "#ffffff",
          },
          focus: "#4CB5AE",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
    },
  })],
}

