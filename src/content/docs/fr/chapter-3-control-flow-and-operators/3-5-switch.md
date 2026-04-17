---
title: Switch
sidebar:
  order: 5
  label: 3.5 Switch
---

## Contexte

En Go, `switch` est très flexible :

- Pas de rupture implicite (`break` automatique entre les cas).
- Les cas peuvent être des listes de valeurs.
- On peut utiliser un `switch` sans expression (équivalent à une chaîne `if-else`).
- Le `fallthrough` permet de passer au cas suivant (rare).

## Exemple

Déterminer le type de jour, ou utiliser un switch sans expression.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    jour := time.Now().Weekday()

    switch jour {
    case time.Saturday, time.Sunday:
        fmt.Println("C'est le weekend !")
    default:
        fmt.Println("C'est un jour de semaine.")
    }

    // Switch sans expression
    x := 10
    switch {
    case x > 0:
        fmt.Println("x est positif")
    case x < 0:
        fmt.Println("x est négatif")
    default:
        fmt.Println("x est nul")
    }

    // fallthrough (peu recommandé)
    a := 2
    switch a {
    case 1:
        fmt.Println("un")
    case 2:
        fmt.Println("deux")
        fallthrough
    case 3:
        fmt.Println("trois (fallthrough)")
    }
}
```

## Sortie (exemple selon jour)

```bash
C'est un jour de semaine.
x est positif
deux
trois (fallthrough)
```

## Liens utiles

- [Spécification Go : Switch](https://go.dev/ref/spec#Switch_statements)
- [Go by Example : Switch](https://gobyexample.com/fr/switch)
