---
title: Paramètres de type
sidebar:
  order: 1
  label: 8.1 Paramètres de type
---

## Contexte

Les génériques (introduits en Go 1.18) permettent d'écrire des fonctions et des types qui fonctionnent avec **n'importe quel** type, tout en préservant la sécurité de type. Un paramètre de type est déclaré avec des crochets : `func F[T any](x T) T`. La contrainte `any` signifie que tous les types sont autorisés.

## Exemple

Écrire une fonction générique `Reverse` qui fonctionne sur n'importe quelle slice.

## Code exemple

```go
package main

import "fmt"

func Reverse[T any](s []T) []T {
    resultat := make([]T, len(s))
    for i, v := range s {
        resultat[len(s)-1-i] = v
    }
    return resultat
}

func main() {
    ints := []int{1, 2, 3, 4}
    fmt.Println(Reverse(ints))

    strs := []string{"a", "b", "c"}
    fmt.Println(Reverse(strs))
}
```

## Sortie

```bash
[4 3 2 1]
[c b a]
```

## Liens utiles

- [Blog Go : Génériques](https://go.dev/blog/intro-generics)
- [Spécification Go : Paramètres de type](https://go.dev/ref/spec#Type_parameter_declarations)
