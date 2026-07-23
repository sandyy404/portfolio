/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#e0edff',
          200: '#c7ddff',
          300: '#9ec4ff',
          400: '#6ca0ff',
          500: '#3b71ff',
          600: '#0052ff',
          700: '#0047e1',
          800: '#003bb6',
          900: '#06328e',
          950: '#031954',
        },
        cyanGlow: '#00F0FF',
        blueGlow: '#0066FF',
        darkBg: '#030712',
        darkSurface: '#0B0F19',
        darkCard: 'rgba(15, 23, 42, 0.65)',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(0, 102, 255, 0.4)',
        'glow-md': '0 0 25px -2px rgba(0, 240, 255, 0.5)',
        'glow-lg': '0 0 40px 0px rgba(0, 102, 255, 0.6)',
        'glow-cyan': '0 0 30px rgba(0, 240, 255, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px #0066FF)' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px #00F0FF)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        }
      }
    },
  },
  plugins: [],
}
