module.exports = {
	plugins: {
		'postcss-preset-env': {
			browsers: 'last 3 versions'
		},
		'cssnano': {
			preset: 'default'
		}
	}
}
