package greeters

import "fmt"

type CliGreeter struct {
}

func (_ CliGreeter) Greet(name string) {
	fmt.Println("Greet you", name)
}
