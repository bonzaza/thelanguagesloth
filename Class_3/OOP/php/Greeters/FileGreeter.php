<?php

declare(strict_types=1);

class FileGreeter implements GreeterInterface
{
    const OUTPUT_FILE_PATH = __DIR__ . '/greet.txt';

    private string $file;

    public function __construct(string $file = '')
    {
        $this->file = (trim($file) !== '') ? $file : self::OUTPUT_FILE_PATH;
    }

    public function greet(string $name): void
    {
        $message = 'Greet you ' . $name . PHP_EOL;
        file_put_contents($this->file, $message);
    }
}
