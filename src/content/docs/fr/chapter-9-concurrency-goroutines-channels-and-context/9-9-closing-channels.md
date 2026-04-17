---
title: Fermeture de canaux
sidebar:
  order: 9
  label: 9.9 Fermeture de canaux
---

## Contexte

Vous pouvez fermer un canal avec `close(ch)`. Les récepteurs peuvent tester si un canal est fermé en utilisant `v, ok := <-ch`. Envoyer sur un canal fermé provoque une panique.

## Exemple

Fermer un canal et détecter la fermeture.

## Code exemple

```go
package main

import "fmt"

func main() {
    ch := make(chan int, 2)
    ch <- 1
    ch <- 2
    close(ch)

    for i := 0; i < 3; i++ {
        v, ok := <-ch
        fmt.Printf("valeur=%d, ok=%t\n", v, ok)
    }
}
```

## Sortie

```bash
valeur=1, ok=true
valeur=2, ok=true
valeur=0, ok=false
```

## Liens utiles

- [Spécification Go : Close](https://go.dev/ref/spec#Close)
- [Go by Example : Fermeture de canaux](https://gobyexample.com/fr/closing-channels)
