/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				Very_Dark_Gray: "hsl(0, 0%, 17%)",
				Dark_Gray: "hsl(0, 0%, 59%)",
			},
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      }
		},
	},
	plugins: [],
};
