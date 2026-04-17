---
title: Timeouts
sidebar:
  order: 7
  label: 9.7 Timeouts
---

## Contexte

Vous pouvez implémenter des timeouts en utilisant `select` avec `time.After`. Si une opération sur canal ne se termine pas dans le délai imparti, la clause `time.After` s'exécute.

## Exemple

Attendre un canal qui n'envoie jamais, avec un timeout d'une seconde.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan string)
    go func() {
        time.Sleep(2 * time.Second)
        ch <- "résultat"
    }()

    select {
    case res := <-ch:
        fmt.Println(res)
    case <-time.After(1 * time.Second):
        fmt.Println("timeout")
    }
}
```

## Sortie

```bash
timeout
```

## Liens utiles

- [Go by Example : Timeouts](https://gobyexample.com/fr/timeouts)
- [Documentation time.After](https://pkg.go.dev/time#After)
