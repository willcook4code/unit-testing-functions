var expect = require('chai').expect;
var functions = require('../functions.js');

describe('myMin', function() {
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	});
	it('should return intB if intA is greater.', function() {
		expect(functions.myMin(8, 2)).to.equal(2);
	});
	it('should return intA if intB is greater.', function() {
		expect(functions.myMin(2, 8)).to.equal(2);
	});
	it('should throw an error if input is not 2 numbers', function() {
		expect(function() {functions.myMin('four', 'seven')}).to.throw('Invalid Input');
	});
	it('should throw an error if input is not 2 arguments', function() {
		expect(function() {functions.myMin(4)}).to.throw('Invalid Input');
	});
});