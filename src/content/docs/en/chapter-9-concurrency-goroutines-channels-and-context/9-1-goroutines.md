---
title: Goroutines
sidebar:
  order: 1
  label: 9.1 Goroutines
---

## Context

A goroutine is a lightweight thread managed by the Go runtime. You start a goroutine by prefixing a function call with the keyword `go`. Goroutines are cheap (kilobytes of stack) and you can run thousands concurrently.

## Example

Start a goroutine that prints a message while the main function continues.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func sayHello() {
    fmt.Println("Hello from goroutine")
}

func main() {
    go sayHello()
    time.Sleep(100 * time.Millisecond) // give goroutine time to run
    fmt.Println("Hello from main")
}
```

## Output

```bash
Hello from goroutine
Hello from main
```

## Useful links

- [Go spec: Go statements](https://go.dev/ref/spec#Go_statements)
- [Go by Example: Goroutines](https://gobyexample.com/goroutines)
