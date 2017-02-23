# readable-name [![Build Status](https://travis-ci.org/c0bra/readable-name.svg?branch=master)](https://travis-ci.org/c0bra/readable-name) [![Coverage Status](https://coveralls.io/repos/github/c0bra/readable-name/badge.svg?branch=master)](https://coveralls.io/github/c0bra/readable-name?branch=master) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Turn strings into readable names
>
> "personFirstName" becomes "Person First Name"
>
> Handles weird characters, different casings, most of what you can throw at it

# Install

	npm install --save readable-name

# Usage

```javascript
const readableName = require('readableName');

let readable = readableName('someConcatenatedTitle');

console.log(readable);
// Some Concatenated Title
```

# License

ISC
