---
title: SHA256 hashes
sidebar:
  order: 18
  label: 4.18 SHA256 hashes
---

## Context

The `crypto/sha256` package computes SHA‑256 hashes. Use `sha256.Sum256` for a quick hash or `sha256.New` for streaming.

## Example

Hash a string and a file (simulated).

## Code example

```go
package main

import (
    "crypto/sha256"
    "fmt"
)

func main() {
    data := []byte("hello world")
    hash := sha256.Sum256(data)
    fmt.Printf("%x\n", hash)

    // Using New
    h := sha256.New()
    h.Write([]byte("hello "))
    h.Write([]byte("world"))
    fmt.Printf("%x\n", h.Sum(nil))
}
```

## Output

```bash
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Useful links

- [crypto/sha256 package](https://pkg.go.dev/crypto/sha256)
- [Go by Example: SHA256 Hashes](https://gobyexample.com/sha256-hashes)
