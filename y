module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{html,json,png,svg,txt,css,js}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};