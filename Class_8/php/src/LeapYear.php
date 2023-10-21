<?php

namespace Katas;

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
class LeapYear
{
    private int $year;

    public function __construct(int $year)
    {
        $this->year = $year;
    }

    public function isLeapYear(): bool
    {
        if ($this->isDivisibleBy(4) && $this->isDivisibleBy(100) && !$this->isDivisibleBy(400)) {
            return false;
        }

        return $this->isDivisibleBy(4);
    }

    protected function isDivisibleBy(int $i): bool
    {
        return $this->year % $i === 0;
    }
}
