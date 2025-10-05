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
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-3deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #66D9EF, 0 0 10px #66D9EF, 0 0 15px #66D9EF' },
          '100%': { boxShadow: '0 0 10px #66D9EF, 0 0 20px #66D9EF, 0 0 30px #66D9EF' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};
