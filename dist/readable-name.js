(function () {
'use strict';

/* eslint func-names: ["error", "always"] */

var uppercase = function uppercase(s) {
	return String.prototype.toUpperCase.call(s);
};
var lowercase = function lowercase(s) {
	return String.prototype.toLowerCase.call(s);
};

module.exports = function readableName(str) {
	// Convert underscores to spaces
	if (typeof str === 'undefined' || str === undefined || str === null) {
		return str;
	}

	if (typeof str !== 'string') {
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
	.replace(/\b[A-Z]+\b/g, function (match) {
		return lowercase(uppercase(match.charAt(0)) + match.slice(1));
	})
	// Capitalize the first letter of words
	.replace(/([\w\u00C0-\u017F]+)/g, function (match) {
		return uppercase(match.charAt(0)) + match.slice(1);
	})
	// Put a space in between words that have partial capilizations (i.e. 'firstName' becomes 'First Name')
	.replace(/(\w+?(?=[A-Z]))/g, '$1 ');
};

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZGFibGUtbmFtZS5qcyIsInNvdXJjZXMiOlsiLi4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IGZ1bmMtbmFtZXM6IFtcImVycm9yXCIsIFwiYWx3YXlzXCJdICovXG5cbmNvbnN0IHVwcGVyY2FzZSA9IHMgPT4gU3RyaW5nLnByb3RvdHlwZS50b1VwcGVyQ2FzZS5jYWxsKHMpO1xuY29uc3QgbG93ZXJjYXNlID0gcyA9PiBTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlLmNhbGwocyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVhZGFibGVOYW1lKHN0cikge1xuXHQvLyBDb252ZXJ0IHVuZGVyc2NvcmVzIHRvIHNwYWNlc1xuXHRpZiAodHlwZW9mIChzdHIpID09PSAndW5kZWZpbmVkJyB8fCBzdHIgPT09IHVuZGVmaW5lZCB8fCBzdHIgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cblx0aWYgKHR5cGVvZiAoc3RyKSAhPT0gJ3N0cmluZycpIHtcblx0XHRzdHIgPSBTdHJpbmcoc3RyKTtcblx0fVxuXG5cdHJldHVybiBzdHJcblx0XHQvLyBUcmltIGxlYWRpbmcgbm9uLXdvcmQgY2hhcmFjdGVyc1xuXHRcdC5yZXBsYWNlKC9eW15cXHdcXHUwMEMwLVxcdTAxN0ZdKy8sICcnKVxuXHRcdC8vIFRyaW0gdHJhaWxpbmcgbm9uLXdvcmQgY2hhcmFjdGVyc1xuXHRcdC5yZXBsYWNlKC9bXlxcd1xcdTAwQzAtXFx1MDE3Rl0rJC8sICcnKVxuXHRcdC8vIE5vbi13b3JkIGNoYXJhY3RlcnMgdHVybiBpbnRvIHNwYWNlc1xuXHRcdC5yZXBsYWNlKC8oW15cXHdcXHUwMEMwLVxcdTAxN0ZdfFtfXFwtK10pKy9nLCAnICcpXG5cdFx0Ly8gTXVsdGlwbGUgc3BhY2VzIGFyZSB0dXJuZWQgaW50byBvbmVcblx0XHQucmVwbGFjZSgvXFxzKy8sICcgJylcblx0XHQvLyBSZXBsYWNlIGEgY29tcGxldGVseSBhbGwtY2Fwc2VkIHdvcmQgd2l0aCBhIGZpcnN0LWxldHRlci1jYXBpdGFsaXplZCB2ZXJzaW9uXG5cdFx0LnJlcGxhY2UoL1xcYltBLVpdK1xcYi9nLCBtYXRjaCA9PiB7XG5cdFx0XHRyZXR1cm4gbG93ZXJjYXNlKHVwcGVyY2FzZShtYXRjaC5jaGFyQXQoMCkpICsgbWF0Y2guc2xpY2UoMSkpO1xuXHRcdH0pXG5cdFx0Ly8gQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIHdvcmRzXG5cdFx0LnJlcGxhY2UoLyhbXFx3XFx1MDBDMC1cXHUwMTdGXSspL2csIG1hdGNoID0+IHtcblx0XHRcdHJldHVybiB1cHBlcmNhc2UobWF0Y2guY2hhckF0KDApKSArIG1hdGNoLnNsaWNlKDEpO1xuXHRcdH0pXG5cdFx0Ly8gUHV0IGEgc3BhY2UgaW4gYmV0d2VlbiB3b3JkcyB0aGF0IGhhdmUgcGFydGlhbCBjYXBpbGl6YXRpb25zIChpLmUuICdmaXJzdE5hbWUnIGJlY29tZXMgJ0ZpcnN0IE5hbWUnKVxuXHRcdC5yZXBsYWNlKC8oXFx3Kz8oPz1bQS1aXSkpL2csICckMSAnKTtcbn07XG4iXSwibmFtZXMiOlsidXBwZXJjYXNlIiwiU3RyaW5nIiwicHJvdG90eXBlIiwidG9VcHBlckNhc2UiLCJjYWxsIiwicyIsImxvd2VyY2FzZSIsInRvTG93ZXJDYXNlIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlYWRhYmxlTmFtZSIsInN0ciIsInVuZGVmaW5lZCIsInJlcGxhY2UiLCJtYXRjaCIsImNoYXJBdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVk7UUFBS0MsT0FBT0MsU0FBUCxDQUFpQkMsV0FBakIsQ0FBNkJDLElBQTdCLENBQWtDQyxDQUFsQyxDQUFMO0NBQWxCO0FBQ0EsSUFBTUMsWUFBWSxTQUFaQSxTQUFZO1FBQUtMLE9BQU9DLFNBQVAsQ0FBaUJLLFdBQWpCLENBQTZCSCxJQUE3QixDQUFrQ0MsQ0FBbEMsQ0FBTDtDQUFsQjs7QUFFQUcsT0FBT0MsT0FBUCxHQUFpQixTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQjs7S0FFdkMsT0FBUUEsR0FBUixLQUFpQixXQUFqQixJQUFnQ0EsUUFBUUMsU0FBeEMsSUFBcURELFFBQVEsSUFBakUsRUFBdUU7U0FDL0RBLEdBQVA7OztLQUdHLE9BQVFBLEdBQVIsS0FBaUIsUUFBckIsRUFBK0I7UUFDeEJWLE9BQU9VLEdBQVAsQ0FBTjs7O1FBR01BOztFQUVMRSxPQUZLLENBRUcsc0JBRkgsRUFFMkIsRUFGM0I7O0VBSUxBLE9BSkssQ0FJRyxzQkFKSCxFQUkyQixFQUozQjs7RUFNTEEsT0FOSyxDQU1HLCtCQU5ILEVBTW9DLEdBTnBDOztFQVFMQSxPQVJLLENBUUcsS0FSSCxFQVFVLEdBUlY7O0VBVUxBLE9BVkssQ0FVRyxhQVZILEVBVWtCLGlCQUFTO1NBQ3pCUCxVQUFVTixVQUFVYyxNQUFNQyxNQUFOLENBQWEsQ0FBYixDQUFWLElBQTZCRCxNQUFNRSxLQUFOLENBQVksQ0FBWixDQUF2QyxDQUFQO0VBWEs7O0VBY0xILE9BZEssQ0FjRyx1QkFkSCxFQWM0QixpQkFBUztTQUNuQ2IsVUFBVWMsTUFBTUMsTUFBTixDQUFhLENBQWIsQ0FBVixJQUE2QkQsTUFBTUUsS0FBTixDQUFZLENBQVosQ0FBcEM7RUFmSzs7RUFrQkxILE9BbEJLLENBa0JHLGtCQWxCSCxFQWtCdUIsS0FsQnZCLENBQVA7Q0FWRDs7In0=
