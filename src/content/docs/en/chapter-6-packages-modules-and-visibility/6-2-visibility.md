---
title: Visibility
sidebar:
  order: 2
  label: 6.2 Visibility
---

## Context

In Go, visibility is determined by capitalization. Identifiers that start with an uppercase letter are **exported** (visible outside the package). Lowercase identifiers are **unexported** (private to the package).

## Example

Create a package with both exported and unexported identifiers.

## Code example

```go
// person.go
package person

type Person struct {
    Name string // exported
    age  int    // unexported
}

func New(name string, age int) Person {
    return Person{Name: name, age: age}
}

func (p Person) GetAge() int { // exported
    return p.age
}
```

```go
// main.go
package main

import (
    "fmt"
    "person"
)

func main() {
    p := person.New("Alice", 30)
    fmt.Println(p.Name) // ok
    // fmt.Println(p.age) // error: age not exported
    fmt.Println(p.GetAge()) // ok
}
```

## Output

```bash
Alice
30
```

## Useful links

- [Go spec: Exported identifiers](https://go.dev/ref/spec#Exported_identifiers)
- [Go by Example: Visibility](https://gobyexample.com/visibility)
