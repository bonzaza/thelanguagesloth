function square(n) {
    return n * n;
}

function sum(a, b) {
    return a + b;
}

function sum_of_squares(a, b) {
    return sum(square(a), square(b));
}

console.log(`sum of squares of 4 and 2 is ${sum_of_squares(4, 2)}`);
