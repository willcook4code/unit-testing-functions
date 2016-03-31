var expect = require('chai').expect;
var functions = require('../functions.js');

describe('randomElement', function() {
	it('should exist', function() {
		expect(functions.randomElement).not.to.be.undefined;
	});
	it('should return a random element from any index of the array', function() {
		expect([2, 'cat', false]).to.include(functions.randomElement([2, 'cat', false]));
	});
	it('should return an element in an array even if the array has one element', function() {
		expect(functions.randomElement(['cat'])).to.equal('cat');
	});
	it('should throw an error if the input is an empty array', function() {
		expect(function() {functions.randomElement([])}).to.throw('Invalid Input');
	});
	it('should throw an error if the input type is not array', function() {
		expect(function() {functions.randomElement('yes')}).to.throw('Invalid Input');
	});
});