<?php

declare(strict_types=1);

namespace Examples\Strategy;

class AscendingSortStrategy implements SortStrategy
{
    public function sort(array $numbers): array
    {
        sort($numbers, SORT_ASC);

        return $numbers;
    }
}
