---
title: Parcours de canaux avec range
sidebar:
  order: 10
  label: 9.10 Parcours de canaux avec range
---

## Contexte

La boucle `for range` peut itérer sur les valeurs envoyées sur un canal jusqu'à ce que le canal soit fermé. C'est une manière propre de recevoir toutes les valeurs.

## Exemple

Envoyer plusieurs valeurs et utiliser `range` pour les recevoir.

## Code exemple

```go
package main

import "fmt"

func main() {
    ch := make(chan int, 3)
    ch <- 10
    ch <- 20
    ch <- 30
    close(ch)

    for v := range ch {
        fmt.Println(v)
    }
}
```

## Sortie

```bash
10
20
30
```

## Liens utiles

- [Spécification Go : For range](https://go.dev/ref/spec#For_range)
- [Go by Example : Parcours de canaux](https://gobyexample.com/fr/range-over-channels)
