<?php

declare(strict_types=1);

require_once __DIR__ . '/Greeters/GreeterInterface.php';
require_once __DIR__ . '/Greeters/TextGreeter.php';
require_once __DIR__ . '/Greeters/HtmlGreeter.php';
require_once __DIR__ . '/Greeters/MarkDownGreeter.php';
require_once __DIR__ . '/Greeters/CLIGreeter.php';
require_once __DIR__ . '/Greeters/FileGreeter.php';

class GreeterProvider
{
    private string $name;

    private GreeterInterface $greeter; // polymorphic

    public function __construct(string $name)
    {
        $this->name = $name;

        $this->initGreeter();
    }

    private function initGreeter(): void
    {
        $this->greeter = $this->createGreeter();
    }

    private function createGreeter(): GreeterInterface
    {
        if ($this->isCommandLineInterface()) {
            return new CLIGreeter();
        }

        return new HtmlGreeter();
    }

    private function isCommandLineInterface(): bool
    {
        return (php_sapi_name() === 'cli');
    }

    public function greet(): void
    {
        $this->greeter->greet($this->name);
    }

    public function setGreeter(GreeterInterface $greeter): void // polymorphic
    {
        $this->greeter = $greeter;
    }
}
