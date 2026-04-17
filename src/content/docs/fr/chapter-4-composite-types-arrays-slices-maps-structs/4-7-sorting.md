---
title: Tri
sidebar:
  order: 7
  label: 4.7 Tri
---

## Contexte

Le package `sort` fournit le tri pour les types de base et permet le tri personnalisé via `sort.Interface`. Pour les slices d'entiers, flottants ou chaînes, utilisez `sort.Ints`, `sort.Float64s`, `sort.Strings`.

## Exemple

Trier des slices d'entiers et de chaînes.

## Code exemple

```go
package main

import (
    "fmt"
    "sort"
)

func main() {
    ints := []int{5, 2, 8, 1, 9}
    sort.Ints(ints)
    fmt.Println(ints)

    strs := []string{"banane", "pomme", "cerise"}
    sort.Strings(strs)
    fmt.Println(strs)

    // Vérifier si trié
    fmt.Println(sort.IntsAreSorted(ints))
}
```

## Sortie

```bash
[1 2 5 8 9]
[banane cerise pomme]
true
```

## Liens utiles

- [Documentation du package sort](https://pkg.go.dev/sort)
- [Go by Example : Tri](https://gobyexample.com/fr/sorting)
