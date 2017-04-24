/**
 * From https://github.com/tbranyen/hyperlist/
 * https://github.com/sergi/virtual-list/issues/9
 */
module.exports = function maxBrowserHeight() {
	// Create two elements, the wrapper is `1px` tall and is transparent and
	// positioned at the top of the page. Inside that is an element that gets
	// set to 1 billion pixels. Then reads the max height the browser can
	// calculate.
	const wrapper = document.createElement('div');
	const fixture = document.createElement('div');

	// As said above, these values get set to put the fixture elements into the
	// right visual state.
	wrapper.style = 'position: absolute; height: 1px; opacity: 0;';
	fixture.style = 'height: 1000000000px;';

	// Add the fixture into the wrapper element.
	wrapper.appendChild(fixture);

	// Apply to the page, the values won't kick in unless this is attached.
	document.body.appendChild(wrapper);

	// Get the maximum element height in pixels.
	const maxElementHeight = fixture.offsetHeight;

	// Remove the element immediately after reading the value.
	document.body.removeChild(wrapper);

	return maxElementHeight;
}
