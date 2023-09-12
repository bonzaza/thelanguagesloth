<?php

declare(strict_types=1);

class MarkDownGreeter extends HtmlGreeter
{
    const MAX_HEADING_LEVEL = 6;
    const MIN_HEADING_LEVEL = 1;
    const DEFAULT_HEADING_LEVEL = 3;

    public function greet(string $name): void
    {
        print $this->generatePrefix()
            . self::WELCOME_MESSAGE
            . $name;
    }

    private function generatePrefix(): string
    {
        return str_repeat('#', $this->identifyHeadingLevel()) . ' ';
    }

    private function identifyHeadingLevel(): int
    {
        $level = (int)filter_var(self::DEFAULT_TAG, FILTER_SANITIZE_NUMBER_INT);

        return ($level >= self::MIN_HEADING_LEVEL && $level <= self::MAX_HEADING_LEVEL)
            ? $level
            : self::DEFAULT_HEADING_LEVEL;
    }
}
