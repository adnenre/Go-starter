---
title: File paths
sidebar:
  order: 11
  label: 10.11 File paths
---

## Context

The `path/filepath` package provides cross‑platform path manipulation: joining, splitting, cleaning, and relative paths.

## Example

Join paths, get base and directory.

## Code example

```go
package main

import (
    "fmt"
    "path/filepath"
)

func main() {
    path := filepath.Join("dir", "subdir", "file.txt")
    fmt.Println("Joined:", path)

    fmt.Println("Base:", filepath.Base(path))
    fmt.Println("Dir:", filepath.Dir(path))
    fmt.Println("Ext:", filepath.Ext(path))
    fmt.Println("Abs?", filepath.IsAbs(path))
}
```

## Output

```bash
Joined: dir/subdir/file.txt
Base: file.txt
Dir: dir/subdir
Ext: .txt
Abs? false
```

## Useful links

- [path/filepath package](https://pkg.go.dev/path/filepath)
- [Go by Example: File Paths](https://gobyexample.com/file-paths)
