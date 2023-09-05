// imperative and procedural
var prefix = 'Hi, ';
var name = '';
var suffix = '!';

var user = `iUser`;
name = upper(user); // rewriting a variable is a bad practice

console.log(prefix + name + suffix);

function upper(name) {
    return name.toUpperCase();
}
