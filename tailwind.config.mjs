/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["neue-haas-unica"],
			},
			colors: {
				'dark-green': '#0D4A22',
				'hover-color': '#BB6D41',
			}
		},
	},
	plugins: [],
}
