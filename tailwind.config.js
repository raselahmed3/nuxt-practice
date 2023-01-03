/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
     screens: {
        sm: '400px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1296px',
      },
  },
  plugins: [],
}
