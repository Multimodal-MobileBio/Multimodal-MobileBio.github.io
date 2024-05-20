/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          50: "#090d11",
          100: "#121b21",
          200: "#243542",
          300: "#365063",
          400: "#476a85",
          500: "#5985a6",
          600: "#7a9db8",
          700: "#9cb6c9",
          800: "#bdcedb",
          900: "#dee7ed",
          950: "#eef3f6",
        },
        background: {
          50: "#070e12",
          100: "#0e1c25",
          200: "#1d3949",
          300: "#2b556e",
          400: "#397293",
          500: "#478eb8",
          600: "#6ca5c6",
          700: "#91bbd4",
          800: "#b6d2e2",
          900: "#dae8f1",
          950: "#edf4f8",
        },
        primary: {
          50: "#060e13",
          100: "#0d1c26",
          200: "#19374d",
          300: "#265373",
          400: "#336f99",
          500: "#408abf",
          600: "#66a2cc",
          700: "#8cb9d9",
          800: "#b3d0e6",
          900: "#d9e8f2",
          950: "#ecf3f9",
        },
        secondary: {
          50: "#050e15",
          100: "#0a1c29",
          200: "#143852",
          300: "#1e547b",
          400: "#2870a4",
          500: "#328ccd",
          600: "#5ba3d7",
          700: "#84bae1",
          800: "#add1eb",
          900: "#d6e8f5",
          950: "#eaf4fa",
        },
        accent: {
          50: "#040e16",
          100: "#071d2c",
          200: "#0f3957",
          300: "#165683",
          400: "#1e72ae",
          500: "#258fda",
          600: "#51a5e1",
          700: "#7cbce9",
          800: "#a8d2f0",
          900: "#d3e9f8",
          950: "#e9f4fb",
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