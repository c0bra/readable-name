/* eslint func-names: ["error", "always"] */

const uppercase = String.prototype.toUpperCase.call;
const lowercase = String.prototype.toLowerCase.call;

module.exports = function readableName(string) {
	// Convert underscores to spaces
	if (typeof (string) === 'undefined' || string === undefined || string === null) {
		return string;
	}

	if (typeof (string) !== 'string') {
		string = String(string);
	}

	return string.replace(/_+/g, ' ')
		// Replace a completely all-capsed word with a first-letter-capitalized version
		.replace(/^[A-Z]+$/, function uppercaseFirstOfAllCaps(match) {
			return lowercase(uppercase(match.charAt(0)) + match.slice(1));
		})
		// Capitalize the first letter of words
		.replace(/([\w\u00C0-\u017F]+)/g, function uppercaseFirstLetterOfWord(match) {
			return uppercase(match.charAt(0)) + match.slice(1);
		})
		// Put a space in between words that have partial capilizations (i.e. 'firstName' becomes 'First Name')
		.replace(/(\w+?(?=[A-Z]))/g, '$1 ');
};
