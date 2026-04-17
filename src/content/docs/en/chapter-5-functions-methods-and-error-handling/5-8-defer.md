---
title: Defer
sidebar:
  order: 8
  label: 5.8 Defer
---

## Context

The `defer` statement postpones the execution of a function until the surrounding function returns. It is commonly used for cleanup actions (closing files, unlocking mutexes). Multiple deferred calls are executed in LIFO (last‑in‑first‑out) order.

## Example

Use defer to close a file and to demonstrate LIFO order.

## Code example

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    // LIFO example
    defer fmt.Println("first deferred (executed last)")
    defer fmt.Println("second deferred")
    defer fmt.Println("third deferred (executed first)")

    // Practical: file closing
    file, err := os.Create("example.txt")
    if err != nil {
        fmt.Println("Error creating file")
        return
    }
    defer file.Close() // guaranteed to run before main returns

    file.WriteString("Hello, defer!")
    fmt.Println("File written")
}
```

## Output

```bash
File written
third deferred (executed first)
second deferred
first deferred (executed last)
```

## Useful links

- [Go by Example: Defer](https://gobyexample.com/defer)
- [Go spec: Defer statements](https://go.dev/ref/spec#Defer_statements)
