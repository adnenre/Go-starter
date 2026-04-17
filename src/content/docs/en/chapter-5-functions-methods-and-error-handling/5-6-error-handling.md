---
title: Error handling
sidebar:
  order: 6
  label: 5.6 Error handling
---

## Context

Go uses explicit error handling. Functions that can fail return an `error` as the last return value. Callers must check the error. The `errors` package provides `errors.New` to create simple error messages, and `fmt.Errorf` allows formatting.

## Example

A function that divides two integers, returning an error for division by zero.

## Code example

```go
package main

import (
    "errors"
    "fmt"
)

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }

    result, err = divide(5, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}
```

## Output

```bash
Result: 5
Error: division by zero
```

## Useful links

- [Go by Example: Errors](https://gobyexample.com/errors)
- [Go blog: Error handling and Go](https://go.dev/blog/error-handling-and-go)
