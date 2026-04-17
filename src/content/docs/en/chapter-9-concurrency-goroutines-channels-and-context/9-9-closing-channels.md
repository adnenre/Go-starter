---
title: Closing channels
sidebar:
  order: 9
  label: 9.9 Closing channels
---

## Context

You can close a channel with `close(ch)`. Receivers can test whether a channel is closed using the comma‑ok idiom: `v, ok := <-ch`. Sending on a closed channel causes a panic.

## Example

Close a channel and detect the closure.

## Code example

```go
package main

import "fmt"

func main() {
    ch := make(chan int, 2)
    ch <- 1
    ch <- 2
    close(ch)

    for i := 0; i < 3; i++ {
        v, ok := <-ch
        fmt.Printf("value=%d, ok=%t\n", v, ok)
    }
}
```

## Output

```bash
value=1, ok=true
value=2, ok=true
value=0, ok=false
```

## Useful links

- [Go spec: Close](https://go.dev/ref/spec#Close)
- [Go by Example: Closing Channels](https://gobyexample.com/closing-channels)
