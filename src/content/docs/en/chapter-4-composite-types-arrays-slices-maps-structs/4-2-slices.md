---
title: Slices
sidebar:
  order: 2
  label: 4.2 Slices
---

## Context

A slice is a dynamically‑sized, flexible view into an array. Unlike arrays, slices are **reference types** and are used much more often. They consist of a pointer, length, and capacity.

## Example

Create slices using literals, `make`, and slicing.

## Code example

```go
package main

import "fmt"

func main() {
    s1 := []int{1, 2, 3}          // slice literal
    s2 := make([]int, 3, 5)       // length 3, capacity 5
    s3 := s1[1:3]                 // slice from index 1 to 2

    s2[0] = 10
    s1 = append(s1, 4, 5)         // grows dynamically

    fmt.Println(s1, len(s1), cap(s1))
    fmt.Println(s2, len(s2), cap(s2))
    fmt.Println(s3)
}
```

## Output

```bash
[1 2 3 4 5] 5 8
[10 0 0] 3 5
[2 3]
```

## Useful links

- [Go blog: Slices](https://go.dev/blog/slices-intro)
- [Go by Example: Slices](https://gobyexample.com/slices)
