---
title: Generic types
sidebar:
  order: 3
  label: 8.3 Generic types
---

## Context

You can define generic structs, interfaces, and type aliases. The type parameter appears after the type name in square brackets. Generic types can have methods, but methods cannot have additional type parameters (the receiver's parameters are fixed).

## Example

Define a generic `Stack[T]` with push and pop methods.

## Code example

```go
package main

import "fmt"

type Stack[T any] struct {
    items []T
}

func (s *Stack[T]) Push(item T) {
    s.items = append(s.items, item)
}

func (s *Stack[T]) Pop() (T, bool) {
    if len(s.items) == 0 {
        var zero T
        return zero, false
    }
    last := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    return last, true
}

func main() {
    intStack := Stack[int]{}
    intStack.Push(10)
    intStack.Push(20)
    fmt.Println(intStack.Pop()) // 20, true
    fmt.Println(intStack.Pop()) // 10, true
    fmt.Println(intStack.Pop()) // 0, false
}
```

## Output

```bash
20 true
10 true
0 false
```

## Useful links

- [Go spec: Generic types](https://go.dev/ref/spec#Type_definitions)
- [Go generics tutorial](https://go.dev/doc/tutorial/generics)
