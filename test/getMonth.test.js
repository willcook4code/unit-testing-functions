var expect = require('chai').expect;
var functions = require('../functions.js');

describe('getMonth', function() {
	it('should exist', function() {
		expect(functions.getMonth).not.to.be.undefined;
	});
	it('return a month name as a string that coincides with the number passed through', function() {
		expect(functions.getMonth(3)).to.equal('March');
	});
	it('should throw an error if input is not a number', function() {
		expect(function() {functions.getMonth('six')}).to.throw('Invalid Input');
	});
});