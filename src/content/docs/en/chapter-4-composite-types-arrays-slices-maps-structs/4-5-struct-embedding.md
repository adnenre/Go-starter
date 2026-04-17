---
title: Struct embedding
sidebar:
  order: 5
  label: 4.5 Struct embedding
---

## Context

Go supports **composition** via struct embedding (similar to mixins). An embedded struct’s fields and methods are promoted to the outer struct.

## Example

Embed a `Person` struct inside an `Employee`.

## Code example

```go
package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

type Employee struct {
    Person     // embedded
    ID         int
    Department string
}

func main() {
    e := Employee{
        Person:     Person{Name: "Alice", Age: 30},
        ID:         123,
        Department: "Engineering",
    }

    // Access promoted fields directly
    fmt.Println(e.Name, e.Age, e.ID, e.Department)
}
```

## Output

```bash
Alice 30 123 Engineering
```

## Useful links

- [Go spec: Struct types (embedding)](https://go.dev/ref/spec#Struct_types)
- [Go by Example: Embedding](https://gobyexample.com/struct-embedding)
