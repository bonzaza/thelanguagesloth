<?php

declare(strict_types=1);

namespace Examples\Strategy;

interface SortStrategy
{
    public function sort(array $numbers): array;
}
