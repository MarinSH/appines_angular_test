/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat Alternates"', 'sans-serif'],
        montserratSimp: '--ion-font-family',
      },
      screens: {
        tablet: "640px",
      },
      colors: {
        primary: {
          100: 'var(--ion-color-primary-100)',
          200: 'var(--ion-color-primary-200)',
          300: 'var(--ion-color-primary-300)',
          400: 'var(--ion-color-primary-400)',
        },
        secondary: ' --ion-color-accent: #9C95DC',
        accent:'--ion-color-secondary: #C64191',
      },
      boxShadow: {
        'custom': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

