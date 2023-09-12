package main

import (
	"fmt"
	"greeter/greeter"
)

func main() {
	var name string

	fmt.Print("Enter your name: ")
	fmt.Scanln(&name)

	provider, err := greeter.NewGreeterProvider(name)

	if err != nil {
		panic(err)
	}

	provider.Greet()
}
