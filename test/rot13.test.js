var expect = require('chai').expect;
var functions = require('../functions.js');

describe('rot13', function() {
	it('should exist', function() {
		expect(functions.rot13).not.to.be.undefined;
	});
	it('should take an unencrypted string and return the [ROT-13] version of that string', function() {
		expect(functions.rot13('will')).to.equal('jvyy');
	});
	it('should throw an error if input is not an alphabetic character', function() {
		expect(function() {functions.rot13('!asdf')}).to.throw('Invalid Input');
	});
	it('should throw an error if input is not lower-case', function() {
		expect(function() {functions.rot13('ASDF')}).to.throw('Invalid Input');
	});
});