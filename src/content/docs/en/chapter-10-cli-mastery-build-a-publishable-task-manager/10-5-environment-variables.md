---
title: Environment variables
sidebar:
  order: 5
  label: 10.5 Environment variables
---

## Context

Environment variables are key‑value pairs that configure the operating system environment. In Go, use `os.Getenv` to read them, `os.Setenv` to set them, and `os.Unsetenv` to delete them.

## Example

Read the `HOME` variable and a custom `APP_MODE` variable.

## Code example

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    home := os.Getenv("HOME")
    fmt.Println("Home:", home)

    mode := os.Getenv("APP_MODE")
    if mode == "" {
        mode = "development"
    }
    fmt.Println("Mode:", mode)

    // Lookup with ok
    if val, ok := os.LookupEnv("PATH"); ok {
        fmt.Println("PATH exists")
    }
}
```

## Output

```bash
Home: /home/user
Mode: development
PATH exists
```

## Useful links

- [os package: Environment variables](https://pkg.go.dev/os#Getenv)
- [12 Factor App: Config](https://12factor.net/config)
