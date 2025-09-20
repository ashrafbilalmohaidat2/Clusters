/** @type {import('tailwindcss').Config} */
export default {
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
        secondary: "#3C3C3C", // Custom secondary color for text-secondary
        accent: "#F0F9FF",
        muted: "#9AA0A6",
        dark: "#222F3E",
        light: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
