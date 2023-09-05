<?php

declare(strict_types=1);

class CLIGreeter implements GreeterInterface
{
    public function greet(string $name): void
    {
        print 'Greet you ' . $name . PHP_EOL;
    }
}
