/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#4caf50',
        greenHover: '#45a049',
        blue: '#5798d6',
        blueHover: '#4574a0'
      }
    },
  },
  plugins: [],
};
