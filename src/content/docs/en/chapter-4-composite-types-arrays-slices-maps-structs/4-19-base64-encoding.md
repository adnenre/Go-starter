---
title: Base64 encoding
sidebar:
  order: 19
  label: 4.19 Base64 encoding
---

## Context

The `encoding/base64` package encodes and decodes Base64. Use `StdEncoding` for standard Base64, `URLEncoding` for URL‑safe.

## Example

Encode and decode a string.

## Code example

```go
package main

import (
    "encoding/base64"
    "fmt"
)

func main() {
    data := []byte("hello world")
    encoded := base64.StdEncoding.EncodeToString(data)
    fmt.Println(encoded)

    decoded, _ := base64.StdEncoding.DecodeString(encoded)
    fmt.Println(string(decoded))
}
```

## Output

```bash
aGVsbG8gd29ybGQ=
hello world
```

## Useful links

- [base64 package](https://pkg.go.dev/encoding/base64)
- [Go by Example: Base64 Encoding](https://gobyexample.com/base64-encoding)
