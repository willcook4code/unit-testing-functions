var expect = require('chai').expect;
var functions = require('../functions.js');

describe('fixProperNoun', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	});
	it('should throw an "Invalid Input" error if input is an empty string', function() {
		expect(function() {functions.fixProperNoun('')}).to.throw('Invalid Input');
	});
	it('should return a string wherein only the first letter is capitalized', function() {
		expect(functions.fixProperNoun('FLORIDA')).to.equal('Florida');
	});
	it('should throw an "Invalid Input" error if input is not a string', function() {
		expect(function() {functions.fixProperNoun(['FLORIDA'])}).to.throw('Invalid Input');
	});
});