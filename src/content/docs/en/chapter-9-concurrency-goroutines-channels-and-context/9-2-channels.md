---
title: Channels
sidebar:
  order: 2
  label: 9.2 Channels
---

## Context

Channels are typed conduits that allow goroutines to communicate and synchronize. You send a value into a channel using `ch <- v` and receive a value using `v := <-ch`. By default, channels are unbuffered: sends block until a receiver is ready, and vice versa.

## Example

Create a channel and pass a value between two goroutines.

## Code example

```go
package main

import "fmt"

func main() {
    ch := make(chan string)

    go func() {
        ch <- "ping"
    }()

    msg := <-ch
    fmt.Println(msg)
}
```

## Output

```bash
ping
```

## Useful links

- [Go spec: Channel types](https://go.dev/ref/spec#Channel_types)
- [Go by Example: Channels](https://gobyexample.com/channels)
