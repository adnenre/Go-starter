---
title: Methods
sidebar:
  order: 5
  label: 5.5 Methods
---

## Context

Go does not have classes, but you can define methods on types. A method is a function with a special **receiver** argument. The receiver can be a value or a pointer. Methods allow you to associate behavior with custom types.

## Example

Define a `Rectangle` struct and methods to calculate area and perimeter.

## Code example

```go
package main

import "fmt"

type Rectangle struct {
    Width, Height float64
}

// Value receiver (does not modify the original)
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// Pointer receiver (can modify the struct)
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    fmt.Println("Area:", rect.Area())

    rect.Scale(2)
    fmt.Println("After scaling, area:", rect.Area())
}
```

## Output

```bash
Area: 50
After scaling, area: 200
```

## Useful links

- [Go by Example: Methods](https://gobyexample.com/methods)
- [Go spec: Method declarations](https://go.dev/ref/spec#Method_declarations)
