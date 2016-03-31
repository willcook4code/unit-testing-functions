var expect = require('chai').expect;
var functions = require('../functions.js');

describe('derot13', function() {
	it('should exist', function() {
		expect(functions.derot13).not.to.be.undefined;
	});
	it('should take a ROT-13 encrypted string and return the decrypted version of that string', function() {
		expect(functions.derot13('jvyy')).to.equal('will');
	});
	it('should throw an error if input is not an alphabetic character', function() {
		expect(function() {functions.derot13('!asdf')}).to.throw('Invalid Input');
	});
	it('should throw an error if input is not lower-case', function() {
		expect(function() {functions.derot13('ASDF')}).to.throw('Invalid Input');
	});
});