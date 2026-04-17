---
title: Spawning processes
sidebar:
  order: 21
  label: 9.21 Spawning processes
---

## Context

The `os/exec` package spawns external processes. You can run commands and capture their output.

## Example

Run `ls -l` and print the output.

## Code example

```go
package main

import (
    "fmt"
    "os/exec"
)

func main() {
    cmd := exec.Command("ls", "-l")
    out, err := cmd.Output()
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println(string(out))
}
```

## Output (example)

```bash
total 0
-rw-r--r--  1 user  staff  0 Jan 1 12:00 file.txt
```

## Useful links

- [os/exec package](https://pkg.go.dev/os/exec)
- [Go by Example: Spawning Processes](https://gobyexample.com/spawning-processes)
