---
title: Writing files
sidebar:
  order: 9
  label: 10.9 Writing files
---

## Context

Write files using `os.WriteFile` (entire content) or `os.Create` + `io.WriteString` (incremental). Always close files after writing.

## Example

Write a string to a file.

## Code example

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    content := []byte("Hello, file!")
    err := os.WriteFile("output.txt", content, 0644)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("File written successfully")
}
```

## Output

```bash
File written successfully
```

## Useful links

- [os.WriteFile](https://pkg.go.dev/os#WriteFile)
- [os.Create](https://pkg.go.dev/os#Create)
