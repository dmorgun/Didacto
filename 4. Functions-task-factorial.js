//Define a function called 'factorial'. Given a positive integer argument the function should return the product of all
// positive integers less than or equal to the argument (HINT: it may help to use a recursive function):
function factorial (n) {
    if (n < 0) {
        return ("Number should be >= 0");
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial (n - 1);
    }
}
var a = factorial(7);
console.log(a);