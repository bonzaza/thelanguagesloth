<?php

declare(strict_types=1);

/**
 * @param int $a is a sum of votes
 * @param int $b is a number of votes
 * @return float
 */
function calculate(int $a, int $b): float
{
    return $a / $b;
}

print(calculate(10, 4));
