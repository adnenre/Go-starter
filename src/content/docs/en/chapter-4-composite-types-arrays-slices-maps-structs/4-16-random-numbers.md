---
title: Random numbers
sidebar:
  order: 16
  label: 4.16 Random numbers
---

## Context

The `math/rand` package generates pseudo‑random numbers. For cryptographic randomness, use `crypto/rand`. Since Go 1.20, the global generator is seeded automatically.

## Example

Generate integers, floats, and random permutations.

## Code example

```go
package main

import (
    "fmt"
    "math/rand"
)

func main() {
    fmt.Println(rand.Intn(100))       // 0-99
    fmt.Println(rand.Float64())       // 0.0-1.0
    fmt.Println(rand.Int())           // non‑negative

    // Permutation of [0..n)
    perm := rand.Perm(5)
    fmt.Println(perm)
}
```

## Output (example)

```bash
42
0.123456789
1234567890123456789
[2 0 4 1 3]
```

## Useful links

- [math/rand package](https://pkg.go.dev/math/rand)
- [Go by Example: Random Numbers](https://gobyexample.com/random-numbers)
