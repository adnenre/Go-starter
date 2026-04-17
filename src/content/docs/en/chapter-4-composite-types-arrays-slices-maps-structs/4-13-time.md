---
title: Time
sidebar:
  order: 13
  label: 4.13 Time
---

## Context

The `time` package provides functions for measuring and displaying time. Use `time.Now()` for current time, `time.Sleep` for delays, and `time.Timer` for scheduled events.

## Example

Get current time, add durations, and measure execution.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    now := time.Now()
    fmt.Println("Now:", now)

    later := now.Add(2 * time.Hour)
    fmt.Println("In 2 hours:", later)

    start := time.Now()
    time.Sleep(100 * time.Millisecond)
    elapsed := time.Since(start)
    fmt.Println("Elapsed:", elapsed)
}
```

## Output (example)

```bash
Now: 2025-03-15 10:30:00.123456789 +0000 UTC
In 2 hours: 2025-03-15 12:30:00.123456789 +0000 UTC
Elapsed: 100.123456ms
```

## Useful links

- [time package documentation](https://pkg.go.dev/time)
- [Go by Example: Time](https://gobyexample.com/time)
