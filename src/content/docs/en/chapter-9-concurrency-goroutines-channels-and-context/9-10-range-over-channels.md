---
title: Range over channels
sidebar:
  order: 10
  label: 9.10 Range over channels
---

## Context

The `for range` loop can iterate over values sent on a channel until the channel is closed. This is a clean way to receive all values.

## Example

Send multiple values and use `range` to receive them.

## Code example

```go
package main

import "fmt"

func main() {
    ch := make(chan int, 3)
    ch <- 10
    ch <- 20
    ch <- 30
    close(ch)

    for v := range ch {
        fmt.Println(v)
    }
}
```

## Output

```bash
10
20
30
```

## Useful links

- [Go spec: For range with channels](https://go.dev/ref/spec#For_range)
- [Go by Example: Range over Channels](https://gobyexample.com/range-over-channels)
