---
title: Channel directions
sidebar:
  order: 5
  label: 9.5 Channel directions
---

## Context

When using channels as function parameters, you can specify direction: `chan<- T` (send‑only) or `<-chan T` (receive‑only). This improves type safety.

## Example

Pass a send‑only channel to a producer and a receive‑only channel to a consumer.

## Code example

```go
package main

import "fmt"

func producer(out chan<- int) {
    for i := 0; i < 3; i++ {
        out <- i
    }
    close(out)
}

func consumer(in <-chan int) {
    for v := range in {
        fmt.Println(v)
    }
}

func main() {
    ch := make(chan int)
    go producer(ch)
    consumer(ch)
}
```

## Output

```bash
0
1
2
```

## Useful links

- [Go spec: Channel types](https://go.dev/ref/spec#Channel_types)
- [Go by Example: Channel Directions](https://gobyexample.com/channel-directions)
