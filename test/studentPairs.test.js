var expect = require('chai').expect;
var functions = require('../functions.js');

describe('studentPairs', function() {
	it('should exist', function() {
		expect(functions.studentPairs).not.to.be.undefined;
	});
	it('shoud return an array', function() {
		expect(functions.studentPairs(['Will', 'Haythem'])).to.be.an('array');
	});
	it('should return an error if that name is the only one in the list', function() {
		expect(function() {functions.studentPairs(['Will'])}).to.throw('Invalid Input');
	});
	it('should throw an error if the input type is not array', function() {
		expect(function() {functions.studentPairs('Dana', 'Will')}).to.throw('Invalid Input');
	});
});