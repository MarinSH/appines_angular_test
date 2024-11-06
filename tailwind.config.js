/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'var(--ion-font-family-variant)',
        montserratSimp: 'var(--ion-font-family)',
      },
      screens: {
        tablet: "640px",
      },
      colors: {
        primary: {
          100: 'var(--ion-color-primary-100)',
          150: 'var(--ion-color-primary-150)',
          200: 'var(--ion-color-primary-200)',
          300: 'var(--ion-color-primary-300)',
          400: 'var(--ion-color-primary-400)',
          500: 'var(--ion-color-primary-500)',
          550: 'var(--ion-color-primary-550)',
          600: 'var(--ion-color-primary-600)',
          700: 'var(--ion-color-primary-700)',
          800: 'var(--ion-color-primary-800)',
          900: 'var(--ion-color-primary-900)',
        },
        secondary: ' --ion-color-secondary: #9C95DC',
        tertiary:'--ion-color-tertiary: #C64191',
      },
      boxShadow: {
        'custom': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

