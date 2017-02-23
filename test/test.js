import test from 'ava';
import r from '../index';

test('Basic readable name', t => {
	t.is(r('firstName'), 'First Name');
	t.is(r('someOtherName'), 'Some Other Name');
	t.is(r('SomeOtherName'), 'Some Other Name');
});

test('Underscores separate words', t => {
	t.is(r('first_name'), 'First Name');
	t.is(r('first__name'), 'First Name');
});

test('Hyphens separate words', t => {
	t.is(r('first-name'), 'First Name');
	t.is(r('first--name'), 'First Name');
});

test('Extra non-letter leading characters are trimmed', t => {
	t.is(r('?/\\--first-name--+.'), 'First Name');
});

test('All caps get cased', t => {
	t.is(r('FIRST_NAME'), 'First Name');
	t.is(r('FIRST   NAME'), 'First Name');
	t.is(r('TITLE'), 'Title');
});

test('Multiple spaces are turned into one', t => {
	t.is(r('first   name'), 'First Name');
});

test('Any non word characters are used as spacers', t => {
	t.is(r('this.is.a.title'), 'This Is A Title');
	t.is(r('this.?is+.a\\-.º™¢§title'), 'This Is A Title');
});

test('Ignore undefined or null', t => {
	t.is(r(null), null);
	t.is(r(undefined), undefined);
});

test('Non-strings become strings', t => {
	t.is(r(12345), '12345');
});

/*
 TODO:
	* Unicode words
	* All caps words and phrases
*/
