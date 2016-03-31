var expect = require('chai').expect;
var functions = require('../functions.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(functions.findMaxDiff).not.to.be.undefined;
	});
	it('should return the absolute value of all differences', function() {
		expect(functions.findMaxDiff([6, 4])).to.equal(2);
	});
	it('should return the maximum difference between any two adjacent elements', function() {
		expect(functions.findMaxDiff([2, 6, 4, 9, 10])).to.equal(5);
	});
	it('should throw an error if the input is not an array', function() {
		expect(function() {functions.findMaxDiff(6, 4)}).to.throw('Invalid Input');
	});
	it('should throw an error if the array has less than 2 elements', function() {
		expect(function() {functions.findMaxDiff([1])}).to.throw('Invalid Input');
	});
});