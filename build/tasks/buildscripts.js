/* eslint-disable */

'use strict';

// Tasks
const concat = require('../tasks/concat');
const babel = require('../tasks/babel');

module.exports = (options) => {

	const files = options.files;

	files.forEach(file => {
		concat({ file: file + '.js'});

		setTimeout(() => {
			babel({ file: file + '.js' })
		}, 2000)
	});

};

/* eslint-enable */
