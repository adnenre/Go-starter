---
title: Timeouts
sidebar:
  order: 7
  label: 9.7 Timeouts
---

## Context

You can implement timeouts using `select` with `time.After`. If a channel operation doesn't complete within the timeout, the `time.After` case will execute.

## Example

Wait for a channel that never sends, with a 1‑second timeout.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan string)
    go func() {
        time.Sleep(2 * time.Second)
        ch <- "result"
    }()

    select {
    case res := <-ch:
        fmt.Println(res)
    case <-time.After(1 * time.Second):
        fmt.Println("timeout")
    }
}
```

## Output

```bash
timeout
```

## Useful links

- [Go by Example: Timeouts](https://gobyexample.com/timeouts)
- [time.After documentation](https://pkg.go.dev/time#After)
