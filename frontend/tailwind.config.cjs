const daisyui = require('daisyui')
const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bermuda: '#78dcca',
				midnight: '#121063'
			}
		}
	},
	plugins: [forms, typography, daisyui]
}

module.exports = config
