/* eslint-disable */

'use strict'

const babel = require('../modules/babel')

const src = process.env.npm_package_config_src + '/js'
const dest = process.env.npm_package_config_dist + '/js'

module.exports = options => {

	const file = options.file
	
	if (file === 'scripts.concat.js') {
		babel({
			src: `${src}/${file}`,
			dest: `${dest}/scripts.js`
		})
	}
	
	if (file === 'styleguide.concat.js') {
		babel({
			src: `${src}/styleguide.concat.js`,
			dest: `${dest}/styleguide.js`
		});
	}
}

/* eslint-enable */
