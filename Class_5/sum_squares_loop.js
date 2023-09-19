/**
 * Return a sum of squares
 *
 * @param {number} n - A positive number greater than 1
 * @returns {number}
 */
function sum_of_squares(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += Math.pow(i, 2);
    }

    return result;
}

console.log(sum_of_squares(4));
console.log(sum_of_squares(32));
