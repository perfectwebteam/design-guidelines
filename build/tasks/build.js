/* eslint-disable */

'use strict';

// Tasks
const clean = require('../tasks/clean');
const mkdirp = require('../tasks/mkdirp');
const buildstyles = require('../tasks/buildstyles');
const concat = require('../tasks/concat');
const babel = require('../tasks/babel');
const modernizr = require('../tasks/modernizr');
const svgo = require('../tasks/svgo');

// Other var
const currentPath = process.cwd();
const dest = process.env.npm_package_config_dist;

// clean and create
clean();
mkdirp();

// css
buildstyles({
	files: [
		'style'
	]
});

// js
concat({ file: 'scripts.js' });
setTimeout(() => {
	babel({ file: 'scripts.js' });
}, 2000);

//duetDatePicker();
modernizr();

// icons
svgo();

/* eslint-enable */
