// LeapYear rules < https://www.youtube.com/watch?v=sKYX40ltQZM
//
// All the following rules must be satisfied:
// - is NOT a leap year if NOT divisible by 4
// - is a leap year if divisible by 4
// - is a leap year if divisible by 400
// - is NOT a leap year if divisible by 100 but NOT by 400
//
// Examples: 1997 is not a leap year  (not divisible by 4)
//           1996 is a leap year      (divisible by 4)
//           1600 is a leap year      (divisible by 400)
//           1800 is not a leap year  (divisible by 4 and by 100, but NOT by 400)
function isLeapYear(year) {
  if (isInordinaryLeapYear(year)) {
    return false;
  }

  return isOrdinaryLeapYear(year);

  function isInordinaryLeapYear(year) {
    return year % 4 === 0 && year % 100 === 0 && year % 400 !== 0;
  }

  function isOrdinaryLeapYear(year) {
    return year % 4 === 0 || year % 400 === 0;
  }
}

module.exports = isLeapYear;
