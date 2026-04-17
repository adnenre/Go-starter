---
title: Managing dependencies
sidebar:
  order: 5
  label: 6.5 Managing dependencies
---

## Context

Go modules are the standard dependency management system. Use `go get` to add a dependency, `go mod tidy` to clean up, and `go mod vendor` to vendor dependencies. The `go.mod` file records module paths and versions.

## Example

Add a third‑party dependency and use it.

## Code example

```bash
go mod init mymodule
go get github.com/google/uuid
```

```go
package main

import (
    "fmt"
    "github.com/google/uuid"
)

func main() {
    id := uuid.New()
    fmt.Println(id)
}
```

## Output (example)

```bash
550e8400-e29b-41d4-a716-446655440000
```

## Useful links

- [Managing dependencies (official)](https://go.dev/doc/modules/managing-dependencies)
- [Go modules reference](https://go.dev/ref/mod)
