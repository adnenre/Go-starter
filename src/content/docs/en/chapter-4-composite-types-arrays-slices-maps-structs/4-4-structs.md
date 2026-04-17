---
title: Structs
sidebar:
  order: 4
  label: 4.4 Structs
---

## Context

A struct is a collection of fields. It is the main way to group data in Go. Structs are value types, but pointers to structs are common for efficiency.

## Example

Define a struct, create instances, and access fields.

## Code example

```go
package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
    p1 := Person{"Alice", 30}
    p2 := Person{Name: "Bob", Age: 25}
    var p3 Person
    p3.Name = "Charlie"
    p3.Age = 35

    fmt.Println(p1, p2, p3)

    // Pointer to struct
    ptr := &p1
    ptr.Age = 31          // no need to dereference
    fmt.Println(p1)
}
```

## Output

```bash
{Alice 30} {Bob 25} {Charlie 35}
{Alice 31}
```

## Useful links

- [Go spec: Struct types](https://go.dev/ref/spec#Struct_types)
- [Go by Example: Structs](https://gobyexample.com/structs)
