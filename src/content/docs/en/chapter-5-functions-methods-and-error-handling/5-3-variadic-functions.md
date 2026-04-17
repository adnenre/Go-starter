---
title: Variadic functions
sidebar:
  order: 3
  label: 5.3 Variadic functions
---

## Context

Variadic functions accept a variable number of arguments. The last parameter is declared with `...T`, and inside the function it behaves as a slice of type `[]T`.

## Example

Write a variadic function that sums any number of integers.

## Code example

```go
package main

import "fmt"

func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

func main() {
    fmt.Println(sum(1, 2, 3))
    fmt.Println(sum(4, 5, 6, 7))

    // Passing a slice to a variadic function
    nums := []int{10, 20, 30}
    fmt.Println(sum(nums...))
}
```

## Output

```bash
6
22
60
```

## Useful links

- [Go by Example: Variadic Functions](https://gobyexample.com/variadic-functions)
- [Go spec: Function types (variadic)](https://go.dev/ref/spec#Function_types)
