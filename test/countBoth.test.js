var expect = require('chai').expect;
var functions = require('../functions.js');

describe('countBoth', function() {
	it('should exist', function() {
		expect(functions.countBoth).not.to.be.undefined;
	});
	it('should returns an array that includes only the elements that appear in both a and b.', function() {
		expect(functions.countBoth([3, 6, 1, 23, 45], [23, 23, 1, 2, 98])).to.equal(5);
	});
	it('should throw an error if input is not 2 arrays', function() {
		expect(function() {functions.countBoth([''])}).to.throw('Invalid Input');
	});
	it('should throw an error if input arrays are empty', function() {
		expect(function() {functions.countBoth([], [])}).to.throw('Invalid Input');
	});
});