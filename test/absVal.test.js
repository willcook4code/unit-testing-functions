var expect = require('chai').expect;
var functions = require('../functions.js');

describe('absVal', function() {
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});
	it('should return a positive integer when input is a negative integer', function() {
		expect(functions.absVal(-7)).to.equal(7);
	});
	it('should return a positive integer when input is a positive integer', function() {
		expect(functions.absVal(7)).to.equal(7);
	});
	it('should throw an error if input is not a number', function() {
		expect(function() {functions.absVal('seven')}).to.throw('Invalid Input');
	});
});