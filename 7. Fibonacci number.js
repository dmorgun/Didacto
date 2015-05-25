//Fibonacci Challenge
//The fibonacci sequence is a mathematical sequence of integers. By definition, the first two numbers in the Fibonacci
// sequence are 0 and 1, and each subsequent number is the sum of the previous two.
//
//0, 1, 1, 2, 3, 5, 8, 13, ..
//
//Define a function called 'fibonacci' with a single argument n. The function should return the nth number of the fibonacci sequence.

function fibonacci (n) {
    var sequence = [0,1];
    for (var i = 1; i < n; i++) {
        var l = sequence.length;
        var F = sequence[l-1] + sequence[l-2];
        var total = sequence.push(F);
        //console.log(sequence);
        var L = sequence.length;
        //var Fib = console.log(sequence[L-1]);
    }
    return console.log(sequence[L-1]);

}

fibonacci(1);