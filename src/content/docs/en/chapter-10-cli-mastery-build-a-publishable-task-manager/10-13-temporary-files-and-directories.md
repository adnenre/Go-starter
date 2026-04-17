---
title: Temporary files and directories
sidebar:
  order: 13
  label: 10.13 Temporary files and directories
---

## Context

Use `os.CreateTemp` and `os.MkdirTemp` to create temporary files/directories. They are automatically cleaned up by the OS or manually with `defer os.Remove`.

## Example

Create a temporary file, write data, then delete it.

## Code example

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    f, err := os.CreateTemp("", "example-*.txt")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer os.Remove(f.Name())
    defer f.Close()

    f.WriteString("temporary data")
    fmt.Println("Temporary file:", f.Name())
}
```

## Output (example)

```bash
Temporary file: /tmp/example-123456789.txt
```

## Useful links

- [os.CreateTemp](https://pkg.go.dev/os#CreateTemp)
- [os.MkdirTemp](https://pkg.go.dev/os#MkdirTemp)
