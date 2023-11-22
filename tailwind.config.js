/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#1b1b1d4d",
        "border": "#d3d3d33b",
        "taskbar-hover":"#ffffff80"
      },
      backgroundImage:{
        'layout': 'url(./assets/img/bigsur-light.jpg)'
      }
    },
  },
  plugins: [],
}
