/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['DM Mono']
				// sans: ['neue-haas-unica']
			},
			colors: {
				'dark-green': '#095d40',
				'hover-color': '#BB6D41',
				'beige': '#f3f5e9',
				'light-green': '#516e5b',
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#095d40',
					}
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
