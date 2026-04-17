---
title: Signaux
sidebar:
  order: 20
  label: 9.20 Signaux
---

## Contexte

Le package `os/signal` permet aux programmes Go de recevoir des signaux Unix (par exemple SIGINT, SIGTERM). Cela est utilisé pour un arrêt gracieux.

## Exemple

Capturer `Ctrl+C` et afficher un message avant de quitter.

## Code exemple

```go
package main

import (
    "fmt"
    "os"
    "os/signal"
    "syscall"
)

func main() {
    sigs := make(chan os.Signal, 1)
    signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)

    fmt.Println("En attente d'un signal...")
    s := <-sigs
    fmt.Println("Signal reçu :", s)
}
```

## Sortie (appuyez sur Ctrl+C)

```bash
En attente d'un signal...
Signal reçu : interrupt
```

## Liens utiles

- [Package os/signal](https://pkg.go.dev/os/signal)
- [Go by Example : Signaux](https://gobyexample.com/fr/signals)
