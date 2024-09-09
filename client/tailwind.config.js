module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
        'dark-red': '#d65c5c',
        'dark-blue': '#1f2937',
        'dark-gray': '#242424',
        'dark-black': '#1f1f1f',
        'dark-transparent': '#0000000d',
        'dark-card': '#BFBFBF',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}