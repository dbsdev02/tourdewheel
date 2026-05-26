/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Barlow Condensed'", 'sans-serif'],
        mono:    ["'JetBrains Mono'", 'monospace'],
        body:    ["'Barlow'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
