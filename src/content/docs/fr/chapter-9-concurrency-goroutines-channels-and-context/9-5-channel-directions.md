---
title: Directions de canaux
sidebar:
  order: 5
  label: 9.5 Directions de canaux
---

## Contexte

Lorsque vous utilisez des canaux comme paramètres de fonction, vous pouvez spécifier leur direction : `chan<- T` (envoi seulement) ou `<-chan T` (réception seulement). Cela améliore la sécurité de type.

## Exemple

Passer un canal en envoi seulement à un producteur et un canal en réception seulement à un consommateur.

## Code exemple

```go
package main

import "fmt"

func producteur(out chan<- int) {
    for i := 0; i < 3; i++ {
        out <- i
    }
    close(out)
}

func consommateur(in <-chan int) {
    for v := range in {
        fmt.Println(v)
    }
}

func main() {
    ch := make(chan int)
    go producteur(ch)
    consommateur(ch)
}
```

## Sortie

```bash
0
1
2
```

## Liens utiles

- [Spécification Go : Types canal](https://go.dev/ref/spec#Channel_types)
- [Go by Example : Directions de canaux](https://gobyexample.com/fr/channel-directions)
