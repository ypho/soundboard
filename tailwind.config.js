module.exports = {
  content: ["./resources/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        logo_coffee: '#FFDD00',
        logo_github: '#181717',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    //require('nightwind')
  ],
}
