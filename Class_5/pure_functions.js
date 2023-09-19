function generateFullName(person) { // a pure function (no side effects)
    return `${person.firstName} ${person.lastName}`;
}

function greet(fullName) {  // not a pure function (affects output)
    console.log(`Greet you ${fullName}!`);
}

let JessicaBruen = {firstName: 'Jessica', lastName: 'Bruen', email: 'Jessica.Lol@hotmail.com', age: 28};

greet(generateFullName(JessicaBruen));
greet('Jessica Bruen'); // referential transparency
