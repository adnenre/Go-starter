---
title: Common standard interfaces
sidebar:
  order: 4
  label: 7.4 Common standard interfaces
---

## Context

The Go standard library defines many useful interfaces. The most common are:

- `fmt.Stringer` – types that can describe themselves as a string (`String() string`)
- `error` – the built‑in error interface (`Error() string`)
- `io.Reader` and `io.Writer` – for reading and writing byte streams
- `sort.Interface` – for sorting custom collections

## Example

Implement `fmt.Stringer` for a `Person` type.

## Code example

```go
package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func (p Person) String() string {
    return fmt.Sprintf("%s (%d years old)", p.Name, p.Age)
}

func main() {
    alice := Person{"Alice", 30}
    fmt.Println(alice) // fmt.Print uses String() automatically
}
```

## Output

```bash
Alice (30 years old)
```

## Useful links

- [fmt.Stringer documentation](https://pkg.go.dev/fmt#Stringer)
- [io package](https://pkg.go.dev/io)
- [sort package](https://pkg.go.dev/sort)
