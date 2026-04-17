---
title: Execing processes
sidebar:
  order: 22
  label: 9.22 Execing processes
---

## Context

`syscall.Exec` replaces the current Go process with another program (no return). This is rarely used but available for advanced cases.

## Example

Replace the current process with `/bin/ls`.

## Code example

```go
package main

import (
    "syscall"
)

func main() {
    binary := "/bin/ls"
    args := []string{"ls", "-l"}
    env := syscall.Environ()

    err := syscall.Exec(binary, args, env)
    if err != nil {
        panic(err)
    }
}
```

## Output (example)

```bash
total 0
-rw-r--r--  1 user  staff  0 Jan 1 12:00 file.txt
```

## Useful links

- [syscall.Exec documentation](https://pkg.go.dev/syscall#Exec)
- [Go by Example: Execing Processes](https://gobyexample.com/execing-processes)
