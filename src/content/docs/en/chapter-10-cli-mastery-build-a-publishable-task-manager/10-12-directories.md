---
title: Directories
sidebar:
  order: 12
  label: 10.12 Directories
---

## Context

Work with directories using `os.Mkdir`, `os.MkdirAll`, `os.ReadDir`, `os.Remove`, and `os.RemoveAll`.

## Example

Create a directory, list its contents, then remove it.

## Code example

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    err := os.Mkdir("testdir", 0755)
    if err != nil {
        fmt.Println("Error creating dir:", err)
        return
    }
    defer os.RemoveAll("testdir")

    entries, err := os.ReadDir(".")
    if err != nil {
        fmt.Println("Error reading dir:", err)
        return
    }
    for _, e := range entries {
        fmt.Println(e.Name(), e.IsDir())
    }
}
```

## Output (example)

```bash
testdir true
main.go false
```

## Useful links

- [os.ReadDir](https://pkg.go.dev/os#ReadDir)
- [os.Mkdir](https://pkg.go.dev/os#Mkdir)
