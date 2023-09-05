class SquareSummer {
    constructor() {
    }

    sum(a, b) {
        return this.#square(a) + this.#square(b);
    }

    #square(n) {
        return n * n;
    }
}

let summer = new SquareSummer();
console.log(`sum of squares of 4 and 2 is ${summer.sum(4, 2)}`);
