/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1020px",
			xl: "1440px",
		},
    extend: {
      backgroundImage: {
        'snowy-mountain': "url('/img/snowy-mountains.jpg')",
        'history': "url('/img/history-image.jpg')",
        'mountain-img': "url('/img/mountain.jpg')"
      }
    }
	},
	plugins: [],
};
