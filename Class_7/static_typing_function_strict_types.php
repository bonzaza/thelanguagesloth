<?php

declare(strict_types=1);

function convertToString(int $number): string
{
    var_dump($number);
    return 'the argument is ' . $number;
}

var_dump(convertToString(42));
var_dump(convertToString('42')); // coercion
var_dump(convertToString([1])); // compile error
var_dump(convertToString(new stdClass()));
