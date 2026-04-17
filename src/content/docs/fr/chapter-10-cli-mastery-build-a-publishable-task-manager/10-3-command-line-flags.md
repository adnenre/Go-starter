---
title: Drapeaux en ligne de commande
sidebar:
  order: 3
  label: 10.3 Drapeaux en ligne de commande
---

## Contexte

Le package `flag` fournit une analyse standard des drapeaux. Les drapeaux peuvent être de type `string`, `int`, `bool`, `duration`, etc. Utilisez `flag.String`, `flag.Int`, etc., puis appelez `flag.Parse()`.

## Exemple

Définir des drapeaux pour le nom et l'âge.

## Code exemple

```go
package main

import (
    "flag"
    "fmt"
)

func main() {
    nom := flag.String("nom", "Monde", "nom à saluer")
    age := flag.Int("age", 0, "âge de la personne")
    verbeux := flag.Bool("verbeux", false, "activer la sortie verbeuse")
    flag.Parse()

    fmt.Printf("Bonjour, %s\n", *nom)
    if *verbeux {
        fmt.Printf("Âge : %d\n", *age)
    }
}
```

## Sortie (exécuté comme `./saluer -nom Alice -age 30 -verbeux`)

```bash
Bonjour, Alice
Âge : 30
```

## Liens utiles

- [Documentation du package flag](https://pkg.go.dev/flag)
- [Go by Example : Drapeaux en ligne de commande](https://gobyexample.com/fr/command-line-flags)
