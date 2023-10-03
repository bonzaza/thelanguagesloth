<?php

declare(strict_types=1);

namespace Examples\Strategy;

class DescendingSortStrategy implements SortStrategy
{
    public function sort(array $numbers): array
    {
        rsort($numbers);

        return $numbers;
    }
}
