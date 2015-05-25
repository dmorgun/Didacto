//var n=6;
//var sequence = [0,1,1,2,3,5,8];
//console.log(sequence.length);
//
//function count (n) {
//    for (var i = 1; i < n; i++) {
//        console.log(i);
//    }
//}
//
//count(6);

function fibonacci (n) {
    if (n===0) {
        return console.log(0);
    } else if (n===1) {
        return console.log(1);
    } else {
        var sequence = [0,1];
        for (var i = 1; i < n; i++) {
            var l = sequence.length;
            var F = sequence[l-1] + sequence[l-2];
            var total = sequence.push(F);
            //console.log(sequence);
            var L = sequence.length;

        }
        return console.log(sequence[L-1]);
    }
}

fibonacci(0);
