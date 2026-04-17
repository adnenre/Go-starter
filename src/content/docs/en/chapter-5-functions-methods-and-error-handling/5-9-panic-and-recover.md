---
title: Panic and recover
sidebar:
  order: 9
  label: 5.9 Panic and recover
---

## Context

- `panic` stops normal execution, runs deferred functions, then terminates the program. It is used for unrecoverable errors.
- `recover` regains control after a panic. It must be called inside a deferred function. If the program is panicking, `recover` returns the panic value; otherwise it returns `nil`.

## Example

Catch a panic and prevent program termination.

## Code example

```go
package main

import "fmt"

func mayPanic() {
    panic("something went wrong")
}

func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()

    fmt.Println("Before panic")
    mayPanic()
    fmt.Println("This line will not be executed")
}
```

## Output

```bash
Before panic
Recovered from panic: something went wrong
```

## Useful links

- [Go by Example: Panic](https://gobyexample.com/panic) and [Recover](https://gobyexample.com/recover)
- [Go spec: Handling panics](https://go.dev/ref/spec#Handling_panics)
