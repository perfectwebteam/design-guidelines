/* eslint-disable */

'use strict'

const concat = require('../modules/concat')

const src = process.env.npm_package_config_src + '/scripts'
const dest = process.env.npm_package_config_src + '/js'
const destDist = process.env.npm_package_config_dist + '/js';

module.exports = options => {

	const file = options.file

	if (file === 'scripts.js') {
		concat({
			src: [
				'node_modules/balance-text/balancetext.min.js',
				`${src}/scripts.js`
			],
			dest: `${dest}/scripts.concat.js`
		});
	}
	
	if (file === 'styleguide.js') {
		concat({
			src: [
				`${src}/styleguide.js`
			],
			dest: `${dest}/styleguide.concat.js`
		});
	}

}

/* eslint-enable */
