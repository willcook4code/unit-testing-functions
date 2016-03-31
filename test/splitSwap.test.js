var expect = require('chai').expect;
var functions = require('../functions.js');

describe('splitSwap', function() {
	it('should exist', function() {
		expect(functions.splitSwap).not.to.be.undefined;
	});
	it('should return 1 array', function() {
		expect(functions.splitSwap([1,2,3,4,5])).to.not.equal([3,4,5], [1,2]);
	});
	it('should return 1 array that splits the elements in half, rounded down - not up', function() {
		expect(functions.splitSwap([1,2,3,4,5])).to.not.equal([4,5,1,2,3]);
	});
		it('should return 1 array that splits the elements in half, rounded down - not up', function() {
		expect(functions.splitSwap([1,2,3,4,5])).to.deep.equal([3,4,5,1,2]);
	});
	it('should throw an error if input is not an array', function() {
		expect(function() {functions.splitSwap(3,4,5,1,2)}).to.throw('Invalid Input');
	});
});