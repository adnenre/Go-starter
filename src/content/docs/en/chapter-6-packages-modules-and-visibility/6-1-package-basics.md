---
title: Package basics
sidebar:
  order: 1
  label: 6.1 Package basics
---

## Context

Every Go file belongs to a package. A package is a collection of Go files in the same directory that are compiled together. The `main` package defines an executable program. Other packages are reusable libraries.

## Example

Create two files in the same directory: `main.go` and `math.go` with package `mymath`.

## Code example

```go
// math.go
package mymath

func Add(a, b int) int {
    return a + b
}
```

```go
// main.go
package main

import (
    "fmt"
    "mymath"
)

func main() {
    fmt.Println(mymath.Add(3, 4))
}
```

## Output

```bash
7
```

## Useful links

- [Go spec: Packages](https://go.dev/ref/spec#Packages)
- [How to write Go code](https://go.dev/doc/code)
