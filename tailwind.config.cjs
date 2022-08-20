/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {transitionDuration: {
        '2000': '2000ms',
      }},
	},
	plugins: [],
}
