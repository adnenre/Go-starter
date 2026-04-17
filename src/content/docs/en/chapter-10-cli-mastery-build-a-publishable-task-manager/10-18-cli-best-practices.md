---
title: CLI best practices
sidebar:
  order: 18
  label: 10.18 CLI best practices
---

## Context

Well‑designed CLI tools follow common conventions: help text, exit codes, output formatting, and error handling.

## Best practices

- **Help text** – Provide `-h` or `--help` with clear usage.
- **Exit codes** – `0` for success, non‑zero for errors.
- **Output** – Use `fmt.Println` for normal output, `fmt.Fprintln(os.Stderr, ...)` for errors.
- **Silence** – Allow quiet mode (`-q`).
- **Progress** – Use progress bars for long operations (e.g., `github.com/schollz/progressbar`).
- **Colour** – Use colour for readability, but respect `NO_COLOR` environment variable.
- **Subcommands** – Group related actions (like `git add`, `git commit`).
- **Configuration** – Support flags, environment variables, and config files (use Viper).

## Example

A well‑structured CLI with proper exit codes.

## Code example

```go
package main

import (
    "flag"
    "fmt"
    "os"
)

func main() {
    name := flag.String("name", "", "your name")
    flag.Parse()
    if *name == "" {
        fmt.Fprintln(os.Stderr, "error: --name is required")
        os.Exit(1)
    }
    fmt.Printf("Hello, %s\n", *name)
    os.Exit(0)
}
```

## Output (missing flag)

```bash
error: --name is required
```

## Useful links

- [CLI guidelines (CLIG)](https://clig.dev/)
- [POSIX utility conventions](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/)
