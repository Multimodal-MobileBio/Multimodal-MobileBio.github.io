/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        arrow: {
          "0%": {
            transform: "rotate(-45deg) translate(0, 0)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(-45deg) translate(-20px, 20px)",
            opacity: 0,
          },
        },
      },
      animation: {
        "arrow-down": "arrow 1.5s infinite",
      },
      // https://www.realtimecolors.com/?colors=0d0d0d-f9fafa-67a28b-a5d4c2-72cba9&fonts=Poppins-Poppins
      colors: {
        text: {
          50: "#0d0d0d",
          100: "#1a1a1a",
          200: "#333333",
          300: "#4d4d4d",
          400: "#666666",
          500: "#808080",
          600: "#999999",
          700: "#b3b3b3",
          800: "#cccccc",
          900: "#e6e6e6",
          950: "#f2f2f2",
        },
        background: {
          50: "#0c0e0e",
          100: "#171c1c",
          200: "#2e3838",
          300: "#465353",
          400: "#5d6f6f",
          500: "#748b8b",
          600: "#90a2a2",
          700: "#acb9b9",
          800: "#c7d1d1",
          900: "#e3e8e8",
          950: "#f1f3f3",
        },
        primary: {
          50: "#0a100d",
          100: "#13201b",
          200: "#273f36",
          300: "#3a5f51",
          400: "#4e7e6c",
          500: "#619e87",
          600: "#81b19f",
          700: "#a0c5b7",
          800: "#c0d8cf",
          900: "#dfece7",
          950: "#eff5f3",
        },
        secondary: {
          50: "#08110e",
          100: "#11221c",
          200: "#214537",
          300: "#326753",
          400: "#428a6e",
          500: "#53ac8a",
          600: "#75bda1",
          700: "#98cdb9",
          800: "#baded0",
          900: "#ddeee8",
          950: "#eef7f3",
        },
        accent: {
          50: "#07130e",
          100: "#0e251c",
          200: "#1c4a38",
          300: "#297055",
          400: "#379571",
          500: "#45ba8d",
          600: "#6ac8a4",
          700: "#8fd6bb",
          800: "#b5e3d1",
          900: "#daf1e8",
          950: "#ecf8f4",
        },
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
