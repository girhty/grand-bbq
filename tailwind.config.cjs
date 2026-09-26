/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coal: {
          950: '#070605',
          900: '#0d0b09',
          800: '#16120f',
          700: '#221c17',
          600: '#342a22',
        },
        ember: {
          300: '#ff9a6b',
          400: '#ff7a3d',
          500: '#ff5a1f',
          600: '#e2410b',
          700: '#b3320a',
        },
        flame: {
          300: '#ffd27a',
          400: '#ffbe3d',
          500: '#ffa70f',
        },
        ash: {
          100: '#f5efe8',
          200: '#e6ddd2',
          300: '#bfb3a5',
          400: '#8f8375',
          500: '#6b6056',
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.32em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '40%': { opacity: '1', transform: 'scale(1.04)' },
          '70%': { opacity: '0.7', transform: 'scale(0.98)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        flicker: 'flicker 4s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        pulseRing: 'pulseRing 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
};