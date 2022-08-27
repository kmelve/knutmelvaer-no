module.exports = {
  purge: [
    "./app/**/*.tsx",
    "./app/**/*.jsx",
    "./app/**/*.js",
    "./app/**/*.ts"
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
