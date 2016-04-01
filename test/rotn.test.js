var expect = require('chai').expect;
var functions = require('../functions.js');

describe('rotn', function() {
	it('should exist', function() {
		expect(functions.rotn).not.to.be.undefined;
	});
	it('should take a ROT-N encrypted string and return the decrypted version of that string', function() {
		expect(functions.rotn('will', 4)).to.equal('ampp');
	});
	it('should throw an error if input is not an alphabetic character', function() {
		expect(function() {functions.rotn('!asdf')}).to.throw('Invalid Input');
	});
	it('should throw an error if input is not lower-case', function() {
		expect(function() {functions.rotn('ASDF')}).to.throw('Invalid Input');
	});
});