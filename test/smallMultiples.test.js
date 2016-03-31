var expect = require('chai').expect;
var functions = require('../functions.js');

describe('smallMultiples', function() {
	it('should exist', function() {
		expect(functions.smallMultiples).not.to.be.undefined;
	});
	it('should return 1 integer', function() {
		expect(functions.smallMultiples(4, 2)).to.not.equal([2]);
	});
	it('should return 1 integer that is the count of mulitples of k that are not greater than n', function() {
		expect(functions.smallMultiples(8, 2)).to.equal(4);
	});
	it('should return 1 integer that is the count of mulitples of k that are not greater than n', function() {
		expect(functions.smallMultiples(8, 1)).to.equal(8);
	});
	it('should throw an error if input is not a number', function() {
		expect(function() {functions.smallMultiples(2, 'i')}).to.throw('Invalid Input');
	});
	it('should throw an error if input is not a number', function() {
		expect(function() {functions.smallMultiples('i', 2)}).to.throw('Invalid Input');
	});
	it('should throw an error if input is not a number', function() {
		expect(function() {functions.smallMultiples('i', 'i')}).to.throw('Invalid Input');
	});
});