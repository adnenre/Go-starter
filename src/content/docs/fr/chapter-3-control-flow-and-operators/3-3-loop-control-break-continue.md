---
title: Contrôle de boucle break continue
sidebar:
  order: 3
  label: 3.3 Contrôle de boucle break continue
---

## Contexte

À l'intérieur des boucles, `break` interrompt la boucle la plus interne. `continue` passe à l'itération suivante.

On peut aussi utiliser des **labels** pour sortir de boucles imbriquées.

## Exemple

Utilisation de `break`, `continue` et d'un label.

## Code exemple

```go
package main

import "fmt"

func main() {
    // continue
    for i := 0; i < 5; i++ {
        if i%2 == 0 {
            continue
        }
        fmt.Print(i, " ")
    }
    fmt.Println()

    // break
    for i := 0; i < 10; i++ {
        if i == 3 {
            break
        }
        fmt.Print(i, " ")
    }
    fmt.Println()

    // label pour sortir de deux boucles
outer:
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if i == 1 && j == 1 {
                break outer
            }
            fmt.Printf("(%d,%d) ", i, j)
        }
    }
    fmt.Println()
}
```

## Sortie

```bash
1 3
0 1 2
(0,0) (0,1) (0,2) (1,0)
```

## Liens utiles

- [Spécification Go : Break, Continue](https://go.dev/ref/spec#Break_statements)
- [Go by Example : Break and Continue](https://gobyexample.com/fr/break-and-continue)
