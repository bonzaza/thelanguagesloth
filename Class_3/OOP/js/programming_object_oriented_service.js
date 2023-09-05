// a class without a state is considered
// a bad practice (utility/helper class)
class Greeter {
    static GREETING() { // constant
        return `Hi,`;
    }

    greet(name) {
        return `${Greeter.GREETING()} ${this.#upper(name)}!`;
    }

    #upper(name) {
        return name.toUpperCase();
    }
}

let greeter = new Greeter();
console.log(greeter.greet(`iUser`));
