// a class with a state is considered
// a good practice (stateful class)
class Greeter {
    constructor(name) {
        this.name = name; // state
    }

    static GREETING() { // constant
        return `Hi,`;
    }

    greet() {
        return `${Greeter.GREETING()} ${this.#upper()}!`
    }

    #upper() {
        return this.name.toUpperCase();
    }
}

let greeter = new Greeter(`iUser`);
console.log(greeter.greet());
