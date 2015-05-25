//JavaScript has a single numerical datatype (called number). number is a floating-point data type but in JavaScript it
// is used to represent both integer and non-integer numbers.
// Floating-point is a method of representing an approximation of a real number. The number is represented as a set
// of significant digits, a base (base 10 for JavaScript) and an exponent.
//
//    significant digits * baseexponent
a=0.1 + 0.2
console.log(a)
//0.30000000000000004

//Parsing
//Converting a string representation of a number to an instance of the number data type is achieved using the parseInt and
//parseFloat functions. The difference is that the parseInt function discards the fractional part of the number
//(the part after the decimal point).

console.log(parseInt('3.14'));
// => 3

console.log(parseFloat('3.14'));
// => 3.14

//Define another variable called 'c' and assign the sum of 'a' and 'b' to it:
var a = '1.1';
var b = '2.2';
var c = parseFloat(a) + parseFloat(b);

//Rounding
//Round a number to the required number of decimal places by using the toFixed method of the number.
// toFixed returns a string representation of the number.
var fraction = 0.1234567;

fraction.toFixed(2);
// => '0.12'

fraction.toFixed(5);
// => '0.12346'

//Define a variable called 'shortFraction'. Assign it a string representation of 'fraction', rounded to 4 decimal places:
