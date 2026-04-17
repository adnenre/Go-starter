---
title: Panic and recover
sidebar:
  order: 9
  label: 3.9 Panic and recover
---

## Context

- `panic` stops normal execution, runs deferred functions, then the program terminates.
- `recover` is a built‑in function that regains control after a `panic`. It must be called inside a deferred function.

Use only for unrecoverable errors (e.g., inconsistent state). For normal errors, prefer the `error` return pattern.

## Example

Catch a panic and continue.

## Code example

```go
package main

import "fmt"

func main() {
    // Function that may panic
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from:", r)
        }
    }()

    fmt.Println("Before panic")
    panic("a serious error")
    fmt.Println("This will not be executed")
}
```

## Output

```bash
Before panic
Recovered from: a serious error
```

## Note

The program does not crash; it continues after `recover`. This can be useful for web servers (prevent a single request from crashing the whole server).

## Useful links

- [Go spec: Handling panics](https://go.dev/ref/spec#Handling_panics)
- [Go by Example: Panic](https://gobyexample.com/panic) and [Recover](https://gobyexample.com/recover)
