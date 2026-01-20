/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Caffè del Corso
        cream: {
          50: '#FEFDFB',
          100: '#FDF8F0',
          200: '#F5EDE0',
          300: '#EDE3D0',
          400: '#E5D9C0',
          500: '#D4C4A8',
        },
        coffee: {
          50: '#F5F0EB',
          100: '#E6DCD0',
          200: '#C9B89E',
          300: '#A68B5B',
          400: '#8B6914',
          500: '#6F4E37',
          600: '#5C3D2E',
          700: '#4A2C1A',
          800: '#3D2317',
          900: '#2C1810',
        },
        warm: {
          50: '#FFF8F1',
          100: '#FEECDC',
          200: '#FCD9BD',
          300: '#FDBA8C',
          400: '#FF8A4C',
          500: '#FF5A1F',
          600: '#D03801',
          700: '#B43403',
          800: '#8A2C0D',
          900: '#771D1D',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'coffee-pattern': "url('/src/assets/coffee-pattern.svg')",
      },
    },
  },
  plugins: [],
}
