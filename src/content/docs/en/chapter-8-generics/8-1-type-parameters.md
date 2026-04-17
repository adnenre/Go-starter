---
title: Type parameters
sidebar:
  order: 1
  label: 8.1 Type parameters
---

## Context

Generics (introduced in Go 1.18) allow writing functions and types that work with **any** type, while preserving type safety. A type parameter is declared with square brackets: `func F[T any](x T) T`. The `any` constraint means any type is allowed.

## Example

Write a generic `Reverse` function that works on any slice.

## Code example

```go
package main

import "fmt"

func Reverse[T any](s []T) []T {
    result := make([]T, len(s))
    for i, v := range s {
        result[len(s)-1-i] = v
    }
    return result
}

func main() {
    ints := []int{1, 2, 3, 4}
    fmt.Println(Reverse(ints))

    strs := []string{"a", "b", "c"}
    fmt.Println(Reverse(strs))
}
```

## Output

```bash
[4 3 2 1]
[c b a]
```

## Useful links

- [Go blog: Generics](https://go.dev/blog/intro-generics)
- [Go spec: Type parameters](https://go.dev/ref/spec#Type_parameter_declarations)
