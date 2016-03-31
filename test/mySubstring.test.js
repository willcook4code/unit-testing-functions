var expect = require('chai').expect;
var functions = require('../functions.js');

describe('mySubstring', function() {
	it('should exist', function() {
		expect(functions.mySubstring).not.to.be.undefined;
	});
	it('should return the substring of a given strin within specified bounds', function() {
		expect(functions.mySubstring('abcde', 2, 3)).to.equal('cd');
	});
	it('should return an output without a seperator', function() {
		expect(functions.mySubstring('abcde', 2, 3)).to.not.equal('c,d');
	});
	it('should throw an error if input is not a string', function() {
		expect(function() {functions.mySubstring([7])}).to.throw('Invalid Input');
	});
});