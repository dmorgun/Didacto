// http://callmenick.com/post/basic-front-end-testing-with-mocha-chai

var expect = require('chai').expect;

function isEven(num) {
    if (num % 2 !== 0) return false;
    return true;
}

describe('Is Even Tests', function() {
   it('Should always return a boolean', function () {
       expect(isEven(2)).to.be.a('boolean');
   });
    it('76 is even and should return true', function () {
        expect(isEven(76)).to.be.true;
    });
    it('77 is odd and should return false', function () {
        expect(isEven(77)).to.be.false;
    });
});