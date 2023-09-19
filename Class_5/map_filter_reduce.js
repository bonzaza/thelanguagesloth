let mapped = [1, 2, 3, 4].map((number) => {
    return ++number;
});

console.log(mapped); // [2, 3, 4, 5]

let filtered = [1, 2, 3, 4].filter((number) => {
    return number > 2;
});

console.log(filtered); // [3, 4]

let reduced = [1, 2, 3, 4].reduce((carry, n) => {
    return carry + n;
}, 0);

console.log(reduced); // 10
