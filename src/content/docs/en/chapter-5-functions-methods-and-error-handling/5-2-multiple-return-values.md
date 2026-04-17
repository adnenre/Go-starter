---
title: Multiple return values
sidebar:
  order: 2
  label: 5.2 Multiple return values
---

## Context

Go functions can return multiple values. This is commonly used to return a result along with an error. The return values can be named, which serves as documentation and automatically returns those variables.

## Example

Return quotient and remainder from division.

## Code example

```go
package main

import "fmt"

func divide(a, b int) (int, int) {
    quotient := a / b
    remainder := a % b
    return quotient, remainder
}

// Named return values
func split(sum int) (x, y int) {
    x = sum / 2
    y = sum - x
    return // naked return
}

func main() {
    q, r := divide(10, 3)
    fmt.Printf("10 / 3 = %d remainder %d\n", q, r)

    a, b := split(17)
    fmt.Printf("Split 17: %d and %d\n", a, b)
}
```

## Output

```bash
10 / 3 = 3 remainder 1
Split 17: 8 and 9
```

## Useful links

- [Go by Example: Multiple Return Values](https://gobyexample.com/multiple-return-values)
- [Go spec: Return statements](https://go.dev/ref/spec#Return_statements)
