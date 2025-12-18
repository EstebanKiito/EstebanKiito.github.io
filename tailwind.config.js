/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'pixel' será el nombre de la clase en Tailwind (font-pixel)
        // 'Determination' debe coincidir EXACTAMENTE con el font-family del Paso 2
        pixel: ['"Determination"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}