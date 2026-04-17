---
title: Signals
sidebar:
  order: 20
  label: 9.20 Signals
---

## Context

The `os/signal` package allows Go programs to receive Unix signals (e.g., SIGINT, SIGTERM). This is used for graceful shutdown.

## Example

Catch `Ctrl+C` and print a message before exiting.

## Code example

```go
package main

import (
    "fmt"
    "os"
    "os/signal"
    "syscall"
)

func main() {
    sigs := make(chan os.Signal, 1)
    signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)

    fmt.Println("Waiting for signal...")
    s := <-sigs
    fmt.Println("Received signal:", s)
}
```

## Output (press Ctrl+C)

```bash
Waiting for signal...
^CReceived signal: interrupt
```

## Useful links

- [os/signal package](https://pkg.go.dev/os/signal)
- [Go by Example: Signals](https://gobyexample.com/signals)
