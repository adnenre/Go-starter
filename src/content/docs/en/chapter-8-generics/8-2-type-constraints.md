---
title: Type constraints
sidebar:
  order: 2
  label: 8.2 Type constraints
---

## Context

Type constraints limit what types can be used as type arguments. The built‑in constraint `any` allows all types. `comparable` allows types that can be compared with `==` and `!=`. You can also define custom constraints using an interface.

## Example

Use `comparable` to check if a slice contains a specific value.

## Code example

```go
package main

import "fmt"

func Contains[T comparable](slice []T, value T) bool {
    for _, v := range slice {
        if v == value {
            return true
        }
    }
    return false
}

func main() {
    ints := []int{1, 2, 3}
    fmt.Println(Contains(ints, 2)) // true
    fmt.Println(Contains(ints, 5)) // false

    strs := []string{"apple", "banana"}
    fmt.Println(Contains(strs, "banana")) // true
}
```

## Output

```bash
true
false
true
```

## Useful links

- [Go spec: Type constraints](https://go.dev/ref/spec#Type_constraints)
- [Go by Example: Generics](https://gobyexample.com/generics)
