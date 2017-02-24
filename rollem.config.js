import _ from 'lodash';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const config = {
	moduleName: 'readableName',
	entry: 'index.js',
	dest: 'dist/readable-name.js',
	format: 'iife',
	sourceMap: 'inline',
	plugins: [
		babel({
			exclude: 'node_modules/**',
			presets: ['es2015-rollup']
		})
	]
};

export default [
	// Unminified
	config,
	// Minified
	_.assign({}, config, {
		dest: 'dist/readable-name.min.js',
		plugins: config.plugins.concat([uglify()])
	})
];
