---
title: Canaux
sidebar:
  order: 2
  label: 9.2 Canaux
---

## Contexte

Les canaux sont des conduits typés qui permettent aux goroutines de communiquer et de se synchroniser. Vous envoyez une valeur dans un canal avec `ch <- v` et vous recevez une valeur avec `v := <-ch`. Par défaut, les canaux sont non tamponnés : l'envoi bloque jusqu'à ce qu'un récepteur soit prêt, et vice‑versa.

## Exemple

Créer un canal et passer une valeur entre deux goroutines.

## Code exemple

```go
package main

import "fmt"

func main() {
    ch := make(chan string)

    go func() {
        ch <- "ping"
    }()

    msg := <-ch
    fmt.Println(msg)
}
```

## Sortie

```bash
ping
```

## Liens utiles

- [Spécification Go : Types canal](https://go.dev/ref/spec#Channel_types)
- [Go by Example : Canaux](https://gobyexample.com/fr/channels)
