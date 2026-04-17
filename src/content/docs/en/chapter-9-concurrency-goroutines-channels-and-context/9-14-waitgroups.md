---
title: WaitGroups
sidebar:
  order: 14
  label: 9.14 WaitGroups
---

## Context

`sync.WaitGroup` waits for a collection of goroutines to finish. Use `Add` to set the count, `Done` to decrement, and `Wait` to block until the count reaches zero.

## Example

Start three goroutines and wait for all to complete.

## Code example

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Worker %d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }
    wg.Wait()
    fmt.Println("All workers finished")
}
```

## Output

```bash
Worker 3 starting
Worker 1 starting
Worker 2 starting
Worker 2 done
Worker 1 done
Worker 3 done
All workers finished
```

## Useful links

- [sync.WaitGroup documentation](https://pkg.go.dev/sync#WaitGroup)
- [Go by Example: WaitGroups](https://gobyexample.com/waitgroups)
