---
title: Compteurs atomiques
sidebar:
  order: 16
  label: 9.16 Compteurs atomiques
---

## Contexte

Le package `sync/atomic` fournit des opérations atomiques bas niveau pour les entiers et les pointeurs. Utilisez‑les pour incrémenter des compteurs sans verrous.

## Exemple

Incrémenter un compteur depuis plusieurs goroutines avec `atomic.AddUint64`.

## Code exemple

```go
package main

import (
    "fmt"
    "sync"
    "sync/atomic"
)

func main() {
    var compteur uint64
    var wg sync.WaitGroup

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            atomic.AddUint64(&compteur, 1)
            wg.Done()
        }()
    }
    wg.Wait()
    fmt.Println("compteur :", compteur)
}
```

## Sortie

```bash
compteur : 1000
```

## Liens utiles

- [Documentation sync/atomic](https://pkg.go.dev/sync/atomic)
- [Go by Example : Compteurs atomiques](https://gobyexample.com/fr/atomic-counters)
