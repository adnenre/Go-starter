---
title: Conditionnels if else
sidebar:
  order: 1
  label: 3.1 Conditionnels if else
---

## Contexte

En Go, les conditions `if` et `if-else` s'écrivent sans parenthèses autour de la condition. Les accolades sont obligatoires.

On peut également utiliser une **instruction courte** (short statement) avant la condition, avec la même portée que le bloc `if`.

## Exemple

Vérifier si un nombre est positif, négatif ou nul.

## Code exemple

```go
package main

import "fmt"

func main() {
    x := 5

    if x > 0 {
        fmt.Println(x, "est positif")
    } else if x < 0 {
        fmt.Println(x, "est négatif")
    } else {
        fmt.Println(x, "est nul")
    }

    // Short statement
    if y := -3; y < 0 {
        fmt.Println(y, "est négatif")
    }
    // y n'est pas accessible ici
}
```

## Sortie

```bash
5 est positif
-3 est négatif
```

## Liens utiles

- [Spécification Go : instructions if](https://go.dev/ref/spec#If_statements)
- [Go by Example : If/Else](https://gobyexample.com/fr/if-else)
