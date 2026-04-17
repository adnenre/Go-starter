---
title: TCP server
sidebar:
  order: 17
  label: 10.17 TCP server
---

## Context

For low‑level network protocols, use the `net` package to create TCP servers and clients.

## Example

A TCP echo server.

## Code example

```go
package main

import (
    "bufio"
    "fmt"
    "net"
)

func handle(conn net.Conn) {
    defer conn.Close()
    scanner := bufio.NewScanner(conn)
    for scanner.Scan() {
        fmt.Fprintln(conn, "echo:", scanner.Text())
    }
}

func main() {
    ln, err := net.Listen("tcp", ":8080")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer ln.Close()
    for {
        conn, err := ln.Accept()
        if err != nil {
            continue
        }
        go handle(conn)
    }
}
```

## Output (telnet localhost 8080)

```bash
hello
echo: hello
```

## Useful links

- [net package](https://pkg.go.dev/net)
- [Go by Example: TCP Server](https://gobyexample.com/tcp-server)
