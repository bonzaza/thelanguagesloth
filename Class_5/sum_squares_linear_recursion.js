/**
 * A function uses a linear recursion to
 * calculate and return a sum of squares
 *
 * @param {number} n - A positive number greater than 1
 * @returns {number}
 */
function sum_of_squares(n) {
    // console.log(arguments.callee)
    if (n === 1) {
        return 1;
    }

    return Math.pow(n, 2) + sum_of_squares(n - 1);
}

console.log(sum_of_squares(4));
console.log(sum_of_squares(32));
