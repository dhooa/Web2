/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8dd18d',
          400: '#5cb65c',
          500: '#379637',
          600: '#2a7c2a',
          700: '#236123',
          800: '#1f4f1f',
          900: '#1a421a',
        },
        'coffee': {
          50: '#faf7f0',
          100: '#f4ede0',
          200: '#e8d5b7',
          300: '#dab786',
          400: '#cc9654',
          500: '#b8803d',
          600: '#a86f35',
          700: '#8b5a2e',
          800: '#71492a',
          900: '#5c3d24',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'forest-gradient': 'linear-gradient(135deg, #1a421a 0%, #2a7c2a 50%, #379637 100%)',
        'coffee-gradient': 'linear-gradient(135deg, #5c3d24 0%, #8b5a2e 50%, #b8803d 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
