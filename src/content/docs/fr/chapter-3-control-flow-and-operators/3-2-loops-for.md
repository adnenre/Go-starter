---
title: Boucles for
sidebar:
  order: 2
  label: 3.2 Boucles for
---

## Contexte

Go n'a qu'une seule construction de boucle : `for`. Elle peut être utilisée sous trois formes principales :

1. **Classique** : `for initialisation; condition; post {}`
2. **While‑like** : `for condition {}`
3. **Infinie** : `for {}` (à rompre avec `break` ou `return`)

## Exemple

Afficher les nombres de 0 à 4, puis une boucle while, puis une boucle infinie avec break.

## Code exemple

```go
package main

import "fmt"

func main() {
    // Boucle classique
    for i := 0; i < 5; i++ {
        fmt.Print(i, " ")
    }
    fmt.Println()

    // While-like
    j := 0
    for j < 3 {
        fmt.Print(j, " ")
        j++
    }
    fmt.Println()

    // Boucle infinie
    k := 0
    for {
        if k >= 2 {
            break
        }
        fmt.Print(k, " ")
        k++
    }
    fmt.Println()
}
```

## Sortie

```bash
0 1 2 3 4
0 1 2
0 1
```

## Liens utiles

- [Spécification Go : boucles for](https://go.dev/ref/spec#For_statements)
- [Go by Example : For](https://gobyexample.com/fr/for)
