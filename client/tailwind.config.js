/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},

		fontFamily: {
			primary: "var(--font-jetbrainsMono)",
		},
		extend: {
			colors: {
				primary: "#1c1c22",
				accent: {
					DEFAULT: "#00ff99",
					hover: "#00e187",
				}
			},
			keyframes: {
				"accordian-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordian-content-height)" },
				},
				"accordian-up": {
					from: { height: "var(--radix-accordian-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordian-down": "accordian-down 0.2s ease-out",
				"accordian-up": "accordian-up 0.2s ease-out",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};