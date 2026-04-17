---
title: Epoch
sidebar:
  order: 14
  label: 4.14 Epoch
---

## Context

The Unix epoch is the number of seconds since January 1, 1970 UTC. Use `time.Unix` to convert to a `time.Time`, and `time.Time.Unix` to get the seconds.

## Example

Get the current epoch and convert.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    now := time.Now()
    epochSeconds := now.Unix()
    epochNanos := now.UnixNano()

    fmt.Println("Seconds since epoch:", epochSeconds)
    fmt.Println("Nanoseconds since epoch:", epochNanos)

    // Convert back
    t := time.Unix(epochSeconds, 0)
    fmt.Println("From seconds:", t)
}
```

## Output (example)

```bash
Seconds since epoch: 1742041800
Nanoseconds since epoch: 1742041800123456789
From seconds: 2025-03-15 10:30:00 +0000 UTC
```

## Useful links

- [time.Unix documentation](https://pkg.go.dev/time#Unix)
- [Go by Example: Epoch](https://gobyexample.com/epoch)
