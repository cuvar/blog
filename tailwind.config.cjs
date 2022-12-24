/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cgreen: {
					300: "#5eadaa", // https://maketintsandshades.com/#198a86
					400: "#47a19e",
					500: "#198a86",
					600: "#146e6b",
					700: "#0f5350",
					800: "#0d4543",
					900: "#0a3736",
				}
			}
		},
	},
	plugins: [],
}
