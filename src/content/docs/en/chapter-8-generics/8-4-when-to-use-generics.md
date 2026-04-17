---
title: When to use generics
sidebar:
  order: 4
  label: 8.4 When to use generics
---

## Context

Generics are powerful but not always necessary. Use generics when:

- You write functions that work on slices, maps, or channels of any type (e.g., `Reverse`, `Map`, `Filter`).
- You need a container data structure (like a stack, queue, or tree) that works with multiple types.
- You want to avoid code duplication for similar algorithms.

**Avoid generics when:**

- A simple interface (with methods) would work.
- The type parameter is used only once (just use `any` and type assertions? no – still consider interface).
- The function only needs to call methods – use an interface instead.

## Example

Compare generic vs interface approach.

## Code example

```go
package main

import "fmt"

// Generic approach – works for any type that supports Stringer
func PrintGeneric[T fmt.Stringer](items []T) {
    for _, item := range items {
        fmt.Println(item.String())
    }
}

// Interface approach – also works, but requires explicit satisfaction
type Stringer interface {
    String() string
}
func PrintInterface(items []Stringer) {
    for _, item := range items {
        fmt.Println(item.String())
    }
}

type Person struct{ Name string }
func (p Person) String() string { return p.Name }

func main() {
    people := []Person{{"Alice"}, {"Bob"}}
    PrintGeneric(people)   // works because Person implements fmt.Stringer
    PrintInterface(people) // also works
}
```

## Output

```bash
Alice
Bob
Alice
Bob
```

## Useful links

- [Go blog: When to use generics](https://go.dev/blog/when-generics)
- [Effective Go: Generics guidance](https://go.dev/doc/effective_go#generics)
