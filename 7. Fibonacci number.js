//Fibonacci Challenge
//The fibonacci sequence is a mathematical sequence of integers. By definition, the first two numbers in the Fibonacci
// sequence are 0 and 1, and each subsequent number is the sum of the previous two.
//
//0, 1, 1, 2, 3, 5, 8, 13, ..
//
//Define a function called 'fibonacci' with a single argument n. The function should return the nth number of the fibonacci sequence.

//function fibonacci(n) {
//    var sequence = [0, 1];
//    if (n === 0 || n === 1) {
//        return n;
//    } else {
//        for (var i = 1; i < n; i++) {
//            var l = sequence.length;
//            var F = sequence[l - 1] + sequence[l - 2];
//            var total = sequence.push(F);
//            //console.log(sequence);
//            var L = sequence.length;
//            //var Fib = console.log(sequence[L-1]);
//        }
//        return sequence[L - 1];
//    }
//
//}

//Artem's implemetation

//function fibonacci1(n) {
//    var result;
//    if (n === 0 || n === 1) {
//        result =  n;
//    } else {
//        result = fibonacci(n-1) + fibonacci(n-2);
//    }
//    return result;
//}


//@Daria - here is fast recursion, please research while it works faster then prev. implementation
function fibonacci(n, val, prev) {
    val = val || 1;
    prev = prev || 0;
    if (n == 0) return prev;
    if (n == 1) return val;
    return fibonacci(n - 1, val + prev, val);
}
//
//function fibonacci(n) {
//    var result,
//        prev = 1,
//        prevOfPrev = 0;
//
//
//    if (n === 0 ){
//        result = prevOfPrev;
//    } else if (n === 1){
//        result = prev;
//    } else {
//
//        var i;
//        //console.log('Fibonacci =  ', n);
//        //console.log('Number of iterations ', n - i +1);
//        for (i = 2; i <= n; i++) {  //N-i,  N-1 = 2
//            result = prev + prevOfPrev;
//
//            prevOfPrev = prev;
//            prev = result;
//        }
//
//    }
//
//    return result;
//}


//console.log('Result of 0 is ',fibonacci(0),'should be ', 0, '\n');
//console.log('Result of 1 is ',fibonacci(1),'should be ', 1, '\n');
//console.log('Result of 2 is ',fibonacci(2),'should be ', 1, '\n');
//console.log('Result of 3 is ',fibonacci(3),'should be ', 2, '\n');
//console.log('Result of 4 is ',fibonacci(4),'should be ', 3, '\n');
//console.log('Result of 10 is ',fibonacci(10),'should be ', 55, '\n');
//console.log('Result of 50 is ',fibonacci(40),'should be ', 12586269025, '\n');

/* 1. mocha + chai - use for #2 below
2. Write tests for Artem implementation
3. Write your own implementation of fibonacci
 */

var expect = require('chai').expect;

//@Daria - you should not mix TDD and DBB styles - choose one :)
var assert = require('chai').assert;

describe('Fibonacci Tests', function() {
    it('fibonacci(n) should always return a Number', function () {
        expect(fibonacci(2)).to.be.a('number');
    });
    it('fibonacci(n) is not an Array', function () {
        assert.isNotArray(fibonacci(2));
    });
    it('Result of fibonacci(0) is 0', function () {
        expect(fibonacci(0)).to.equal(0);
    });
    it('Result of fibonacci(1) is 1', function () {
        expect(fibonacci(1)).to.equal(1);
    });
    it('Result of fibonacci(2) is 1', function () {
        expect(fibonacci(2)).to.equal(1);
    });
    it('Result of fibonacci(3) is 2', function () {
        assert.equal(fibonacci(3),'2');
    });
    it('Result of fibonacci(4) is truthy', function () {
        assert.ok(fibonacci(4));
    });
    it('Result of fibonacci(10) is 55', function () {
        expect(fibonacci(10)).to.equal(55);
    });
    it('Result of fibonacci(50) is 12586269025', function () {
        expect(fibonacci(50)).to.equal(12586269025);
    });

    //@Daria - and what about negative scenarios?
    it('Result of fibonacci(-1) should throw error', function() {
        expect(fibonacci.bind(null, -1)).to.throw('Wrong value!');
    });
});