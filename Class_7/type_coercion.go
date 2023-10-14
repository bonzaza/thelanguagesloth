package main


import "fmt"

func main() {
    var x int = 42;
    var y float32 = 1.5;

    fmt.Println("Value %v", x-y); // compile error
    fmt.Println("Value %v", x-y);
}
