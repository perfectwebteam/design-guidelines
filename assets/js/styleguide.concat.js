/**
 * A simple forEach() implementation for Arrays, Objects and NodeLists
 * @private
 * @param {Array|Object|NodeList} collection Collection of items to iterate
 * @param {Function} callback Callback function for each iteration
 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
 */
var forEach = function (collection, callback, scope) {
	if (Object.prototype.toString.call(collection) === '[object Object]') {
		for (var prop in collection) {
			if (Object.prototype.hasOwnProperty.call(collection, prop)) {
				callback.call(scope, collection[prop], prop, collection);
			}
		}
	} else {
		for (var i = 0, len = collection.length; i < len; i++) {
			callback.call(scope, collection[i], i, collection);
		}
	}
};


/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}
	Element.prototype.closest = function (s) {
		var el = this;
		var ancestor = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (ancestor.matches(s)) return ancestor;
			ancestor = ancestor.parentElement;
		} while (ancestor !== null);
		return null;
	};
}


/**
 * Cookies
 */
function setCookie(name, value, days) {
	var d = new Date;
	d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
	document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function getCookie(name) {
	var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return v ? v[2] : null;
}

function deleteCookie(name) {
	setCookie(name, '', -1);
}


/**
 * Simulate a click event.
 * @public
 * @param {Element} elem  the element to simulate a click on
 */
var simulateClick = function (elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
};


/**
 * Run code
 */
(function () {
	document.addEventListener("DOMContentLoaded", function () {

		/**
		 * Toggle menu
		 */
		var toggleButton = document.querySelector('.js-toggle-menu');
		var sgbody = document.querySelector('.styleguide-body');
		toggleButton.onclick = function() {
			document.body.classList.toggle('has-toggled-menu');
		}
		sgbody.onclick = function() {
			if (window.getComputedStyle(document.querySelector('.styleguide-body')).zIndex == 2) {
				document.body.classList.toggle('has-toggled-menu');
			}
		}

		/**
		 * Tabs
		 */
		var tabs = new Tabby('[data-tabs]');
		var toggleTabs = document.querySelectorAll('[data-toggle-tab]');
		if (toggleTabs.length > 0) {
			forEach(toggleTabs, function (toggleTab) {
				toggleTab.onclick = function () {
					tabs.toggle(toggleTab.getAttribute('href'));
				}
			});
		}


		/**
		 * Re attach class
		 */
		var reAttach = document.querySelectorAll('.js-re-attach-class');
		if (reAttach.length > 0) {
			forEach(reAttach, function (el) {
				el.onclick = function () {
					var nextSibling = el.nextSibling;
					var classList = nextSibling.className;
					nextSibling.className = '';
					setTimeout(function() {
						nextSibling.className = classList;
					});
				}
			});
		}

		// replace URL on tabby
		document.addEventListener('tabby', function (event) {
			history.replaceState(null, null, event.target.hash);
			document.documentElement.scrollTop = 0;
			// Trigger refresh for JS code
			var doc = document;
			var ev = document.createEvent('HTMLEvents');
			ev.initEvent('resize', true, false);
			doc.dispatchEvent(ev);
		}, false);

		// Add sections found in content to menu
		var content = document.querySelectorAll('.sg-content');
		forEach(content, function (item) {
			var itemId = item.id;
			var sections = item.querySelectorAll('.styleguide-section');
			var newUl = document.createElement("ul");
			forEach(sections, function (section) {
				var name = section.querySelector('div').innerHTML;
				var safeName = name.replace(' ', '-').toLowerCase();
				section.id = itemId + '-' + safeName;
				var newLi = document.createElement("li");
				var newA = document.createElement("a");
				newA.setAttribute('href', '#' + itemId + '-' + safeName);
				newA.innerText = name;
				newUl.appendChild(newLi);
				newLi.appendChild(newA);
			});

			// Insert the new node after the last element in the parent node
			document.querySelector('[href="#'+itemId+'"]').parentNode.appendChild(newUl);
		});

		setTimeout(function() {
			var clickableLinks = document.querySelectorAll('.styleguide-navigation__inner');
			forEach(clickableLinks, function (item) {
				var link = item.querySelector('[href="'+currentHash+'"]');
				simulateClick(link);
			});
		}, 100);

		// Scrollspy
		var spy = new Gumshoe('.styleguide-navigation a');

		/**
		 * Smooth scroll
		 */
		new SmoothScroll('[data-smooth-scroll]', { // eslint-disable-line
			header: '.styleguide-navigation',
			speed: 200,
			updateURL: false
		});

		/**
		 * Highlighting
		 */
		hljs.initHighlightingOnLoad();


		// Load tab and go to specific section
		var currentHash = location.hash;
		var currentTab = currentHash.split('-')[0].replace('#', '');
		tabs.toggle(currentTab);


		/**
		 * Clipboard
		 */
		var clipboard = new ClipboardJS('[data-clipboard]');
		clipboard.on('success', function (e) {
			// console.info('Action:', e.action);
			// console.info('Text:', e.text);
			// console.info('Trigger:', e.trigger);
			// toastr.options.timeOut = 0;
			// toastr.options.extendedTimeOut = 0;
			toastr.options.escapeHtml = true;
			toastr.options.positionClass = 'toast-bottom-full-width';
			toastr.success(null, e.text);
			e.clearSelection();
		});


		/**
		 * Page toggles
		 */
		var showGrid = getCookie('styleguide:grid');
		var toggleGrid = document.querySelector('.js-toggle-grid');
		var gridContainer = document.querySelector('.overlay-grid-container');
		var showMarkup = getCookie('styleguide:markup');
		var toggleMarkup = document.querySelector('.js-toggle-markup');
		var markupContainers = document.querySelectorAll('.styleguide-code');
		var displayMarkupButton = document.querySelectorAll('[data-display-markup]');

		// Set active item and set cookie
		function setActive(element, cookie) {
			element.classList.add('is-active');
			setCookie('styleguide:' + cookie, true, 365);
		}

		// Remove active item and remove cookie
		function removeActive(element, cookie) {
			element.classList.remove('is-active');
			deleteCookie('styleguide:' + cookie);
		}

		// Display/hide the actual grid and set button class
		function displayGrid(container, button) {
			if (container.style.display == 'none') {
				container.style.display = 'block';
				setActive(button, 'grid');
			} else {
				container.style.display = 'none';
				removeActive(button, 'grid');
			}
		}

		// Display/hide the actual markup and set button class
		function displayMarkup(containers, button) {
			forEach(containers, function(value) {
				if (button.classList.contains('sg-markup-hidden')) {
					value.classList.remove('sg-visually-hidden');
					if (value.closest('.styleguide-item')) {
						value.closest('.styleguide-item').querySelector('[data-display-markup]').classList.add('is-active');
						setActive(button, 'markup');
					}
				} else {
					value.classList.add('sg-visually-hidden');
					if (value.closest('.styleguide-item')) {
						value.closest('.styleguide-item').querySelector('[data-display-markup]').classList.remove('is-active');
						removeActive(button, 'markup');
					}
				}
			});
		}

		// Toggle button for visual grid
		toggleGrid.onclick = function () {
			displayGrid(gridContainer, toggleGrid);
		};

		// Show grid based on cookie
		if (showGrid) {
			displayGrid(gridContainer, toggleGrid);
		}

		// Toggle button for markup
		toggleMarkup.onclick = function () {
			displayMarkup(markupContainers, toggleMarkup);
			toggleMarkup.classList.toggle('sg-markup-hidden');
		};

		// Show markup based on cookie
		if (showMarkup) {
			displayMarkup(markupContainers, toggleMarkup);
			toggleMarkup.classList.remove('sg-markup-hidden');
		}

		// Toggle individual markup areas
		forEach(displayMarkupButton, function (element) {
			if (element) {
				element.onclick = function () {
					this.classList.toggle('is-active');
					var codeElements = element.closest('.styleguide-item').querySelectorAll('.styleguide-code');
					forEach(codeElements, function (codeElement) {
						codeElement.classList.toggle('sg-visually-hidden');
					});
				}
			}
		});


		/**
		 * Type toggle buttons
		 */
		var contentSwitchers = document.querySelectorAll('.js-content-switcher');
		forEach(contentSwitchers, function (contentSwitcher) {
			contentSwitcher.onclick = function () {
				var contentItems = this.closest('.sg-content').querySelectorAll('[data-content]');
				var switcherType = this.innerHTML.toLowerCase();

				// Remove current active item
				this.closest('.js-content-switcher-buttons').querySelector('.sg-is-active').classList.remove('sg-is-active');

				// Set new active item
				this.classList.add('sg-is-active');

				// Content switcher
				if (contentItems.length) {
					forEach(contentItems, function (contentItem) {
						var content = contentItem.getAttribute('data-content');
						var data = JSON.parse(content);
						var newContent = data[switcherType];

						// Update clipboard content
						contentItem.setAttribute('data-clipboard-text', newContent);

						// Update visual content if label exists
						if (contentItem.querySelector('.js-label') !== null) {
							contentItem.querySelector('.js-label').innerHTML = newContent;
						}
					});
				}
			};
		});
	});
})();
