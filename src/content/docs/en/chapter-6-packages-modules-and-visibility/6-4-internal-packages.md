---
title: Internal packages
sidebar:
  order: 4
  label: 6.4 Internal packages
---

## Context

An `internal/` directory is a special convention. Code inside `internal/` can only be imported by other code inside the same module (or its parent directories). This enforces encapsulation and prevents external usage of internal implementation details.

## Example

Project structure with an internal package.

## Code example

```bash
myproject/
├── go.mod
├── internal/
│   └── helper/
│       └── helper.go   // package helper
└── cmd/
    └── myapp/
        └── main.go      // can import internal/helper
```

```go
// internal/helper/helper.go
package helper

func Help() string {
    return "internal help"
}
```

```go
// cmd/myapp/main.go
package main

import (
    "fmt"
    "myproject/internal/helper"
)

func main() {
    fmt.Println(helper.Help())
}
```

## Output

```bash
internal help
```

## Useful links

- [Go internal packages design](https://go.dev/doc/go1.4#internalpackages)
- [Internal packages documentation](https://go.dev/doc/go1.4#internalpackages)
