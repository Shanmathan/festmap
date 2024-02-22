/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode : "jit",
  theme: {
    extend: {
      backgroundImage: {
        'puri-beach': "url('/src/assets/puriBeach.jpg')",
        'puri-beach-satellite' : "url('/src/assets/puriBeachSatellite.png')",
      }
      },
    },
  plugins: [],
}