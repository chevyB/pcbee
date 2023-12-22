/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
<<<<<<< HEAD
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
=======
    './node_modules/flowbite-react/**/*.js',
    './src/**/*.{js,ts,jsx,tsx}',
>>>>>>> main
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')
],


}

