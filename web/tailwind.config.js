module.exports = {
  content: [
    "./app/**/*.{tsx,ts,jsx,js}"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['verdana', 'Inter var', 'sans-serif'],
    },
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
};
