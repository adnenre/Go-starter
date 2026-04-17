---
title: Defer
sidebar:
  order: 8
  label: 3.8 Defer
---

## Context

The `defer` statement postpones the execution of a function until the surrounding function returns (after a `return` or when `panic` occurs). Deferred calls are stacked and executed in LIFO order (last in, first out).

Typical uses: closing files, releasing locks, cleanup.

## Example

Demonstrate the order of `defer` execution and their usefulness.

## Code example

```go
package main

import "fmt"

func main() {
    fmt.Println("start")

    // Deferred calls are stacked
    defer fmt.Println("first defer (executed last)")
    defer fmt.Println("second defer")
    defer fmt.Println("third defer (executed first)")

    fmt.Println("end of function")
    // Deferred calls execute here, after implicit return
}
```

## Output

```bash
start
end of function
third defer (executed first)
second defer
first defer (executed last)
```

## Real use: file closing

```go
f, err := os.Open("file.txt")
if err != nil {
    return err
}
defer f.Close() // guaranteed closure
```

## Useful links

- [Go spec: Defer statements](https://go.dev/ref/spec#Defer_statements)
- [Go by Example: Defer](https://gobyexample.com/defer)
