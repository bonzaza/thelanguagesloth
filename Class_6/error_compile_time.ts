// the code won't compile because of the incorrect type
let up = (n: string) => n.toUpperCase();

console.log(up('string'));
console.log(up(42));
