<?php

declare(strict_types=1);

class HtmlGreeter extends TextGreeter
{
    const DEFAULT_TAG = 'h2';

    public function greet(string $name): void
    {
        print $this->greetPrefix()
            . self::WELCOME_MESSAGE
            . $name
            . $this->greetSuffix();
    }

    private function greetPrefix(): string
    {
        return '<' . self::DEFAULT_TAG . '>';
    }

    private function greetSuffix(): string
    {
        return '</' . self::DEFAULT_TAG . '>';
    }
}
