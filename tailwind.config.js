/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loadout': "url('/images/loadout.jpg')",
        'kinship': "url('/images/survivor/perks/kinship.gif')",
        'character-icon': "url('/images/icons/character.png')",
        'build-icon': "url('/images/icons/build.png')",
      },
    },
  },
  plugins: [],
}
