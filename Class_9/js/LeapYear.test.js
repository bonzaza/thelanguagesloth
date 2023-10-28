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
    });

    describe('a batch of different years', () => {
        const differentYearsSet = [
            {year: 1600, expected: true},
            {year: 1800, expected: false},
            {year: 1802, expected: false},
            {year: 1804, expected: true},
            {year: 1808, expected: true},
            {year: 1812, expected: true},
            {year: 1816, expected: true},
            {year: 1820, expected: true},
            {year: 1824, expected: true},
            {year: 1828, expected: true},
            {year: 1832, expected: true},
            {year: 1836, expected: true},
            {year: 1840, expected: true},
            {year: 1844, expected: true},
            {year: 1848, expected: true},
            {year: 1852, expected: true},
            {year: 1856, expected: true},
            {year: 1860, expected: true},
            {year: 1864, expected: true},
            {year: 1868, expected: true},
            {year: 1872, expected: true},
            {year: 1876, expected: true},
            {year: 1880, expected: true},
            {year: 1884, expected: true},
            {year: 1888, expected: true},
            {year: 1892, expected: true},
            {year: 1896, expected: true},
            {year: 1900, expected: false},
            {year: 1904, expected: true},
            {year: 1908, expected: true},
            {year: 1912, expected: true},
            {year: 1916, expected: true},
            {year: 1920, expected: true},
            {year: 1924, expected: true},
            {year: 1928, expected: true},
            {year: 1932, expected: true},
            {year: 1936, expected: true},
            {year: 1940, expected: true},
            {year: 1944, expected: true},
            {year: 1948, expected: true},
            {year: 1952, expected: true},
            {year: 1956, expected: true},
            {year: 1960, expected: true},
            {year: 1964, expected: true},
            {year: 1968, expected: true},
            {year: 1972, expected: true},
            {year: 1976, expected: true},
            {year: 1980, expected: true},
            {year: 1984, expected: true},
            {year: 1988, expected: true},
            {year: 1992, expected: true},
            {year: 1996, expected: true},
            {year: 1997, expected: false},
            {year: 2000, expected: true},
            {year: 2004, expected: true},
            {year: 2008, expected: true},
            {year: 2012, expected: true},
            {year: 2016, expected: true},
            {year: 2020, expected: true},
            {year: 2024, expected: true},
        ];

        test.each(differentYearsSet)('it can identify a type of $year', ({year, expected}) => {
            expect(isLeapYear(year)).toBe(expected)
        });
    });
});
