package main

import (
    "fmt"
    "reflect"
)

func main() {
    i := "lol"
    fmt.Println(i)
    fmt.Println(reflect.TypeOf(i))

//     i = 42 // cannot change type (causes compilation error)
//     fmt.Println(i)
}
