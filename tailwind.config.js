/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', './projects/**/*.{html,ts}',
    // "./src/app/app.component.html",
    // //"./src/app/form-teste/form-teste.component.html",
    // "./src/app/components/menu/menu.component.html",
    // "./src/app/components/header/header.component.html",
    // "./src/app/components/user-login/user-login.component.html",
    // "./src/app/components/user-register/user-register.component.html",
    // "./src/app/components/movie-catalog/movie-catalog.component.html",
    // "./src/app/components/dashboard/dashboard.component.html",
  ],
  theme: {
    fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif', 'Plus Jakarta Sans', 'sans-serif'],

    },
    extend: {},
  },
  plugins: [],
}

