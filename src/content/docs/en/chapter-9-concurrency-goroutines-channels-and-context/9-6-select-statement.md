---
title: Select statement
sidebar:
  order: 6
  label: 9.6 Select statement
---

## Context

The `select` statement lets a goroutine wait on multiple channel operations. It blocks until one of its cases can proceed. If multiple are ready, one is chosen at random.

## Example

Wait on two channels and print whichever receives first.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "one"
    }()
    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "two"
    }()

    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println("Received", msg1)
        case msg2 := <-ch2:
            fmt.Println("Received", msg2)
        }
    }
}
```

## Output

```bash
Received one
Received two
```

## Useful links

- [Go spec: Select statements](https://go.dev/ref/spec#Select_statements)
- [Go by Example: Select](https://gobyexample.com/select)
