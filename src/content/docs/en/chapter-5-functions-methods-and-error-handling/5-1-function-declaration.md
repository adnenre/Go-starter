---
title: Function declaration
sidebar:
  order: 1
  label: 5.1 Function declaration
---

## Context

Functions in Go are declared with the `func` keyword, followed by the function name, parameters (with types), and return types (if any). Parameters and return types are mandatory. Go functions can return multiple values.

## Example

Declare a simple function that adds two integers.

## Code example

```go
package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

// Parameters of the same type can be combined
func multiply(a, b int) int {
    return a * b
}

func main() {
    sum := add(5, 3)
    product := multiply(4, 2)
    fmt.Println("Sum:", sum)
    fmt.Println("Product:", product)
}
```

## Output

```bash
Sum: 8
Product: 8
```

## Useful links

- [Go spec: Function declarations](https://go.dev/ref/spec#Function_declarations)
- [Go by Example: Functions](https://gobyexample.com/functions)
