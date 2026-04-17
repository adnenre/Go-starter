---
title: Synchronisation par canaux
sidebar:
  order: 4
  label: 9.4 Synchronisation par canaux
---

## Contexte

Vous pouvez utiliser les canaux pour synchroniser l'exécution entre goroutines. Une réception bloquante peut attendre qu'une goroutine ait terminé.

## Exemple

Utiliser un canal pour attendre qu'une goroutine ait fini son travail.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func travailleur(fini chan bool) {
    fmt.Print("travaille...")
    time.Sleep(1 * time.Second)
    fmt.Println("terminé")
    fini <- true
}

func main() {
    fini := make(chan bool)
    go travailleur(fini)
    <-fini // attend
}
```

## Sortie

```bash
travaille...terminé
```

## Liens utiles

- [Go by Example : Synchronisation par canaux](https://gobyexample.com/fr/channel-synchronization)
- [Patrons de concurrence Go](https://go.dev/blog/pipelines)
