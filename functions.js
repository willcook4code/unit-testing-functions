/*
 * PROBLEM `checkData`: (normal)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function checkData(inputString) {
	if (typeof inputString !== 'string') {
		throw new Error('Invalid Input');
	}
	// Input: A string, Ex: 'cat'
	if (inputString.length === 3) {
		return true;
	} else {
		return false;
	}
	// Output: A boolean, Ex: ('cat' === true, 'mouse' === false)
}

/*
 * PROBLEM `concatenateArrays`: (normal)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {
	if (Array.isArray(a) === false) {
		throw new Error('Invalid Input');
	}
	if (Array.isArray(b) === false) {
		throw new Error('Invalid Input');
	}
	// Input: 2 arrays, Ex: a = ['The cat chases'], b = ['the mouse.']
	var a = a, b = b;
	var ab = a.concat(b);
	return ab;
	// Output: 1 array of 2 elements, Ex: c = ['The cat chases', 'the mouse.']
}

/*
 * PROBLEM `fixProperNoun`: (normal)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
	if (noun.length === 0) {
		throw new Error('Invalid Input');
	}
	if (typeof noun !== 'string') {
		throw new Error('Invalid Input');
	}
	// Input: 1 string, Ex: 'FLORIDA'
	var smallNoun = noun.toLowerCase();
	var upper = smallNoun.charAt(0).toUpperCase();
	var lowers = smallNoun.substring(1, noun.length);
	return (upper+lowers);
	// Output: 1 string, Ex: 'Florida'
}

/*
 * PROBLEM `sortLetters`: (normal)
 * Write a function called `sortLetters` that returns a string that sorts all
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(inputString) {
	if (inputString.length === 0) {
		throw new Error('Invalid Input');
	}
	if (typeof inputString !== 'string') {
		throw new Error('Invalid Input');
	}
	// Input: 1 String, Ex: 'mouse'
	var tinyString = inputString.toLowerCase();
	var strArr = tinyString.split('');
	var sorted = strArr.sort('');
	var joined = sorted.join('').trim();
	return joined;
	// Output: 1 String, Ex: 'emosu'
}

/*
 * PROBLEM `absVal`: (normal)
 * Write a function called `absVal` that return the absolute value of a given
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
	if (isNaN(integer)) {
		throw new Error('Invalid Input');
	}
	// Input: 1 number, Ex: -6
	if (integer < 0) {
	var fromZero = (0 - integer);
	// Output: 1 number, Ex: 6
	return fromZero;
	} else {
		return integer;
	}
}

/*
 * PROBLEM `myMin`: (normal)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function myMin(intA, intB) {
	if ((isNaN(intA)) || (isNaN(intB))) {
		throw new Error('Invalid Input');
	}
	// Input: 2 numbers, Ex: intA = 3, intB = 8
	if (intA > intB) {
		return intB;
	} else {
		return intA;
	}
	// Output: 1 number, Ex: 3
}

/*
 * PROBLEM `myMax`: (normal) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers and returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */

function myMax(numList) {
	if (Array.isArray(numList) === false) {
		throw new Error('Invalid Input');
	}
	var numTotal = numList.reduce(function(previousVal, currentVal) {
  		return previousVal + currentVal;
	});
	if (isNaN(numTotal)) {
		throw new Error('Invalid Input');
	}
	var largest = 0;
	for (var i = 0; i < numList.length; i++) {
		
		if (numList[i] > largest) {
			largest = numList[i];
		}
	}
	return largest;
 	// Output: 1 number, Ex: 9
}

/*
 * PROBLEM `getMonth`: (normal)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function getMonth(ofTwelve) {
	if (isNaN(ofTwelve)) {
		throw new Error('Invalid Input');
	}
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	// Input: A number, Ex: 4
	var month = months[ofTwelve - 1];
	// Output: A string, Ex: April
	return month;
}

/*
 * PROBLEM `randomElement`: (normal)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */

function randomElement(arr) {
	// Input: An array of values, Ex: var array = [2, 'cat', false,]
	var anyItem = Math.floor(Math.random()*arr.length);
	if (Array.isArray(arr) === false) {
		throw new Error('Invalid Input');
	}
	if (arr[0] === undefined) {
		throw new Error('Invalid Input');
	}
	return arr[anyItem];

	// Output: Any string, number, boolean, objects, array, or function from the given array, ex: 2 or 'cat' or false
}

/*
 * PROBLEM `studentPairs`: (normal)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */

function studentPairs(studentNames) {
	// Input: An array of student names, Ex: studentNames = ['Dana', 'Josh', 'Will', 'Dan']
	if (Array.isArray(studentNames) === false) {
		throw new Error('Invalid Input');
	}
	if (studentNames.length === 1) {
		throw new Error('Invalid Input');
	}
	var pairList = [];
	function shuffle (array) {
	  var i, x, j;
	  for (i = array.length; i > 0; i -= 1) {
	    j = Math.floor(Math.random() * (i + 1))
	    x = array[i - 1]
	    array[i - 1] = array[j]
	    array[j] = x
	  }
	  return array;
	}
	shuffle(studentNames);
	console.log(studentNames);
	while (studentNames.length > 1) {
		var newPair = studentNames.splice(0, 2);
		pairList.push(newPair);
	}
	console.log(pairList);
	if (studentNames.length > 0) {
		var oddMan = studentNames[0];
		pairList[0].push(oddMan);
	}
	return pairList;
	// Output: An array of arrays, Ex: [['Dana', 'Dan'], ['Josh', 'Will']]
}

/*
 * PROBLEM `sumSquares`: (normal)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function sumSquares(num) {
	// Input: A number greater than 1, Ex: 3
	if (num <= 0) {
		throw new Error('Invalid Input');
	}
	if (isNaN(num)) {
		throw new Error('Invalid Input');
	}
	total = 0
	while (num > 0) {
		total += (Math.pow(num, 2));
		num -= 1;
	}
	return total;
	// Output: A number, Ex: 14
}

/* 
 * PROBLEM `findMaxDiff`: (normal)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function findMaxDiff(arr) {
	// Input: An array of numbers, Ex: numbers = [2, 6, 4, 9, 10]
	if (Array.isArray(arr) === false) {
		throw new Error('Invalid Input');
	}
	if (arr[1] === undefined) {
		throw new Error('Invalid Input');
	}
	var maxDiff = 0;
	for (var i = 0; i < arr.length; i++) {
		if (Math.abs(arr[i + 1] - arr[i]) > maxDiff) {
			maxDiff = Math.abs(arr[i + 1] - arr[i]);
		}
	}
	console.log(maxDiff);
	return maxDiff;
	// Ouput: 1 number, Ex: 5
}

/*
 * PROBLEM `insertDashes`: (normal)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function insertDashes(sentence) {
	// Input: A string, Ex: 'This is a sentence.'
	if (typeof sentence !== 'string') {
		throw new Error('Invalid Input');
	}
	var wordsArr = [];
	var newSent = [];
	var sentArr = sentence.split(/\W/);
	for (var i = 0; i < sentArr.length; i++) {
		wordsArr.push(sentArr[i].split(''));
	}
	for(var x = 0; x < wordsArr.length; x++) {
			newSent.push(wordsArr[x].join('-'));
	}
	return newSent.join(' ');
	// Output: A string with dashes inserted between the letters, but not spaces, Ex: 'T-h-i-s i-s a s-e-n-t-e-n-c-e.'
}

/*
 * PROBLEM `mySubstring`: (normal)
 * Implement a function called `mySubstring` that can output the substring of
 * the given string within specified bounds.
 *
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 *
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function mySubstring(string, a, z) {
	if (typeof string !== 'string') {
		throw new Error('Invalid Input');
	}
	// Input: A string, Ex: 'abcde'
	var stringList = string.split('');
	var start = stringList.indexOf(a);
	var end = stringList.indexOf(z);
	var substring =stringList.slice(a, (z + 1));
	return substring.join('');
	// Output: A substring, given a start and end of original string, Ex: 'cd'
}
/*
 * PROBLEM `splitSwap`: (hard)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 *
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function splitSwap(arr) {
	// Input: An array with an odd number of elements, Ex: array = ['mouse', 'cat', 3]
	if (Array.isArray(arr) === false) {
		throw new Error('Invalid Input')
	}
	var splitAt = Math.floor(arr.length/2);
	var rightHalf = arr.splice(0, splitAt);
	var leftHalf = arr.splice(0, arr.length);
	var pushLeft = [];
	pushLeft.push(leftHalf);
	var swapped = [].concat.call((leftHalf),(rightHalf));
	return swapped;
	// Output: An array with the first half of the original elements placed at the end, Ex: ['cat', 3, 'mouse']
}

/*
 * PROBLEM `smallMultiples`: (hard)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function smallMultiples(n, k) {
	if (isNaN(k)) {
		throw new Error('Invalid Input');
	}
	if (isNaN(n)) {
		throw new Error('Invalid Input');
	}
	count = 1;
	// Input: 2 numbers(an integer and a multiplier), Ex:  4, 2
	for (var i = 1; i < n; i++) {
		var total = i * k;
		if (total < n) {
			count++;
		}
	}
	return count;
	// Output: 1 number(of multiples smaller than or equal to the integer), Ex: 2
}

/*
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

function rot13(toRot) {
	if (toRot.search(/\W/g) !== -1) {
		throw new Error('Invalid Input');
	}
	if (toRot == toRot.toUpperCase()) {
		throw new Error('Invalid Input');
	}
	// Input: A string, Ex: 'WILL'
	var stringArr = toRot.split('');
	for (var n = 0; n < stringArr.length; n++){
		var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
		var b = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		var i = a.indexOf(stringArr[n]);
		var j = b[i];
		var k = b.indexOf(stringArr[n]);
		var l = a[k];
		if (j === undefined) {
			stringArr[n] = l;
		} else {
			stringArr[n] = j;
		}
	}	
	return stringArr.join('');
	// Output: An encrypted string, Ex: 'jvyy'
}

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

function derot13(toDeRot) {
	if (toDeRot.search(/\W/g) !== -1) {
		throw new Error('Invalid Input');
	}
	if (toDeRot == toDeRot.toUpperCase()) {
		throw new Error('Invalid Input');
	}
	// Input: A string, Ex: 'jvyy'
	var stringArr = toDeRot.split('');
	for (var n = 0; n < stringArr.length; n++){
		var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
		var b = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		var i = a.indexOf(stringArr[n]);
		var j = b[i];
		var k = b.indexOf(stringArr[n]);
		var l = a[k];
		if (j === undefined) {
			stringArr[n] = l;
		} else {
			stringArr[n] = j;
		}
	}	
	return stringArr.join('');
	// Output: An encrypted string, Ex: 'will'
}

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

function rotn(string, n) {
	if (string.search(/\W/g) !== -1) {
		throw new Error('Invalid Input');
	}
	if (string == string.toUpperCase()) {
		throw new Error('Invalid Input');
	}
	var stringArr = string.split('');
	var newStringArr = [];
	for (var j = 0; j < stringArr.length; j++){
		var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		// Input: A string and a number, Ex: 'Will', 4
		var stringI = alphabet.indexOf(stringArr[j]);
		// var over = stringI - 25;
		var stringN = alphabet[stringI + n];
		if (stringN === undefined) {
			var stringO = alphabet[0 + (n + (stringI - 26))];
			newStringArr.push(stringO);
		} else {
		// Output: ROT-N version of that string, Ex: 'ampp'
			newStringArr.push(stringN);
		}
	}
	return newStringArr.join('');
}

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function findBoth(a, b) {
	if (b === undefined) {
		throw new Error('Invalid Input');
	}
	if (a.length === 0) {
		throw new Error('Invalid Input');
	}
	if (b.length === 0) {
		throw new Error('Invalid Input');
	}
	// Input: 2 arrays of numbers, Ex: arr1 = [3, 6, 0, 23, 45], arr2 = [23, 23, 0, 2, 98]
	var inBoth = [];
	for (var i = 0; i < a.length; i++) {
		for(var j = 0; j < b.length; j++) {
			if (a[i] === b[j]) {
				if (inBoth.indexOf(b[j]) > 0) {
					inBoth.slice(inBoth.indexOf(b[j]), 1);
				} else {
					inBoth.push(a[i]);
				}
			}
		}
	}
	return inBoth;
	// Output: 1 combined array, Ex: newArr = [0, 23]
}

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function countBoth(a, b) {
	if (b === undefined) {
		throw new Error('Invalid Input');
	}
	if (a.length === 0) {
		throw new Error('Invalid Input');
	}
	if (b.length === 0) {
		throw new Error('Invalid Input');
	}
	// Input: 2 arrays, Ex: arr1 = [3, 6, 0, 23, 45], arr2 = [23, 23, 0, 2, 98]
	var inBoth = [];
	for (var i = 0; i < a.length; i++) {
		for(var j = 0; j < b.length; j++) {
			if (a[i] === b[j]) {
				if (inBoth.indexOf(b[j]) > 0) {
					inBoth.slice(inBoth.indexOf(b[j]), 1);
				} else {
					inBoth.push(a[i]);
				}
			}
		}
	}
	var counter = 0;
	for (var i = 0; i < inBoth.length; i++) {
		for (var j = 0; j < a.length; j++) {
			if (inBoth[i] === a[j]) {
				counter++;
			}
		}
		for (var j = 0; j < b.length; j++) {
			if (inBoth[i] === b[j]) {
				counter++;
			}
		}
	}
	return counter;
	// Output: A number that is the amount of commonalities in the original 2 arrays.  Ex: 5
}

/*
 * PROBLEM `isDiagonalMatrix`: (nightmare)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal
 * matrix if all entries outside the main diagonal are zero (the diagonal from
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function isDiagonalMatrix() {
	// Input: An array of array, Ex: [
								  //   [1, 0, 0],
								  //   [0, 2, 0],
								  //   [0, 0, 3]
								  // ]

	// Output: A boolean, Ex: true.
}

/*
 * PROBLEM `isAnagram`: (nightmare) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal
 * lengths arr1 and arr2. The function should return a new array of the same
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function isAnagram(a, b) {
	if (b === undefined) {
		throw new Error('Invalid Input');
	}
	if (a.length === 0) {
		throw new Error('Invalid Input');
	}
	if (b.length === 0) {
		throw new Error('Invalid Input');
	}
	if (a.length !== b.length) {
		throw new Error('Invalid Input');
	}
	if ((typeof a[0] !== 'string') || (typeof b[0] !== 'string')) {
		throw new Error('Invalid Input');
	}
	//Input: 2 arrays of strings, Ex: arr1 = ['cinema', 'shot', 'aba', 'rain']; arr2 = ['iceman', 'hots', 'bab', 'train'];
	
	//Output: 1 array of booleans, Ex: newArray = [true, true, false, false];
}

/*
 * PROBLEM `validateParentheses`: (nightmare) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function validateParenthesis() {
	//Input: A string of characters limited to ()[]{} in any order, Ex: ('{[(){()}]}')

	//Output: A boolean value to determine if the parenthesis appear open and closed in correct order, Ex: true;
}

/*
 * PROBLEM `flattenArray`: (nightmare) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */

function flattenArray() {
	//Input: An array of any type, Ex: [1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10]

	//Output: Original array, converted to a list of non-arrays when possible, Ex: [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
}

/*
 * Do not modify the code below
 */
module.exports = {
	checkData: 				typeof checkData === 'undefined' ? undefined : checkData,
	concatenateArrays: 		typeof concatenateArrays === 'undefined' ? undefined : concatenateArrays,
	fixProperNoun: 			typeof fixProperNoun === 'undefined' ? undefined : fixProperNoun,
	sortLetters: 			typeof sortLetters === 'undefined' ? undefined : sortLetters,
	absVal: 				typeof absVal === 'undefined' ? undefined : absVal,
	myMin: 					typeof myMin === 'undefined' ? undefined : myMin,
	myMax: 					typeof myMax === 'undefined' ? undefined : myMax,
	getMonth: 				typeof getMonth === 'undefined' ? undefined : getMonth,
	randomElement: 			typeof randomElement === 'undefined' ? undefined : randomElement,
	studentPairs: 			typeof studentPairs === 'undefined' ? undefined : studentPairs,
	sumSquares: 			typeof sumSquares === 'undefined' ? undefined : sumSquares,
	findMaxDiff: 			typeof findMaxDiff === 'undefined' ? undefined : findMaxDiff,
	insertDashes: 			typeof insertDashes === 'undefined' ? undefined : insertDashes,
	mySubstring: 			typeof mySubstring === 'undefined' ? undefined : mySubstring,
	splitSwap: 				typeof splitSwap === 'undefined' ? undefined : splitSwap,
	smallMultiples: 		typeof smallMultiples === 'undefined' ? undefined : smallMultiples,
	rot13: 					typeof rot13 === 'undefined' ? undefined : rot13,
	derot13: 				typeof derot13 === 'undefined' ? undefined : derot13,
	rotn: 					typeof rotn === 'undefined' ? undefined : rotn,
	findBoth: 				typeof findBoth === 'undefined' ? undefined : findBoth,
	countBoth: 				typeof countBoth === 'undefined' ? undefined : countBoth,
	isDiagonalMatrix: 		typeof isDiagonalMatrix === 'undefined' ? undefined : isDiagonalMatrix,
	isAnagram: 				typeof isAnagram === 'undefined' ? undefined : isAnagram,
	validateParentheses:	typeof validateParentheses === 'undefined' ? undefined : validateParentheses,
	flattenArray: 			typeof flattenArray === 'undefined' ? undefined : flattenArray
};