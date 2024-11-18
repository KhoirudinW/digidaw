// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-900': '#1a1f4d',
        'cyan-400': '#22d3ee',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
