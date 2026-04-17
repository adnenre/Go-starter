---
title: Fonctions variadiques
sidebar:
  order: 3
  label: 5.3 Fonctions variadiques
---

## Contexte

Les fonctions variadiques acceptent un nombre variable d'arguments. Le dernier paramètre est déclaré avec `...T` et se comporte à l'intérieur de la fonction comme une slice de type `[]T`.

## Exemple

Écrire une fonction variadique qui additionne un nombre quelconque d'entiers.

## Code exemple

```go
package main

import "fmt"

func somme(nombres ...int) int {
    total := 0
    for _, n := range nombres {
        total += n
    }
    return total
}

func main() {
    fmt.Println(somme(1, 2, 3))
    fmt.Println(somme(4, 5, 6, 7))

    // Passage d'une slice à une fonction variadique
    nums := []int{10, 20, 30}
    fmt.Println(somme(nums...))
}
```

## Sortie

```bash
6
22
60
```

## Liens utiles

- [Go by Example : Fonctions variadiques](https://gobyexample.com/fr/variadic-functions)
- [Spécification Go : Types de fonctions (variadique)](https://go.dev/ref/spec#Function_types)
