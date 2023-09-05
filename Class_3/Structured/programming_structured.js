// imperative and structured
// pretend that this is main()
let prefix = 'Hi,';
let user = `iUser`;
let suffix = '!';

let name = prepare_name(user);
let greeting = generate_greeting(prefix, name, suffix);

print_greeting(greeting);

function print_greeting(message) {
    console.log(message);
}

function generate_greeting(prefix, name, suffix) {
    return prefix + ' ' + name + suffix;
}

function prepare_name(user) {
    if (typeof user === 'string' && user.length > 0) {
        return upper(user);
    } else {
        return `anonymous`;
    }
}

function upper(name) {
    return name.toUpperCase();
}

