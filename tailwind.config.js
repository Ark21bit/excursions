/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        CormorantUnicase: ["CormorantUnicase", "serif"],
      },
    },
  },
  plugins: [],
};
