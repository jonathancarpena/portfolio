/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
        code: ["Inconsolata", "monospace"]
      },

      colors: {
        accent: {
          100: '#dcd2f9',
          200: '#b9a6f2',
          300: '#9679ec',
          400: '#734de5',
          500: '#5020df',
          600: '#401ab2',
          700: '#301386',
          800: '#200d59',
          900: '#10062d'
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },

      },
      animation: {
        'wiggle': 'wiggle 400ms ease-in-out ',
      },
    },
  },
  plugins: [],
}
