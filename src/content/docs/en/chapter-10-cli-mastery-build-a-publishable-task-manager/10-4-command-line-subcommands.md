---
title: Command line subcommands
sidebar:
  order: 4
  label: 10.4 Command line subcommands
---

## Context

For complex CLI tools (like `git` with `git add`, `git commit`), you need subcommands. The `flag` package alone is not enough; you can implement subcommands by using `flag.NewFlagSet` for each subcommand.

## Example

A simple CLI with `add` and `list` subcommands.

## Code example

```go
package main

import (
    "flag"
    "fmt"
    "os"
)

func main() {
    if len(os.Args) < 2 {
        fmt.Println("Expected 'add' or 'list' subcommand")
        os.Exit(1)
    }

    switch os.Args[1] {
    case "add":
        addCmd := flag.NewFlagSet("add", flag.ExitOnError)
        task := addCmd.String("task", "", "task description")
        addCmd.Parse(os.Args[2:])
        fmt.Printf("Adding task: %s\n", *task)

    case "list":
        listCmd := flag.NewFlagSet("list", flag.ExitOnError)
        all := listCmd.Bool("all", false, "list all tasks")
        listCmd.Parse(os.Args[2:])
        fmt.Printf("Listing tasks (all=%v)\n", *all)

    default:
        fmt.Println("Unknown subcommand")
        os.Exit(1)
    }
}
```

## Output

```bash
Adding task: buy milk
Listing tasks (all=true)
```

## Useful links

- [flag.NewFlagSet documentation](https://pkg.go.dev/flag#NewFlagSet)
- [Go by Example: Command-Line Subcommands](https://gobyexample.com/command-line-subcommands)
