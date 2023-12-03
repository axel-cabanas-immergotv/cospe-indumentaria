/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '4vw',
      screens: {
        sm: '1600px',
        md: '1600px',
        lg: '1600px',
        xl: '1600px',
        '2xl': '1600px',
      },
    },
  },
  plugins: [],
}

