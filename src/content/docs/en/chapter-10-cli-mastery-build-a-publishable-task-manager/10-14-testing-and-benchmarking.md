---
title: Testing and benchmarking
sidebar:
  order: 14
  label: 10.14 Testing and benchmarking
---

## Context

The `testing` package provides unit tests and benchmarks. Write tests in `*_test.go` files. Benchmarks measure performance.

## Example

Test a function and benchmark it.

## Code example

```go
// main.go
package main

func Add(a, b int) int {
    return a + b
}
```

```go
// main_test.go
package main

import "testing"

func TestAdd(t *testing.T) {
    if Add(2, 3) != 5 {
        t.Error("Add(2,3) should be 5")
    }
}

func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(1, 2)
    }
}
```

## Output (run `go test -bench=.`)

```bash
PASS
BenchmarkAdd-8   1000000000   0.25 ns/op
```

## Useful links

- [testing package](https://pkg.go.dev/testing)
- [Go by Example: Testing](https://gobyexample.com/testing)
