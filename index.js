/* eslint func-names: ["error", "always"] */

const uppercase = s => String.prototype.toUpperCase.call(s);
const lowercase = s => String.prototype.toLowerCase.call(s);

module.exports = function readableName(str) {
	// Convert underscores to spaces
	if (typeof (str) === 'undefined' || str === undefined || str === null) {
		return str;
	}

	if (typeof (str) !== 'string') {
		str = String(str);
	}

	return str
		// Trim leading non-word characters
		.replace(/^[^\w\u00C0-\u017F]+/, '')
		// Trim trailing non-word characters
		.replace(/[^\w\u00C0-\u017F]+$/, '')
		// Non-word characters turn into spaces
		.replace(/([^\w\u00C0-\u017F]|[_\-+])+/g, ' ')
		// Multiple spaces are turned into one
		.replace(/\s+/, ' ')
		// Replace a completely all-capsed word with a first-letter-capitalized version
		.replace(/\b[A-Z]+\b/g, match => {
			return lowercase(uppercase(match.charAt(0)) + match.slice(1));
		})
		// Capitalize the first letter of words
		.replace(/([\w\u00C0-\u017F]+)/g, match => {
			return uppercase(match.charAt(0)) + match.slice(1);
		})
		// Put a space in between words that have partial capilizations (i.e. 'firstName' becomes 'First Name')
		.replace(/(\w+?(?=[A-Z]))/g, '$1 ');
};
