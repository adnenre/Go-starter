---
title: Reading files
sidebar:
  order: 8
  label: 10.8 Reading files
---

## Context

Go provides several ways to read files: `os.ReadFile` (entire file), `bufio` (line by line), `os.Open` + `io.ReadAll`, etc. Choose based on file size and needs.

## Example

Read an entire file and print its content.

## Code example

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    data, err := os.ReadFile("example.txt")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println(string(data))
}
```

## Output (if example.txt contains "Hello, file!")

```bash
Hello, file!
```

## Useful links

- [os.ReadFile](https://pkg.go.dev/os#ReadFile)
- [bufio.Scanner](https://pkg.go.dev/bufio#Scanner)
