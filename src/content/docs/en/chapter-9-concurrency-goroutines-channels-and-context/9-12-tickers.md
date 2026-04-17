---
title: Tickers
sidebar:
  order: 12
  label: 9.12 Tickers
---

## Context

A `time.Ticker` sends periodic events on its channel. Use `Stop()` to stop the ticker and release resources.

## Example

Create a ticker that ticks every 500ms.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ticker := time.NewTicker(500 * time.Millisecond)
    done := make(chan bool)

    go func() {
        for i := 0; i < 3; i++ {
            fmt.Println(<-ticker.C)
        }
        done <- true
    }()

    <-done
    ticker.Stop()
    fmt.Println("Ticker stopped")
}
```

## Output (example timestamps vary)

```bash
2025-01-01 12:00:00.123 +0000 UTC
2025-01-01 12:00:00.623 +0000 UTC
2025-01-01 12:00:01.123 +0000 UTC
Ticker stopped
```

## Useful links

- [time.Ticker documentation](https://pkg.go.dev/time#Ticker)
- [Go by Example: Tickers](https://gobyexample.com/tickers)
