/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-custom": "var(--primary-custom)",
        "secondary-custom": "var(--secondary-custom)",
        "white-custom": "var(--white-custom)",
        "black-custom": "var(--black-custom)",
        "gray-100-custom": "var(--gray-100-custom)",
        "gray-300-custom": "var(--gray-300-custom)",
        "gray-600-custom": "var(--gray-600-custom)",
        "gray-900-custom": "var(--gray-900-custom)",
      }
    },
  },
  plugins: [],
}