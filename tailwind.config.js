/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        'scroll-slow': 'scroll 15s linear infinite',
        'scroll-fast': 'scroll 8s linear infinite',
        'scroll-medium': 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [],
};
