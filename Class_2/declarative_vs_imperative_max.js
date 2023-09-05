function findMax(numbers) {
    let max = numbers.shift();

    numbers.forEach((number) => {
        if (number > max) {
            max = number;
        }
    });

    return max;
}

let numbers = [1, 5, 8, 3, 2];
console.log(findMax(numbers)); // imperative when we look at the function's definition
console.log(Math.max(...numbers)); // declarative with built-in functionality
