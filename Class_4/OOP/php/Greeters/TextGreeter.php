<?php

declare(strict_types=1);

class TextGreeter implements GreeterInterface
{
    const WELCOME_MESSAGE = 'Welcome ';

    public function greet(string $name): void
    {
        print self::WELCOME_MESSAGE . $name;
    }
}
