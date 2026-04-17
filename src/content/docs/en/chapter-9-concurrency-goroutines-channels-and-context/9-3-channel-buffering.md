---
title: Channel buffering
sidebar:
  order: 3
  label: 9.3 Channel buffering
---

## Context

Buffered channels have a capacity. Sends to a buffered channel block only when the buffer is full; receives block when the buffer is empty. Use `make(chan T, capacity)`.

## Example

Send three values to a buffered channel without an immediate receiver.

## Code example

```go
package main

import "fmt"

func main() {
    ch := make(chan string, 2)
    ch <- "buffered"
    ch <- "channel"
    fmt.Println(<-ch)
    fmt.Println(<-ch)
}
```

## Output

```bash
buffered
channel
```

## Useful links

- [Go by Example: Channel Buffering](https://gobyexample.com/channel-buffering)
- [Go blog: Channels](https://go.dev/blog/pipelines)
