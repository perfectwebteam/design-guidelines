/* eslint-disable */

'use strict'

const sass = require('../modules/sass')

const src = process.env.npm_package_config_src + '/scss'
const dest = process.env.npm_package_config_src + '/css'

module.exports = options => {
	sass({
		src: `${src}/style.scss`,
		dest: `${dest}/style.css`
	});
	
	sass({
		src: `${src}/styleguide.scss`,
		dest: `${dest}/styleguide.css`
	});
	
	sass({
		src: `${src}/dev.scss`,
		dest: `${dest}/dev.css`
	});
}

/* eslint-enable */
