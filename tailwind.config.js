/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loadout': "url('/images/loadout-3.jpg')",
        'characters-icon': "url('/images/icons/characters.png')",
        'build-icon': "url('/images/icons/build.png')",
        'bloodweb-icon': "url('/images/icons/bloodweb.png')",
        'shop-icon': "url('/images/icons/shop.png')",
        'common': "url('/images/bg-common.webp')",
        'event': "url('/images/bg-event.webp')",
        'rare': "url('/images/bg-rare.webp')",
        'ultra-rare': "url('/images/bg-ultra-rare.webp')",
        'very-rare': "url('/images/bg-very-rare.webp')",
        'uncommon': "url('/images/bg-uncommon.webp')",
        'offering-rare': "url('/images/bg-offering-rare.webp')",
        'perks': "url('/images/bg-perks.png')",
        'item': "url('/images/bg-item.png')",
        'offering': "url('/images/bg-offering.png')",
      },
      backgroundSize: {
        '70%': '70%',
      },
      spacing: {
        '22': '5.5rem',
      },
      boxShadow: {
        'lt': '-3px 3px 4px 4px rgba(0, 0, 0, 0.3)',
      },
      maxWidth: {
        '52': '13rem',
      }
    },
  },
  plugins: [],
}
