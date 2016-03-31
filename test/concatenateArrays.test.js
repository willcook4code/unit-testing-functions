var expect = require('chai').expect;
var functions = require('../functions.js');

describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).not.to.be.undefined;
	});
	it('should return 1 array with 2 or more elements', function() {
		expect(functions.concatenateArrays([8, 9], [10, 11])).to.deep.equal([8, 9, 10, 11]);
	});
	it('should throw an "Invalid Input" error if input is not 2 arrays', function() {
		expect(function() {functions.checkData(8, 9, 10, 11)}).to.throw('Invalid Input');
	});
});