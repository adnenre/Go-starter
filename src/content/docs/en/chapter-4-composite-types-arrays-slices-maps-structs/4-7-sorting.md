---
title: Sorting
sidebar:
  order: 7
  label: 4.7 Sorting
---

## Context

The `sort` package provides sorting for built‑in types and custom sorts via `sort.Interface`. For slices of ints, floats, or strings, use `sort.Ints`, `sort.Float64s`, `sort.Strings`.

## Example

Sort slices of ints and strings.

## Code example

```go
package main

import (
    "fmt"
    "sort"
)

func main() {
    ints := []int{5, 2, 8, 1, 9}
    sort.Ints(ints)
    fmt.Println(ints)

    strs := []string{"banana", "apple", "cherry"}
    sort.Strings(strs)
    fmt.Println(strs)

    // Check if sorted
    fmt.Println(sort.IntsAreSorted(ints))
}
```

## Output

```bash
[1 2 5 8 9]
[apple banana cherry]
true
```

## Useful links

- [sort package documentation](https://pkg.go.dev/sort)
- [Go by Example: Sorting](https://gobyexample.com/sorting)
