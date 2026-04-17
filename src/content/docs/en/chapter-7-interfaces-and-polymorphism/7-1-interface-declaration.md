---
title: Interface declaration
sidebar:
  order: 1
  label: 7.1 Interface declaration
---

## Context

An interface defines a set of method signatures. In Go, interfaces are satisfied **implicitly** – a type implements an interface if it provides all the methods declared in the interface. No explicit `implements` keyword is needed.

## Example

Define an interface `Speaker` and two structs that implement it.

## Code example

```go
package main

import "fmt"

type Speaker interface {
    Speak() string
}

type Dog struct{}
func (d Dog) Speak() string { return "Woof!" }

type Cat struct{}
func (c Cat) Speak() string { return "Meow!" }

func makeSound(s Speaker) {
    fmt.Println(s.Speak())
}

func main() {
    dog := Dog{}
    cat := Cat{}
    makeSound(dog)
    makeSound(cat)
}
```

## Output

```bash
Woof!
Meow!
```

## Useful links

- [Go spec: Interface types](https://go.dev/ref/spec#Interface_types)
- [Go by Example: Interfaces](https://gobyexample.com/interfaces)
