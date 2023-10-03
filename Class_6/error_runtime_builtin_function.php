<?php

function splitString($str): array
{
    return preg_split('/r/iSu', $str);
}

var_dump(splitString('string'));
var_dump(splitString([42]));
