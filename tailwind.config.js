/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'text-color': 'var(--text-color)',
        'text-light': 'var(--text-light)',
        'bg-color': 'var(--bg-color)',
        'bg-light': 'var(--bg-light)',
        'border-color': 'var(--border-color)',
      },
      boxShadow: {
        'DEFAULT': 'var(--shadow)',
        'lg': 'var(--shadow-lg)',
      },
      keyframes: {
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
