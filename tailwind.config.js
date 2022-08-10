/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../images/hero.svg')",
        'hero-sm': "url('../images/hero-sm.svg')",
        'hero-md': "url('../images/hero-md.svg')",
      },
      fontFamily: {
        sans: 'Poppins',
        serif: 'Merriweather'
      },
      dropShadow: {
        'text': '6px 6px 0px rgba(0,0,0,1)',
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
        light: '#e8e8e8',
        lighter: '#ffffff',
        dark: '#272727',
        darker: '#1A1A1A',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
