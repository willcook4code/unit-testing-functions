var expect = require('chai').expect;
var functions = require('../functions.js');

describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.sortLetters).not.to.be.undefined;
	});
	it('should return a string that reorders the original string alphabetically', function() {
		expect(functions.sortLetters('mouse')).to.equal('emosu');
	});
	it('should return a string wherein all characters are lowercase', function() {
		expect(functions.sortLetters('Mouse')).to.equal('emosu');
	});
	it('should return a string without empty spaces', function() {
		expect(functions.sortLetters('Mouse rat')).to.equal('aemorstu');
	});
	it('should throw an error if input is not a string', function() {
		expect(function() {functions.sortLetters(['mouse'])}).to.throw('Invalid Input');
	});
		it('should throw an "Invalid Input" error if input is an empty string', function() {
		expect(function() {functions.sortLetters('')}).to.throw('Invalid Input');
	});
});