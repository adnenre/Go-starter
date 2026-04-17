---
title: Time formatting and parsing
sidebar:
  order: 15
  label: 4.15 Time formatting and parsing
---

## Context

Go uses a **reference time** `Mon Jan 2 15:04:05 MST 2006` to format/parse. Use `time.Format` and `time.Parse` with this layout.

## Example

Format a time and parse a string.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    t := time.Date(2025, 3, 15, 14, 30, 0, 0, time.UTC)
    fmt.Println(t.Format("2006-01-02 15:04:05"))
    fmt.Println(t.Format("Monday, 02-Jan-06 03:04 PM"))

    parsed, _ := time.Parse("2006-01-02", "2025-12-25")
    fmt.Println(parsed)
}
```

## Output

```bash
2025-03-15 14:30:00
Saturday, 15-Mar-25 02:30 PM
2025-12-25 00:00:00 +0000 UTC
```

## Useful links

- [time.Format documentation](https://pkg.go.dev/time#Time.Format)
- [Go by Example: Time Formatting](https://gobyexample.com/time-formatting-parsing)
