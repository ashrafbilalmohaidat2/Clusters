/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Cairo',
          'Tajawal',
          'Noto Sans Arabic',
          'Inter',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        primary: "#00AEEF",
        accent: "#F0F9FF",
        muted: "#9AA0A6",
        dark: "#222F3E",
        light: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
