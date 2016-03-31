// var expect = require('chai').expect;
// var functions = require('../functions.js');

// describe('rotn', function() {
// 	it('should exist', function() {
// 		expect(functions.rotn).not.to.be.undefined;
// 	});
// 	it('should take a ROT-13 encrypted string and return the decrypted version of that string', function() {
// 		expect(functions.rotn('jvyy')).to.equal('will');
// 	});
// 	it('should throw an error if input is not an alphabetic character', function() {
// 		expect(function() {functions.rotn('!asdf')}).to.throw('Invalid Input');
// 	});
// 	it('should throw an error if input is not lower-case', function() {
// 		expect(function() {functions.rotn('ASDF')}).to.throw('Invalid Input');
// 	});
// });