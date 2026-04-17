---
title: Line filters
sidebar:
  order: 10
  label: 10.10 Line filters
---

## Context

Line filters read input line by line (from stdin or a file) and transform each line. Common in Unix pipelines. Use `bufio.Scanner` to read lines.

## Example

A filter that converts each line to uppercase.

## Code example

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    scanner := bufio.NewScanner(os.Stdin)
    for scanner.Scan() {
        line := scanner.Text()
        fmt.Println(strings.ToUpper(line))
    }
    if err := scanner.Err(); err != nil {
        fmt.Fprintln(os.Stderr, "error:", err)
        os.Exit(1)
    }
}
```

## Output (if input is "hello\nworld")

```bash
HELLO
WORLD
```

## Useful links

- [bufio.Scanner](https://pkg.go.dev/bufio#Scanner)
- [Go by Example: Line Filters](https://gobyexample.com/line-filters)
