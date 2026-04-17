---
title: Serveur TCP
sidebar:
  order: 17
  label: 10.17 Serveur TCP
---

## Contexte

Pour les protocoles réseau bas niveau, utilisez le package `net` pour créer des serveurs et clients TCP.

## Exemple

Un serveur TCP echo.

## Code exemple

```go
package main

import (
    "bufio"
    "fmt"
    "net"
)

func gerer(conn net.Conn) {
    defer conn.Close()
    scanner := bufio.NewScanner(conn)
    for scanner.Scan() {
        fmt.Fprintln(conn, "echo :", scanner.Text())
    }
}

func main() {
    ln, err := net.Listen("tcp", ":8080")
    if err != nil {
        fmt.Println("Erreur :", err)
        return
    }
    defer ln.Close()
    for {
        conn, err := ln.Accept()
        if err != nil {
            continue
        }
        go gerer(conn)
    }
}
```

## Sortie (telnet localhost 8080)

```bash
bonjour
echo : bonjour
```

## Liens utiles

- [Package net](https://pkg.go.dev/net)
- [Go by Example : Serveur TCP](https://gobyexample.com/fr/tcp-server)
