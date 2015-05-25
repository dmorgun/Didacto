//Functions and objects are the most important constructs in the JavaScript programming language and, in fact,
// functions are actually just special objects. In addition to all of the behavior and features of objects functions
// have the special property that they can be invoked.
//    Functions are declared using the function keyword. They may or may not be given a name and they may have zero or
// more arguments. A function that is not given a name is called an anonymous function. All functions return a value.
// A function that does not explicitly return a value (using the return keyword) will return the value undefined.
//    JavaScript has first-class functions which means that functions are a value just like a number or a string.
// A function can be assigned to a variable, passed as an argument to another function or returned as the result
// of another function.

// empty anonymous function
var empty = function () {};

// function with a name, arguments and a return statement
function add (first, second) {
    return first + second;
}

//We invoke a function by suffixing its identifier with parenthesis.
// Any arguments to the function are included in the parenthesis and separated by commas:
var total = add(5, 9);
// => 14
console.log(total)

//When a function invokes itself that function is called a recursive function. If you write a recursive function ensure
// that the recursion will eventually stop. Otherwise your program will crash.
function countdown (n) {
    console.log(n);
    if (n === 0) return;
    countdown(n-1);
}

//Same code written without return - using if - else statement:
function countdown (n) {
    console.log(n);
    if (n > 0) {
        countdown(n-1)
    } else {
        console.log ("game over");
    }
}

countdown (15);

//Define a function called 'multiply'. The function should return the product of its first and second arguments:
function multiply (first, second) {
    return first*second;
}