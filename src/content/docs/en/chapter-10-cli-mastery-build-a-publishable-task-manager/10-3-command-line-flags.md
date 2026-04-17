---
title: Command line flags
sidebar:
  order: 3
  label: 10.3 Command line flags
---

## Context

The `flag` package provides standard flag parsing. Flags can be of type `string`, `int`, `bool`, `duration`, etc. Use `flag.String`, `flag.Int`, etc., then call `flag.Parse()`.

## Example

Define flags for name and age.

## Code example

```go
package main

import (
    "flag"
    "fmt"
)

func main() {
    name := flag.String("name", "World", "name to greet")
    age := flag.Int("age", 0, "age of the person")
    verbose := flag.Bool("verbose", false, "enable verbose output")
    flag.Parse()

    fmt.Printf("Hello, %s\n", *name)
    if *verbose {
        fmt.Printf("Age: %d\n", *age)
    }
}
```

## Output (run as `./greet -name Alice -age 30 -verbose`)

```bash
Hello, Alice
Age: 30
```

## Useful links

- [flag package documentation](https://pkg.go.dev/flag)
- [Go by Example: Command-Line Flags](https://gobyexample.com/command-line-flags)
