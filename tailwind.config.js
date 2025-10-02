/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#2193b0',
          600: '#1b7b95',
          700: '#15677d',
        },
        accent: {
          300: '#6dd5ed',
        },
      },
      boxShadow: {
        soft: '0 4px 18px rgba(33, 147, 176, 0.10)',
        lift: '0 6px 24px rgba(33, 147, 176, 0.13)',
      },
      borderRadius: {
        xl2: '32px',
        xl3: '48px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 300ms ease-out both',
        'slide-up': 'slide-up 400ms ease-out both',
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}

