/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'table': 'repeat(6, max-content)',
      },
      fontFamily: {
        "Inter": ['Inter', 'sans-serif']
    },
    keyframes: {
      animatedgradient: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    },
    backgroundSize: {
      '300%': '300%',
    },
    animation: {
      gradient: 'animatedgradient 6s ease infinite alternate',
    },
    },
  },
  plugins: [],
}