---
title: Project Generic Filter Map Reduce
sidebar:
  order: 5
  label: 8.5 Project Generic Filter Map Reduce
---

## Context

Build a small library of generic higher‑order functions: `Filter`, `Map`, and `Reduce`. These are common functional programming utilities. Use type parameters and constraints.

This project demonstrates:

- Generic functions
- Function types as parameters
- Type inference

## Step‑by‑step code

```go
package main

import "fmt"

// Filter returns a new slice containing only elements for which pred returns true.
func Filter[T any](slice []T, pred func(T) bool) []T {
    result := make([]T, 0, len(slice))
    for _, v := range slice {
        if pred(v) {
            result = append(result, v)
        }
    }
    return result
}

// Map transforms each element of the slice using the transform function.
func Map[T, U any](slice []T, transform func(T) U) []U {
    result := make([]U, len(slice))
    for i, v := range slice {
        result[i] = transform(v)
    }
    return result
}

// Reduce combines the elements of the slice using the accumulator function.
func Reduce[T, U any](slice []T, initial U, accumulator func(U, T) U) U {
    result := initial
    for _, v := range slice {
        result = accumulator(result, v)
    }
    return result
}

func main() {
    nums := []int{1, 2, 3, 4, 5, 6}

    // Filter even numbers
    evens := Filter(nums, func(n int) bool { return n%2 == 0 })
    fmt.Println("Evens:", evens)

    // Map: square each number
    squares := Map(nums, func(n int) int { return n * n })
    fmt.Println("Squares:", squares)

    // Reduce: sum of all numbers
    sum := Reduce(nums, 0, func(acc, n int) int { return acc + n })
    fmt.Println("Sum:", sum)

    // Combine: sum of squares of even numbers
    result := Reduce(
        Filter(nums, func(n int) bool { return n%2 == 0 }),
        0,
        func(acc, n int) int { return acc + n*n },
    )
    fmt.Println("Sum of squares of evens:", result)
}
```

## Output

```bash
Evens: [2 4 6]
Squares: [1 4 9 16 25 36]
Sum: 21
Sum of squares of evens: 56
```

## Useful links

- [Go generics tutorial](https://go.dev/doc/tutorial/generics)
- [Functional programming in Go with generics](https://go.dev/blog/intro-generics)
