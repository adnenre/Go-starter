---
title: Context package
sidebar:
  order: 19
  label: 9.19 Context package
---

## Context

The `context` package provides a standard way to carry deadlines, cancellation signals, and request‑scoped values across API boundaries. It is especially useful for cancelling goroutines.

## Example

Use `context.WithCancel` to cancel a goroutine.

## Code example

```go
package main

import (
    "context"
    "fmt"
    "time"
)

func worker(ctx context.Context, id int) {
    for {
        select {
        case <-ctx.Done():
            fmt.Printf("Worker %d cancelled\n", id)
            return
        default:
            fmt.Printf("Worker %d working\n", id)
            time.Sleep(500 * time.Millisecond)
        }
    }
}

func main() {
    ctx, cancel := context.WithCancel(context.Background())
    go worker(ctx, 1)
    go worker(ctx, 2)

    time.Sleep(2 * time.Second)
    cancel() // stop all workers
    time.Sleep(500 * time.Millisecond)
}
```

## Output (example)

```bash
Worker 2 working
Worker 1 working
Worker 1 working
Worker 2 working
Worker 1 working
Worker 2 working
Worker 2 cancelled
Worker 1 cancelled
```

## Useful links

- [context package documentation](https://pkg.go.dev/context)
- [Go blog: Context](https://go.dev/blog/context)
