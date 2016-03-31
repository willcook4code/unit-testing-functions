var expect = require('chai').expect;
var functions = require('../functions.js');

describe('myMax', function() {
	it('should exist', function() {
		expect(functions.myMax).not.to.be.undefined;
	});
	it('should return 1 number that evaluates largest in the original list', function() {
		expect(functions.myMax([8, 5, 2, 9, 3])).to.equal(9);
	});
	it('should throw an error if input is not an array', function() {
		expect(function() {functions.myMax(4, 8)}).to.throw('Invalid Input');
	});
	it('should throw an error if input is not an array of integers', function() {
		expect(function() {functions.myMax([4, 'seven', 8])}).to.throw('Invalid Input');
	});
});