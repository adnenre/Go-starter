---
title: Rate limiting
sidebar:
  order: 15
  label: 9.15 Rate limiting
---

## Context

Rate limiting controls the frequency of operations. The `time.Ticker` or `time.After` can be used to implement rate limiting (e.g., limit to one request per second).

## Example

Process a slice of requests at 1 per second.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    requests := make(chan int, 5)
    for i := 1; i <= 5; i++ {
        requests <- i
    }
    close(requests)

    limiter := time.Tick(200 * time.Millisecond) // 5 per second

    for req := range requests {
        <-limiter
        fmt.Println("request", req, time.Now())
    }
}
```

## Output (timestamps will be spaced 200ms apart)

```bash
request 1 2025-01-01 12:00:00.000 +0000 UTC
request 2 2025-01-01 12:00:00.200 +0000 UTC
request 3 2025-01-01 12:00:00.400 +0000 UTC
request 4 2025-01-01 12:00:00.600 +0000 UTC
request 5 2025-01-01 12:00:00.800 +0000 UTC
```

## Useful links

- [Go by Example: Rate Limiting](https://gobyexample.com/rate-limiting)
- [time.Tick documentation](https://pkg.go.dev/time#Tick)
