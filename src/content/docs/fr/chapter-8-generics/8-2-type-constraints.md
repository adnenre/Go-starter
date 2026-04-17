---
title: Contraintes de type
sidebar:
  order: 2
  label: 8.2 Contraintes de type
---

## Contexte

Les contraintes de type limitent les types qui peuvent être utilisés comme arguments de type. La contrainte intégrée `any` autorise tous les types. `comparable` autorise les types qui peuvent être comparés avec `==` et `!=`. Vous pouvez également définir des contraintes personnalisées en utilisant une interface.

## Exemple

Utiliser `comparable` pour vérifier si une slice contient une certaine valeur.

## Code exemple

```go
package main

import "fmt"

func Contient[T comparable](slice []T, valeur T) bool {
    for _, v := range slice {
        if v == valeur {
            return true
        }
    }
    return false
}

func main() {
    ints := []int{1, 2, 3}
    fmt.Println(Contient(ints, 2)) // true
    fmt.Println(Contient(ints, 5)) // false

    strs := []string{"pomme", "banane"}
    fmt.Println(Contient(strs, "banane")) // true
}
```

## Sortie

```bash
true
false
true
```

## Liens utiles

- [Spécification Go : Contraintes de type](https://go.dev/ref/spec#Type_constraints)
- [Go by Example : Génériques](https://gobyexample.com/fr/generics)
