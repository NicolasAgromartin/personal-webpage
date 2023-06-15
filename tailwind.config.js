/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/**/*.jsx",
    "./src/views/**/*.jsx",
  
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#1868C3',
        'contrast':'#204C7D',
        'border':'#0B0429',
        'background':'#0F172A',

      }
    },

  },
  plugins: [],
}

