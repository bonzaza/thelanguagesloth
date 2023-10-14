package main

import "fmt"

func main() {
    fmt.Println(4 + "2") // compile error
    fmt.Println(4 * "2")
    fmt.Println(4 + true)
    fmt.Println(false - 4)
}
