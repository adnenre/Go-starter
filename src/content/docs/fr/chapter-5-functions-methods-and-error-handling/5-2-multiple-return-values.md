---
title: Retours multiples
sidebar:
  order: 2
  label: 5.2 Retours multiples
---

## Contexte

Les fonctions Go peuvent retourner plusieurs valeurs. Cette fonctionnalité est souvent utilisée pour retourner un résultat accompagné d'une erreur. Les valeurs de retour peuvent être nommées, ce qui sert de documentation et permet un retour nu (naked return).

## Exemple

Retourner le quotient et le reste d'une division.

## Code exemple

```go
package main

import "fmt"

func division(a, b int) (int, int) {
    quotient := a / b
    reste := a % b
    return quotient, reste
}

// Retours nommés
func split(somme int) (x, y int) {
    x = somme / 2
    y = somme - x
    return // retour nu
}

func main() {
    q, r := division(10, 3)
    fmt.Printf("10 / 3 = %d reste %d\n", q, r)

    a, b := split(17)
    fmt.Printf("Split 17 : %d et %d\n", a, b)
}
```

## Sortie

```bash
10 / 3 = 3 reste 1
Split 17 : 8 et 9
```

## Liens utiles

- [Go by Example : Retours multiples](https://gobyexample.com/fr/multiple-return-values)
- [Spécification Go : Instructions de retour](https://go.dev/ref/spec#Return_statements)
