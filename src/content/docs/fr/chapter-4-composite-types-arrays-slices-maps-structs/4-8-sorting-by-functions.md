---
title: Tri avec fonctions personnalisées
sidebar:
  order: 8
  label: 4.8 Tri avec fonctions personnalisées
---

## Contexte

Pour un tri personnalisé (par exemple par champ d'une structure), utilisez `sort.Slice` avec une fonction "moins". Cela évite d'implémenter `sort.Interface`.

## Exemple

Trier une slice de structures par âge puis par nom.

## Code exemple

```go
package main

import (
    "fmt"
    "sort"
)

type Personne struct {
    Nom string
    Age int
}

func main() {
    personnes := []Personne{
        {"Alice", 30},
        {"Bob", 25},
        {"Charlie", 35},
    }

    // Tri par âge croissant
    sort.Slice(personnes, func(i, j int) bool {
        return personnes[i].Age < personnes[j].Age
    })
    fmt.Println("Par âge :", personnes)

    // Tri par nom décroissant
    sort.Slice(personnes, func(i, j int) bool {
        return personnes[i].Nom > personnes[j].Nom
    })
    fmt.Println("Par nom décroissant :", personnes)
}
```

## Sortie

```bash
Par âge : [{Bob 25} {Alice 30} {Charlie 35}]
Par nom décroissant : [{Charlie 35} {Bob 25} {Alice 30}]
```

## Liens utiles

- [Documentation sort.Slice](https://pkg.go.dev/sort#Slice)
- [Go by Example : Tri avec fonctions](https://gobyexample.com/fr/sorting-by-functions)
