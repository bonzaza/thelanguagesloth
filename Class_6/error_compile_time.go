package main

import (
	"fmt"
    "strings"
)

func toUpper(str string) string {
	return strings.ToUpper(str)
}

func main() {
    fmt.Println(toUpper("string"))
    fmt.Println(toUpper(42))
}
