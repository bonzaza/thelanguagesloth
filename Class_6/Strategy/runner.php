<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Examples\Strategy\DescendingSortStrategy;
use Examples\Strategy\NumberList;

$numbers = [ 2, 4, 8, 42 ];

$collection = new NumberList($numbers);

var_dump($collection->list()); // sorted in the ascending order

$collection->setSort(new DescendingSortStrategy());

var_dump($collection->list()); // sorted in the descending order
