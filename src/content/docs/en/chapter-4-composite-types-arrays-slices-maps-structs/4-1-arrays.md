---
title: Arrays
sidebar:
  order: 1
  label: 4.1 Arrays
---

## Context

An array is a fixed‑size sequence of elements of a single type. The size is part of the type (e.g., `[5]int`). Arrays are **value types** – assigning copies the entire array.

## Example

Declare, initialize, and iterate over arrays.

## Code example

```go
package main

import "fmt"

func main() {
    var a [3]int                 // zero-valued array [0,0,0]
    b := [4]int{1, 2, 3, 4}      // literal
    c := [...]int{10, 20, 30}    // size inferred

    a[0] = 42
    fmt.Println(a, b, c)

    // Iterate
    for i, v := range c {
        fmt.Printf("c[%d] = %d\n", i, v)
    }
}
```

## Output

```bash
[42 0 0] [1 2 3 4] [10 20 30]
c[0] = 10
c[1] = 20
c[2] = 30
```

## Useful links

- [Go spec: Array types](https://go.dev/ref/spec#Array_types)
- [Go by Example: Arrays](https://gobyexample.com/arrays)
