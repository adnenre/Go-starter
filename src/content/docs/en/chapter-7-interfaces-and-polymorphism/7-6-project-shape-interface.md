---
title: Project Shape interface
sidebar:
  order: 6
  label: 7.6 Project Shape interface
---

## Context

Build a program that defines a `Shape` interface with methods `Area()` and `Perimeter()`. Implement concrete types `Circle`, `Rectangle`, and `Triangle`. Then write a function that prints the details of any shape.

This project demonstrates:

- Interface declaration and implementation
- Polymorphism via interfaces
- Method definitions on structs

## Step‑by‑step code

```go
package main

import (
    "fmt"
    "math"
)

// Shape interface
type Shape interface {
    Area() float64
    Perimeter() float64
}

// Circle
type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * math.Pi * c.Radius
}

// Rectangle
type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

// Triangle (equilateral)
type Triangle struct {
    Side float64
}

func (t Triangle) Area() float64 {
    return (math.Sqrt(3) / 4) * t.Side * t.Side
}

func (t Triangle) Perimeter() float64 {
    return 3 * t.Side
}

// Function that works with any Shape
func printShapeInfo(s Shape) {
    fmt.Printf("Area: %.2f, Perimeter: %.2f\n", s.Area(), s.Perimeter())
}

func main() {
    shapes := []Shape{
        Circle{Radius: 5},
        Rectangle{Width: 4, Height: 7},
        Triangle{Side: 3},
    }

    for _, s := range shapes {
        printShapeInfo(s)
    }
}
```

## Output

```bash
Area: 78.54, Perimeter: 31.42
Area: 28.00, Perimeter: 22.00
Area: 3.90, Perimeter: 9.00
```

## Useful links

- [Go by Example: Interfaces](https://gobyexample.com/interfaces)
- [Effective Go: Interfaces](https://go.dev/doc/effective_go#interfaces)
