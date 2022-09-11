/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loadout': "url('/images/loadout.jpg')",
        'kinship': "url('/images/survivor/perks/kinship.gif')",
        'character-icon': "url('/images/icons/character.png')",
        'build-icon': "url('/images/icons/build.png')",
        'bloodweb-icon': "url('/images/icons/bloodweb.png')",
        'shop-icon': "url('/images/icons/shop.png')",
      },
    },
  },
  plugins: [],
}
