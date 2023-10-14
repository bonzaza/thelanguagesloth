<?php



function convertToString($number)
{
    var_dump($number);
    return 'the argument is ' . $number;
}

var_dump(convertToString(42));
var_dump(convertToString('42'));
var_dump(convertToString([1]));
var_dump(convertToString(new stdClass())); // runtime error
