---
title: Advanced CLI with cobra and viper
sidebar:
  order: 7
  label: 10.7 Advanced CLI with cobra and viper
---

## Context

For production‑grade CLI tools, use `cobra` (commands, subcommands, help) and `viper` (configuration from flags, env, files). Cobra is used by Kubernetes, Docker, GitHub CLI, etc.

## Example

A simple cobra app with one command.

## Code example

```go
package main

import (
    "fmt"
    "github.com/spf13/cobra"
)

func main() {
    var name string
    rootCmd := &cobra.Command{
        Use:   "greet",
        Short: "Greets someone",
        Run: func(cmd *cobra.Command, args []string) {
            fmt.Printf("Hello, %s!\n", name)
        },
    }
    rootCmd.Flags().StringVarP(&name, "name", "n", "World", "Name to greet")
    rootCmd.Execute()
}
```

## Output

```bash
Hello, Alice!
```

## Useful links

- [Cobra documentation](https://github.com/spf13/cobra)
- [Viper documentation](https://github.com/spf13/viper)
