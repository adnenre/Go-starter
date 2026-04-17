---
title: Basic CLI with os.Args and flag
sidebar:
  order: 2
  label: 10.2 Basic CLI with os.Args and flag
---

## Context

Go provides two simple ways to read command‑line input:

- `os.Args` – a slice of strings containing program name and arguments.
- `flag` package – parses Unix‑style flags (`-name value` or `--name value`).

`os.Args` is good for positional arguments. `flag` is better for optional named flags.

## Example

Use `os.Args` to print all arguments.

## Code example

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    if len(os.Args) < 2 {
        fmt.Println("Usage: ./program <name>")
        return
    }
    name := os.Args[1]
    fmt.Printf("Hello, %s!\n", name)
}
```

## Output

```bash
Hello, Alice!
```

## Useful links

- [os.Args documentation](https://pkg.go.dev/os#Args)
- [flag package documentation](https://pkg.go.dev/flag)
