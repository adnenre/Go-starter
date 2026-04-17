---
title: Embed directive
sidebar:
  order: 6
  label: 6.6 Embed directive
---

## Context

The `//go:embed` directive (introduced in Go 1.16) embeds files and directories into the binary at compile time. It is used for static assets, templates, and configuration files. The `embed` package provides types `embed.FS`.

## Example

Embed a text file and serve it as a string.

## Code example

```go
package main

import (
    _ "embed"
    "fmt"
)

//go:embed greetings.txt
var greeting string

func main() {
    fmt.Print(greeting)
}
```

Assume `greetings.txt` contains:

```
Hello, embedded world!
```

## Output

```bash
Hello, embedded world!
```

## Useful links

- [embed package documentation](https://pkg.go.dev/embed)
- [Go blog: Embedding files](https://go.dev/blog/embed)
