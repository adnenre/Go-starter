---
title: Non blocking channel operations
sidebar:
  order: 8
  label: 9.8 Non blocking channel operations
---

## Context

A `select` with a `default` case allows non‑blocking sends and receives. If no channel operation is ready, the `default` case executes immediately.

## Example

Try to receive from a channel without blocking.

## Code example

```go
package main

import "fmt"

func main() {
    ch := make(chan string)

    select {
    case msg := <-ch:
        fmt.Println("received", msg)
    default:
        fmt.Println("no message received")
    }

    // Non‑blocking send
    select {
    case ch <- "hello":
        fmt.Println("sent")
    default:
        fmt.Println("send would block")
    }
}
```

## Output

```bash
no message received
send would block
```

## Useful links

- [Go by Example: Non-Blocking Channel Operations](https://gobyexample.com/non-blocking-channel-operations)
- [Select with default](https://go.dev/ref/spec#Select_statements)
