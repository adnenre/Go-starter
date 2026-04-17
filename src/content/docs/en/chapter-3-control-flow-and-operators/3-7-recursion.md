---
title: Recursion
sidebar:
  order: 7
  label: 3.7 Recursion
---

## Context

A function can call itself: this is recursion. You must always have a **base case** to stop the calls, otherwise the stack will overflow.

Go handles recursion correctly but does not optimize tail recursion.

## Example

Compute factorial and Fibonacci sequence recursively.

## Code example

```go
package main

import "fmt"

func factorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorial(n-1)
}

func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

func main() {
    fmt.Println("factorial(5) =", factorial(5))
    fmt.Println("fibonacci(10) =", fibonacci(10))
}
```

## Output

```bash
factorial(5) = 120
fibonacci(10) = 55
```

## Useful links

- [Go by Example: Recursion](https://gobyexample.com/recursion)
- [Tour of Go: Recursion](https://go.dev/tour/flowcontrol/8)
