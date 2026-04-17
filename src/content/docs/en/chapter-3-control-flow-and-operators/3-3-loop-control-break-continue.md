---
title: Loop control break continue
sidebar:
  order: 3
  label: 3.3 Loop control break continue
---

## Context

Inside loops, `break` terminates the innermost loop. `continue` skips to the next iteration.

You can also use **labels** to break out of nested loops.

## Example

Use `break`, `continue`, and a label.

## Code example

```go
package main

import "fmt"

func main() {
    // continue
    for i := 0; i < 5; i++ {
        if i%2 == 0 {
            continue
        }
        fmt.Print(i, " ")
    }
    fmt.Println()

    // break
    for i := 0; i < 10; i++ {
        if i == 3 {
            break
        }
        fmt.Print(i, " ")
    }
    fmt.Println()

    // label to break out of two loops
outer:
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if i == 1 && j == 1 {
                break outer
            }
            fmt.Printf("(%d,%d) ", i, j)
        }
    }
    fmt.Println()
}
```

## Output

```bash
1 3
0 1 2
(0,0) (0,1) (0,2) (1,0)
```

## Useful links

- [Go spec: Break statements](https://go.dev/ref/spec#Break_statements)
- [Go by Example: Break and Continue](https://gobyexample.com/break-and-continue)
