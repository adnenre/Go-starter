---
title: Loops for
sidebar:
  order: 2
  label: 3.2 Loops for
---

## Context

Go has only one looping construct: `for`. It can be used in three main forms:

1. **Classic**: `for initialization; condition; post {}`
2. **While‑like**: `for condition {}`
3. **Infinite**: `for {}` (break with `break` or `return`)

## Example

Print numbers from 0 to 4, then a while‑like loop, then an infinite loop with break.

## Code example

```go
package main

import "fmt"

func main() {
    // Classic loop
    for i := 0; i < 5; i++ {
        fmt.Print(i, " ")
    }
    fmt.Println()

    // While-like
    j := 0
    for j < 3 {
        fmt.Print(j, " ")
        j++
    }
    fmt.Println()

    // Infinite loop
    k := 0
    for {
        if k >= 2 {
            break
        }
        fmt.Print(k, " ")
        k++
    }
    fmt.Println()
}
```

## Output

```bash
0 1 2 3 4
0 1 2
0 1
```

## Useful links

- [Go spec: For statements](https://go.dev/ref/spec#For_statements)
- [Go by Example: For](https://gobyexample.com/for)
