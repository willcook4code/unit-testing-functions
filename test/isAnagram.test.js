var expect = require('chai').expect;
var functions = require('../functions.js');

describe('isAnagram', function() {
	it('should exist', function() {
		expect(functions.isAnagram).not.to.be.undefined;
	});
	it('should throw an error if input is not 2 arrays', function() {
		expect(function() {functions.isAnagram([''])}).to.throw('Invalid Input');
	});
	it('should throw an error if input arrays are empty', function() {
		expect(function() {functions.isAnagram([], [])}).to.throw('Invalid Input');
	});
	it('should throw an error if input arrays are not of equal length', function() {
		expect(function() {functions.isAnagram(['a', 'b', 'c'], ['a', 'b'])}).to.throw('Invalid Input');
	});
	it('should throw an error if input is not an array containing a string', function() {
		expect(function() {functions.isAnagram([7], ['a'])}).to.throw('Invalid Input');
	});
	it('should return an array that is the same length as a and b.', function() {
		expect(functions.isAnagram(['a', 'b', 'c'], ['a', 'b', 'c'])).to.have.length(3);
	});
});