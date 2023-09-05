function greet(name) {
    return `Hi, ${name}!` // pure function
}

function upper(name) {
    return name.toUpperCase(); // pure function
}

console.log(greet(upper('iUser'))); // function composition
