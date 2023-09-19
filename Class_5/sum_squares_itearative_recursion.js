/**
 * A function uses an iterative recursion to
 * calculate and return a sum of squares
 *
 * @param {number} n - A positive number greater than 1
 * @returns {number}
 */
function sum_of_squares(n) {
    // console.log(arguments.callee)
    function sum_of_squares_iter(carry, current, max) {
        return current > max
            ? carry
            : sum_of_squares_iter(
                Math.pow(current, 2) + carry,
                current + 1,
                max
            );
    }

    return sum_of_squares_iter(0, 1, n);
}

console.log(sum_of_squares(4));
console.log(sum_of_squares(32));
