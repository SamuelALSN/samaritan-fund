module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Rubik'],
      },
      flex: {
        1: '1 1 0%',
        2: '2 2 0%',
        3: '1 0 100%',
      },
      spacing: {
        88: '22rem',
        112: '28rem',
        118: '29.5rem',
        120: '30rem',
        124: '31rem',
        125: '32rem',
        136: '34rem',
        148: '37rem',
        160: '40rem',
        184: '45rem',
        200: '50rem',
        208: '52rem',
      },
      margin: {
        '-112': '-28rem',
      },
      width: {
        '4/7': '49%',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
    },
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [],
}
