/* eslint-disable */

'use strict'

const svgo = require('../modules/svgo')
const src = process.env.npm_package_config_src
const dest = process.env.npm_package_config_dist

module.exports = options => {

	svgo({
		src: `${src}/icons`,
		dest: `${dest}/icons`
	})

}

/* eslint-enable */
