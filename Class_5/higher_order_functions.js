let sorter = (list, sort) => { // first-class citizens
    return sort(list);
};

function sort_people_ascending(list) {
   return list.sort((a, b) => {
       return a.age - b.age;
   })
}

function sort_people_descending(list) {
    return list.sort((a, b) => {
        return b.age - a.age;
    });
}

function locate_sorter(order) {
    if (order === 'asc') {
        return sort_people_ascending;
    }

    return sort_people_descending;
}

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
]

console.log(sorter(people, sort_people_ascending))
console.log(sorter(people, sort_people_descending));

console.log(sorter(people, locate_sorter('asc')));
console.log(locate_sorter('desc')); // returns a function
