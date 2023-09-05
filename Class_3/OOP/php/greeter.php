<?php

declare(strict_types=1);

require_once __DIR__ . '/GreeterProvider.php';

// an instantiation (create an instance)
$greeter = new GreeterProvider('iUser');
$greeter->greet();

// we can change the collaborator,
// and thus change the behavior
$greeter->setGreeter(new TextGreeter());
$greeter->greet();
