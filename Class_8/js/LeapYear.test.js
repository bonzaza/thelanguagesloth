const isLeapYear = require('./LeapYear');

describe('LeapYear test suite', () => {
    test('it is not a leap year if not divisible by 4', () => {
        expect(isLeapYear(1997)).toBe(false);
    })

    test('it is a leap year if divisible by 4', () => {
        expect(isLeapYear(1996)).toBe(true);
    });

    test('it is a leap year if divisible by 400', () => {
        expect(isLeapYear(1600)).toBe(true);
    });

    test('it is not a leap year if divisible by 100 but not by 400', () => {
        expect(isLeapYear(1800)).toBe(false);
    })
});
