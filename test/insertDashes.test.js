var expect = require('chai').expect;
var functions = require('../functions.js');

describe('insertDashes', function() {
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});
	it('should return a word with dashes between each two consecutive letters', function() {
		expect(functions.insertDashes('sentence')).to.equal('s-e-n-t-e-n-c-e');
	});
	it('should return a sentence with dashes between each two consecutive letters, but not spaces', function() {
		expect(functions.insertDashes('This is a sentence.')).to.not.equal('T-h-i-s-i-s-a-s-e-n-t-e-n-c-e.');
	});
	it('should return a sentence with dashes between each two consecutive letters, but not punctuation', function() {
		expect(functions.insertDashes('This is a sentence.')).to.not.equal('T-h-i-s i-s a s-e-n-t-e-n-c-e-.');
	});
	it('should throw an error if input is not a string', function() {
		expect(function() {functions.insertDashes([7])}).to.throw('Invalid Input');
	});
});