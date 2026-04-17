---
title: Timers
sidebar:
  order: 11
  label: 9.11 Timers
---

## Context

A `time.Timer` represents a single event in the future. You can wait for it on its channel (`<-timer.C`) or stop it before it fires.

## Example

Create a timer that fires after 2 seconds.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    timer := time.NewTimer(2 * time.Second)
    fmt.Println("Waiting...")
    <-timer.C
    fmt.Println("Timer fired")

    // Stopping a timer
    timer2 := time.NewTimer(1 * time.Second)
    stop := timer2.Stop()
    if stop {
        fmt.Println("Timer2 stopped before firing")
    }
}
```

## Output

```bash
Waiting...
Timer fired
Timer2 stopped before firing
```

## Useful links

- [time.Timer documentation](https://pkg.go.dev/time#Timer)
- [Go by Example: Timers](https://gobyexample.com/timers)
