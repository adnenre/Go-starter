---
title: Stateful goroutines
sidebar:
  order: 18
  label: 9.18 Stateful goroutines
---

## Context

Instead of using mutexes, you can manage state by sending commands to a single goroutine that owns the state (actor model). This leverages channels and is often more idiomatic.

## Example

A stateful goroutine that maintains a map, accessible via channels.

## Code example

```go
package main

import "fmt"

type readOp struct {
    key  int
    resp chan int
}
type writeOp struct {
    key  int
    val  int
    resp chan bool
}

func main() {
    reads := make(chan readOp)
    writes := make(chan writeOp)

    // Stateful goroutine
    go func() {
        state := make(map[int]int)
        for {
            select {
            case read := <-reads:
                read.resp <- state[read.key]
            case write := <-writes:
                state[write.key] = write.val
                write.resp <- true
            }
        }
    }()

    // Perform 1000 reads and writes
    for i := 0; i < 1000; i++ {
        go func() {
            resp := make(chan int)
            reads <- readOp{key: i, resp: resp}
            <-resp
        }()
        go func() {
            resp := make(chan bool)
            writes <- writeOp{key: i, val: i, resp: resp}
            <-resp
        }()
    }
    fmt.Println("Done")
}
```

## Output

```bash
Done
```

## Useful links

- [Go by Example: Stateful Goroutines](https://gobyexample.com/stateful-goroutines)
- [Go concurrency patterns: Share memory by communicating](https://go.dev/blog/codelab-share)
