---
title: Slices
sidebar:
  order: 2
  label: 4.2 Slices
---

## Contexte

Une slice est une vue dynamique et flexible sur un tableau. Contrairement aux tableaux, les slices sont des **types référence** et sont beaucoup plus utilisées. Elles consistent en un pointeur, une longueur et une capacité.

## Exemple

Créer des slices avec des littéraux, `make`, et le slicing.

## Code exemple

```go
package main

import "fmt"

func main() {
    s1 := []int{1, 2, 3}          // littéral slice
    s2 := make([]int, 3, 5)       // longueur 3, capacité 5
    s3 := s1[1:3]                 // slice des indices 1 à 2

    s2[0] = 10
    s1 = append(s1, 4, 5)         // agrandissement dynamique

    fmt.Println(s1, len(s1), cap(s1))
    fmt.Println(s2, len(s2), cap(s2))
    fmt.Println(s3)
}
```

## Sortie

```bash
[1 2 3 4 5] 5 8
[10 0 0] 3 5
[2 3]
```

## Liens utiles

- [Blog Go : Slices](https://go.dev/blog/slices-intro)
- [Go by Example : Slices](https://gobyexample.com/fr/slices)
