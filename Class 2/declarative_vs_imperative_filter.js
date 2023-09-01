function imperativeFilterGreaterThan(limit, numbers) {
    let result = [];

    numbers.forEach((number) => {
        if (number > limit) {
            result.push(number);
        }
    });

    return result;
}

function declarativeFilterGreaterThan(limit, numbers) {
    return numbers.filter((number) => number > limit);
}

let numbers = [1, 5, 8, 3, 2, 42];
console.log(imperativeFilterGreaterThan(5, numbers));
console.log(declarativeFilterGreaterThan(5, numbers));
