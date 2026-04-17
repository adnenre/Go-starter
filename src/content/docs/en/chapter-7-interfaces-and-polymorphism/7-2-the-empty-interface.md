---
title: The empty interface
sidebar:
  order: 2
  label: 7.2 The empty interface
---

## Context

The empty interface `interface{}` (or `any` in Go 1.18+) has zero methods. Therefore **every** type satisfies it. It is used when a function can accept values of any type, similar to `any` in TypeScript. However, to use the underlying value, you must perform a type assertion or type switch.

## Example

Accept any value and print it using `fmt.Println` (which already takes `any`).

## Code example

```go
package main

import "fmt"

func describe(i interface{}) {
    fmt.Printf("Type = %T, Value = %v\n", i, i)
}

func main() {
    describe(42)
    describe("hello")
    describe(3.14)
}
```

## Output

```bash
Type = int, Value = 42
Type = string, Value = hello
Type = float64, Value = 3.14
```

## Useful links

- [Go spec: Empty interface](https://go.dev/ref/spec#Interface_types)
- [Go by Example: Empty Interface](https://gobyexample.com/empty-interface)
