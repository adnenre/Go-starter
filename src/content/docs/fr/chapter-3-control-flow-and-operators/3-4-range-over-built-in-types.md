---
title: Range sur types natifs
sidebar:
  order: 4
  label: 3.4 Range sur types natifs
---

## Contexte

Le mot‑clé `range` permet d'itérer sur des slices, des tableaux, des maps, des chaînes (runes) et des canaux. Il retourne un ou deux indices selon le type.

- **Slices/tableaux** : `index, valeur`
- **Maps** : `clé, valeur`
- **Chaînes** : `position (en octets), rune`
- **Canaux** : `valeur` (un seul paramètre)

## Exemple

Parcourir une slice, une map et une chaîne.

## Code exemple

```go
package main

import "fmt"

func main() {
    // Slice
    nums := []int{2, 4, 6}
    for i, v := range nums {
        fmt.Printf("index=%d, valeur=%d\n", i, v)
    }

    // Map
    couleurs := map[string]string{"rouge": "#FF0000", "vert": "#00FF00"}
    for cle, valeur := range couleurs {
        fmt.Printf("%s -> %s\n", cle, valeur)
    }

    // Chaîne (rune par rune)
    for pos, r := range "Hello, 世界" {
        fmt.Printf("%d: %c\n", pos, r)
    }
}
```

## Sortie

```bash
index=0, valeur=2
index=1, valeur=4
index=2, valeur=6
rouge -> #FF0000
vert -> #00FF00
0: H
1: e
2: l
3: l
4: o
5: ,
6:
7: 世
10: 界
```

## Liens utiles

- [Spécification Go : Range clause](https://go.dev/ref/spec#RangeClause)
- [Go by Example : Range](https://gobyexample.com/fr/range)
