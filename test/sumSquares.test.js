var expect = require('chai').expect;
var functions = require('../functions.js');

describe('sumSquares', function() {
	it('should exist', function() {
		expect(functions.sumSquares).not.to.be.undefined;
	});
	it('should return the sum of squares of all integers from 1, up to and including the given integer', function() {
		expect(functions.sumSquares(3)).to.equal(14);
	});
	it('should throw an error if the input is 0', function() {
		expect(function() {functions.sumSquares(0)}).to.throw('Invalid Input');
	});
	it('should throw an error if the input is a negative number', function() {
		expect(function() {functions.sumSquares(-7)}).to.throw('Invalid Input');
	});
	it('should throw an error if the input is not a number', function() {
		expect(function() {functions.sumSquares('seven')}).to.throw('Invalid Input');
	});
});