/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto, Slab ui-serif', // Adds a new `font-display` class
        poppins: 'Poppins, ui-serif', // Adds a new `font-display` class
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
