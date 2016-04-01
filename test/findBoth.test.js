var expect = require('chai').expect;
var functions = require('../functions.js');

describe('findBoth', function() {
	it('should exist', function() {
		expect(functions.findBoth).not.to.be.undefined;
	});
	it('should returns an array that includes only the elements that appear in both a and b.', function() {
		expect(functions.findBoth([3, 6, 0, 23, 45], [23, 23, 0, 2, 98])).to.deep.equal([0, 23]);
	});
	it('should throw an error if input is not 2 arrays', function() {
		expect(function() {functions.findBoth([''])}).to.throw('Invalid Input');
	});
	it('should throw an error if input arrays are empty', function() {
		expect(function() {functions.findBoth([], [])}).to.throw('Invalid Input');
	});
});