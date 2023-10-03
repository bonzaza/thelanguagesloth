<?php

declare(strict_types=1);

namespace Examples\Strategy;

class NumberList
{
    private array $numbers;

    private SortStrategy $strategy;

    public function __construct(array $numbers)
    {
        $this->initNumbers($numbers);
        $this->initSort();
    }

    private function initNumbers(array $numbers): void
    {
        array_map(function ($number) {
            if (!is_numeric($number)) {
                throw new \RuntimeException('The ' . $number . ' is not numeric.');
            }
        }, $numbers);

        $this->numbers = $numbers;
    }

    private function initSort(): void
    {
        $this->strategy = new AscendingSortStrategy();
    }

    /**
     * Retrieve a list for the further usage
     */
    public function list(): array
    {
        return $this->strategy->sort($this->numbers);
    }

    public function setSort(SortStrategy $sort): void
    {
        $this->strategy = $sort;
    }
}
