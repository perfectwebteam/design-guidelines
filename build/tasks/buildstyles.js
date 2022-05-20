/* eslint-disable */

'use strict';

// Tasks
const sass = require('../tasks/sass');
const postcss = require('../tasks/postcss');

module.exports = (options) => {

	const files = options.files;

	files.forEach(file => {
		sass({ file: file + '.scss' });

		setTimeout(() => {
			postcss({ file: file + '.css' });
		}, 2000);
	});

};

/* eslint-enable */
