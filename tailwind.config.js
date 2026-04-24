/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand / Design System - Zenith Discipline
        'brand': '#4CAF50',
        'brand-dark': '#006e1c',
        'brand-light': '#f0f6ea',

        // Surface colors
        'surface': '#f5fbef',
        'surface-container': '#eaf0e4',
        'surface-low': '#f0f6ea',

        // Orange accent (secondary)
        'orange-light': '#FEB64C',
        'orange-dark': '#835500',

        // Neutrals
        'cream': '#FCFBFA',
        'slate-50': '#F9FAFB',
      },
      borderRadius: {
        'card': '12px',
        'xl-custom': '20px',
        'nav': '32px',
      },
      boxShadow: {
        'nav': '0px -8px 32px 0px rgba(0, 0, 0, 0.05)',
        'card': '0px 4px 12px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        'nav': '96px',
        'above-nav': '100px',
      },
      fontFamily: {
        sans: ['Lexend', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
