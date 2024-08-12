/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // Custom scrollbar styles
      scrollbar: {
        width: '8px',
        height: '8px',
        thumb: {
          backgroundColor: '#4CAF50', // Thumb color (e.g., green)
          borderRadius: '4px',
        },
        track: {
          backgroundColor: '#E5E7EB', // Track color (e.g., light gray)
        },
      },
    },
    colors: {
      '--default-white': '#fff',
      '--neutrals-n100': '#7b827e',
      '--text-default-default': '#1e1e1e',
      '--default-body': '#0a1811',
      '--color-gray-100': 'rgba(0, 0, 0, 0.6)',
      '--color-gray-200': 'rgba(0, 0, 0, 0.5)',
      '--color-gray-300': 'rgba(0, 0, 0, 0)',
      '--color-gray-400': 'rgba(255, 255, 255, 0.8)',
      '--color': 'rgba(126, 126, 126, 0.7)',
      '--color-gray-500': 'rgba(255, 255, 255, 0.5)',
      '--color-silver': '#c4c4c4',
      '--color-black': '#000',
      '--light': 'rgba(251, 255, 71, 0.7)',
      '--color-midnightblue': '#010064',
      '--dark': '#085e63',
      '--third-template-colour': '#22343d',
      '--color-darkslategray-100': '#1f2e35',
      '--medium': '#2fae71',
      '--color-whitesmoke-100': '#f2f2f2',
      '--color-whitesmoke-200': 'rgba(237, 237, 237, 0.6)',
      '--color-darkgray-100': '#969696',
      '--color-darkgray-200': 'rgba(153, 153, 153, 0.7)',
      '--color-forestgreen': '#339933',
      '--color-gainsboro-100': '#e6e6e6',
      '--border-default-default': '#d9d9d9',
      '--color-blueviolet': '#9747ff',
      '--neutrals-n200': '#6c7470',
      '--color-seagreen': '#179457',
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For Firefox */
          'scrollbar-width': 'none',
          /* For Chrome, Safari, and Edge */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-custom': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#4CAF50 #E5E7EB', // Custom thumb and track colors
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#4CAF50',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#E5E7EB',
          },
        },
      });
    },
  ],
}
