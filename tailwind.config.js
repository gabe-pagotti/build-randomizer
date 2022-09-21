/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loadout': "url('/images/loadout-2.jpg')",
        'kinship': "url('/images/survivor/perks/camaraderie.png')",
        'character-icon': "url('/images/icons/character.png')",
        'build-icon': "url('/images/icons/build.png')",
        'bloodweb-icon': "url('/images/icons/bloodweb.png')",
        'shop-icon': "url('/images/icons/shop.png')",
      },
      backgroundSize: {
        '110': '110%',
      },
      spacing: {
        '22': '5.5rem',
      },
      boxShadow: {
        'lt': '-3px 3px 4px 4px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
