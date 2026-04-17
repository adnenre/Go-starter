---
title: Maps
sidebar:
  order: 3
  label: 4.3 Maps
---

## Contexte

Une map est une collection non ordonnée de paires clé‑valeur. Les clés doivent être de types comparables. Les maps sont des types référence ; une map `nil` se comporte comme une map vide mais ne peut pas être assignée.

## Exemple

Créer, insérer, rechercher et supprimer des entrées.

## Code exemple

```go
package main

import "fmt"

func main() {
    m := make(map[string]int)
    m["pomme"] = 5
    m["banane"] = 7

    fmt.Println(m["pomme"])
    fmt.Println(len(m))

    delete(m, "banane")

    valeur, ok := m["banane"]
    fmt.Printf("valeur=%d, ok=%v\n", valeur, ok)

    littéral := map[string]int{"x": 1, "y": 2}
    fmt.Println(littéral)
}
```

## Sortie

```bash
5
2
valeur=0, ok=false
map[x:1 y:2]
```

## Liens utiles

- [Blog Go : Les maps en action](https://go.dev/blog/maps)
- [Go by Example : Maps](https://gobyexample.com/fr/maps)
