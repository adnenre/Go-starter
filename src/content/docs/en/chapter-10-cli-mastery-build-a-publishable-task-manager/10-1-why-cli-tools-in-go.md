---
title: Why CLI tools in Go
sidebar:
  order: 1
  label: 10.1 Why CLI tools in Go
---

## Context

Go is an excellent language for building command‑line interface (CLI) tools. Its strengths include:

- **Single binary deployment** – No runtime dependencies. You build once, run anywhere.
- **Cross‑platform compilation** – `GOOS=windows go build` produces a Windows `.exe` from a Mac or Linux.
- **Fast startup and low memory** – Critical for tools that run and exit quickly.
- **Rich standard library** – `flag`, `os`, `io`, `text/tabwriter`, `encoding/json` and more.
- **Static typing** – Helps prevent bugs in complex CLI logic.

Many famous CLI tools are written in Go: Docker, Kubernetes, Terraform, Hugo, and countless developer tools.

## Example

A minimal CLI tool that prints its name and arguments.

## Code example

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    fmt.Printf("Program: %s\n", os.Args[0])
    fmt.Printf("Arguments: %v\n", os.Args[1:])
}
```

## Output (if run as `./mycli hello world`)

```bash
Program: ./mycli
Arguments: [hello world]
```

## Useful links

- [Go blog: Command-line tools in Go](https://go.dev/blog/tools)
- [Awesome Go CLI tools](https://github.com/avelino/awesome-go#command-line)
