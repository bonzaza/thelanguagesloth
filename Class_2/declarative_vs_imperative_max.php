<?php

function findMax(array $numbers): int
{
    $max = array_shift($numbers);

    foreach ($numbers as $number) {
        if ($number > $max) {
            $max = $number;
        }
    }

    return $max;
}

$numbers = [1, 5, 8, 3, 2];
var_dump(findMax($numbers)); // imperative when we look at the function's definition
var_dump(max($numbers)); // declarative with a built-in function
