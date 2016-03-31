var expect = require('chai').expect;
var functions = require('../functions.js');

describe('checkData', function() {
	it('should exist', function() {
		expect(functions.checkData).not.to.be.undefined;
	});
	it('should evaluate to true if input has a length of 3', function() {
		expect(functions.checkData('bat')).to.equal(true);
	});
	it('should evaluate to false if input has a length that does not equal 3', function() {
		expect(functions.checkData('bait')).to.equal(false);
	});
	it('should throw an "Invalid Input" error if input is not a string', function() {
		expect(function() {functions.checkData(4)}).to.throw('Invalid Input');
	});
})
