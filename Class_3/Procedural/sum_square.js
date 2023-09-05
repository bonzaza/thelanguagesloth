// imperative and procedural
var a = 4;
var b = 2;

var result = 0;
var square_a = square(a);
var square_b = square(b);

sum(square_a, square_b);

console.log(`sum of squares of ${a} and ${b} is ${result}`);

function square(n) {
    return n * n;
}

function sum(a, b) {
    result = a + b; // using a global scope is a bad practice
}
