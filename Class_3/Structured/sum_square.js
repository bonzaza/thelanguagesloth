// imperative and structured
// pretend that this is main()
let a = 4;
let b = 2;

print_sum_of_squares(a, b);

function print_sum_of_squares(a, b) {
    console.log(`sum of squares of ${a} and ${b} is ${sum_of_squares(a, b)}`);
}

function sum_of_squares(a, b) {
    let square_a = square(a)
    let square_b = square(b)

    return sum(square_a, square_b);
}

function square(n) {
    return n * n;
}

function sum(a, b) {
    return a + b;
}

