<?php

declare(strict_types=1);

/**
 * @param int $sumOfVotes
 * @param int $numberOfVotes
 * @return float
 */
function calculateAverageRating(int $sumOfVotes, int $numberOfVotes): float
{
    return $sumOfVotes / $numberOfVotes;
}

print(calculateAverageRating(10, 4));
