---
title: Instruction select
sidebar:
  order: 6
  label: 9.6 Instruction select
---

## Contexte

L'instruction `select` permet à une goroutine d'attendre sur plusieurs opérations de canal. Elle bloque jusqu'à ce qu'une de ses clauses puisse progresser. Si plusieurs sont prêtes, une est choisie aléatoirement.

## Exemple

Attendre sur deux canaux et afficher celui qui reçoit le premier.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "un"
    }()
    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "deux"
    }()

    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println("Reçu", msg1)
        case msg2 := <-ch2:
            fmt.Println("Reçu", msg2)
        }
    }
}
```

## Sortie

```bash
Reçu un
Reçu deux
```

## Liens utiles

- [Spécification Go : Select](https://go.dev/ref/spec#Select_statements)
- [Go by Example : Select](https://gobyexample.com/fr/select)
