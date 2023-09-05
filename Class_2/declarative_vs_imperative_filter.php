<?php

function imperativeFilterGreaterThan(int $limit, array $numbers): array
{
    $result = [];

    foreach ($numbers as $number) {
        if ($number > $limit) {
            $result[] = $number;
        }
    }

    return $result;
}

function declarativeFilterGreaterThan(int $limit, array $numbers): array
{
    return array_filter($numbers, function ($number) use ($limit) {
        return $number > $limit;
    });
}

$numbers = [1, 5, 8, 3, 2, 42];
var_dump(imperativeFilterGreaterThan(5, $numbers));
var_dump(declarativeFilterGreaterThan(5, $numbers));
