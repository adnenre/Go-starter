---
title: Channel synchronization
sidebar:
  order: 4
  label: 9.4 Channel synchronization
---

## Context

You can use channels to synchronize execution between goroutines. A blocking receive can wait for a goroutine to finish.

## Example

Use a channel to wait for a goroutine to complete its work.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func worker(done chan bool) {
    fmt.Print("working...")
    time.Sleep(1 * time.Second)
    fmt.Println("done")
    done <- true
}

func main() {
    done := make(chan bool)
    go worker(done)
    <-done // wait
}
```

## Output

```bash
working...done
```

## Useful links

- [Go by Example: Channel Synchronization](https://gobyexample.com/channel-synchronization)
- [Go concurrency patterns](https://go.dev/blog/pipelines)
