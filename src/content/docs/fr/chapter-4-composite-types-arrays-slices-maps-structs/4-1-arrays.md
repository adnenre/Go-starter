---
title: Tableaux
sidebar:
  order: 1
  label: 4.1 Tableaux
---

## Contexte

Un tableau est une séquence de taille fixe d'éléments d'un même type. La taille fait partie du type (ex. `[5]int`). Les tableaux sont des **types valeur** – les assigner copie tout le tableau.

## Exemple

Déclarer, initialiser et parcourir des tableaux.

## Code exemple

```go
package main

import "fmt"

func main() {
var a [3]int // tableau initialisé à zéro [0,0,0]
b := [4]int{1, 2, 3, 4} // littéral
c := [...]int{10, 20, 30} // taille déduite

    a[0] = 42
    fmt.Println(a, b, c)

    // Parcours
    for i, v := range c {
        fmt.Printf("c[%d] = %d\n", i, v)
    }

}
```

## Sortie

```bash
[42 0 0] [1 2 3 4] [10 20 30]
c[0] = 10
c[1] = 20
c[2] = 30
```

## Liens utiles

- [Spécification Go : types tableau](https://go.dev/ref/spec#Array_types)
- [Go by Example : Tableaux](https://gobyexample.com/fr/arrays)
