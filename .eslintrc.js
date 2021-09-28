module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-strongly-recommended',
		'eslint:recommended',
	],
	rules: {
		"no-mixed-spaces-and-tabs": ["warn","smart-tabls"]
	},
	plugins: ['vue'],
}