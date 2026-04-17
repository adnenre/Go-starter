---
title: Project Geometry Calculator
sidebar:
  order: 10
  label: 5.10 Project Geometry Calculator
---

## Context

Build a command‑line program that calculates area and perimeter for different shapes (circle, rectangle, triangle). Use methods, error handling, and user input.

This project combines:

- Structs and methods
- Error handling (custom errors)
- User input loops
- Switch statements

## Step‑by‑step code

```go
package main

import (
    "bufio"
    "fmt"
    "math"
    "os"
    "strconv"
    "strings"
)

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

// Triangle (assuming equilateral for simplicity)
type Triangle struct {
    Side float64
}

func (t Triangle) Area() float64 {
    return (math.Sqrt(3) / 4) * t.Side * t.Side
}

func (t Triangle) Perimeter() float64 {
    return 3 * t.Side
}

func main() {
    reader := bufio.NewReader(os.Stdin)

    fmt.Println("Geometry Calculator")
    fmt.Println("Available shapes: circle, rectangle, triangle")
    fmt.Print("Enter shape: ")
    shape, _ := reader.ReadString('\n')
    shape = strings.TrimSpace(strings.ToLower(shape))

    switch shape {
    case "circle":
        fmt.Print("Enter radius: ")
        rStr, _ := reader.ReadString('\n')
        r, err := strconv.ParseFloat(strings.TrimSpace(rStr), 64)
        if err != nil || r <= 0 {
            fmt.Println("Invalid radius")
            return
        }
        c := Circle{Radius: r}
        fmt.Printf("Area: %.2f, Perimeter: %.2f\n", c.Area(), c.Perimeter())

    case "rectangle":
        fmt.Print("Enter width: ")
        wStr, _ := reader.ReadString('\n')
        w, err1 := strconv.ParseFloat(strings.TrimSpace(wStr), 64)
        fmt.Print("Enter height: ")
        hStr, _ := reader.ReadString('\n')
        h, err2 := strconv.ParseFloat(strings.TrimSpace(hStr), 64)
        if err1 != nil || err2 != nil || w <= 0 || h <= 0 {
            fmt.Println("Invalid dimensions")
            return
        }
        rect := Rectangle{Width: w, Height: h}
        fmt.Printf("Area: %.2f, Perimeter: %.2f\n", rect.Area(), rect.Perimeter())

    case "triangle":
        fmt.Print("Enter side length: ")
        sStr, _ := reader.ReadString('\n')
        s, err := strconv.ParseFloat(strings.TrimSpace(sStr), 64)
        if err != nil || s <= 0 {
            fmt.Println("Invalid side length")
            return
        }
        t := Triangle{Side: s}
        fmt.Printf("Area: %.2f, Perimeter: %.2f\n", t.Area(), t.Perimeter())

    default:
        fmt.Println("Unknown shape")
    }
}
```

## Example interaction

```bash
Geometry Calculator
Available shapes: circle, rectangle, triangle
Enter shape: circle
Enter radius: 5
Area: 78.54, Perimeter: 31.42
```

## Another example

```bash
Enter shape: rectangle
Enter width: 4
Enter height: 7
Area: 28.00, Perimeter: 22.00
```

## Useful links

- [Math package](https://pkg.go.dev/math)
- [Strconv package](https://pkg.go.dev/strconv)
- [Bufio package](https://pkg.go.dev/bufio)
