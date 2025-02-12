/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundPosition: {
      'left-60': '60% center'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '768px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px'
      }
    },
    
    extend: {
      keyframes: {
        'fade-in': {
          'from': {
              opacity: '0'
          },
          'to': {
              opacity: '1'
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'spin-slow': 'spin 5s linear infinite'
      },
      
      backgroundImage: {
        'hero': "url('/assets/hero-background.jpg')",
      },
      colors: {
        gray: {
          100: '#FBFDFE',
          150: '#F9F9F9',
          200: '#ECEEEF',
          300: '#C4D0D2',
          400: '#96AEB4',
          500: '#8D8D93',
          600: '#6D6C74',
          700: '#4E4C54',
          800: '#302B35',
          900: '#120B16',
        },

        primary: {
          100: '#F1FBFF',
          200: '#D2F1FF',
          300: '#A8E1FF',
          400: '#54BEFF',
          500: '#0095F2',
          600: '#354277',
          700: '#2B244B',
        },

        secondary: {
          100: '#FCFCFD',
          200: '#D3D2DC',
          300: '#A9A8B9',
          400: '#807E96',
          500: '#585471',
          600: '#302A4C',
          700: '#090125',
        }
      }
    },
  },
  plugins: [],
}
