package main

import (
    "fmt"
    "reflect"
)

func main() {
    var i int = 'c' // no compile error
    fmt.Println(i)
    fmt.Println(reflect.TypeOf(i))

    i = 42.e4 // 42.e32 causes compilation error
    fmt.Println(i)
    fmt.Println(reflect.TypeOf(i))

    //i = "lol" // cannot change type (causes compilation error)
    //fmt.Println(i)
}
