let people = [
    { firstName: 'Jessica', lastName: 'Bruen', email: 'Jessica.Lol@hotmail.com', age: 28 },
    { firstName: 'Mary', lastName: 'Hintz', email: 'mHintz@gmail.com', age: 79 },
    { firstName: 'Emilie', lastName: 'Rosenbaum', email: 'Emilie.Rosenbaum@steuber.com', age: 45 },
    { firstName: 'Richmond', lastName: 'Haley', email: 'Richmond@hotmail.com', age: 74 },
    { firstName: 'Linnea', lastName: 'Abshire', email: 'Hauck.Abshire@Strosin.info', age: 33 },
    { firstName: 'Daren', lastName: 'Kilback', email: 'Daren.Kilback@yahoo.com', age: 20 },
    { firstName: 'Erin', lastName: 'Auer', email: 'hAuer@yahoo.com', age: 42 },
    { firstName: 'Triston', lastName: 'Blick', email: 'nWard@hotmail.com', age: 40 },
    { firstName: 'Garrett', lastName: 'Ryan', email: 'GarrettR@morissette.com', age: 29 },
    { firstName: 'Raul', lastName: 'Witting', email: 'hRogahn@kilback.biz', age: 24 },
];

let listEmailsOver40 = people.filter((person) => {
    return person.age >= 40;
})

console.log(listEmailsOver40);

let listFullNamesOver40 = people
    .filter((person) => {
        return person.age >= 40;
    })
    .map((person) => {
        return `${person.firstName} ${person.lastName}`;
    });

console.log(listFullNamesOver40);
