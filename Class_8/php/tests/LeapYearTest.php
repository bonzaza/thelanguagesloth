<?php

namespace Katas\Tests;

use Katas\LeapYear;
use PHPUnit\Framework\TestCase;

class LeapYearTest extends TestCase
{
    /** @test */
    public function it_is_not_a_leap_year_if_not_divisible_by_4()
    {
        $year = new LeapYear(1997);

        $this->assertFalse($year->isLeapYear());
    }

    /** @test */
    public function it_is_a_leap_year_if_divisible_by_4()
    {
        $year = new LeapYear(1996);

        $this->assertTrue($year->isLeapYear());
    }

    /** @test */
    public function it_is_a_leap_year_if_divisible_by_400()
    {
        $year = new LeapYear(1600);

        $this->assertTrue($year->isLeapYear());
    }
    
    /** @test */
    public function it_is_not_a_leap_year_if_divisible_by_100_but_not_by_400()
    {
        $year = new LeapYear(1800);

        $this->assertFalse($year->isLeapYear());
    }
}
