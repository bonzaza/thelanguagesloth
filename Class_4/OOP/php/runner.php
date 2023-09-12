<?php

declare(strict_types=1);

require_once __DIR__ . '/GreeterProvider.php';

print("Enter your name: ");
$stdin = fopen('php://stdin', 'r');
$name = trim(fgets($stdin));
fclose($stdin);

$greeter = new GreeterProvider($name);
$greeter->greet();

$greeter->setGreeter(new TextGreeter());
$greeter->greet();
