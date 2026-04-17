---
title: Pointers
sidebar:
  order: 6
  label: 4.6 Pointers
---

## Context

A pointer holds the memory address of a value. Use `*T` for a pointer to a `T`, and `&` to get the address. Go has no pointer arithmetic (except via `unsafe`).

## Example

Pass by value vs by reference.

## Code example

```go
package main

import "fmt"

func zeroVal(x int) {
    x = 0
}

func zeroPtr(x *int) {
    *x = 0
}

func main() {
    a := 42
    zeroVal(a)
    fmt.Println(a)      // still 42

    zeroPtr(&a)
    fmt.Println(a)      // now 0

    // nil pointers
    var p *int
    if p == nil {
        fmt.Println("p is nil")
    }
}
```

## Output

```bash
42
0
p is nil
```

## Useful links

- [Go by Example: Pointers](https://gobyexample.com/pointers)
- [Go spec: Pointer types](https://go.dev/ref/spec#Pointer_types)
