---
title: Atomic counters
sidebar:
  order: 16
  label: 9.16 Atomic counters
---

## Context

The `sync/atomic` package provides low‑level atomic memory operations for integers and pointers. Use them to increment counters without locks.

## Example

Increment a counter from multiple goroutines using `atomic.AddUint64`.

## Code example

```go
package main

import (
    "fmt"
    "sync"
    "sync/atomic"
)

func main() {
    var counter uint64
    var wg sync.WaitGroup

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            atomic.AddUint64(&counter, 1)
            wg.Done()
        }()
    }
    wg.Wait()
    fmt.Println("counter:", counter)
}
```

## Output

```bash
counter: 1000
```

## Useful links

- [sync/atomic documentation](https://pkg.go.dev/sync/atomic)
- [Go by Example: Atomic Counters](https://gobyexample.com/atomic-counters)
