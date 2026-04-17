---
title: Expressions régulières
sidebar:
  order: 10
  label: 4.10 Expressions régulières
---

## Contexte

Le package `regexp` permet la recherche et le filtrage par expressions régulières. Il utilise la syntaxe RE2 (pas de retour arrière, temps linéaire garanti).

## Exemple

Chercher un motif et extraire des sous‑chaînes.

## Code exemple

```go
package main

import (
    "fmt"
    "regexp"
)

func main() {
    pattern := regexp.MustCompile(`(\w+)=(\d+)`)
    s := "age=30 nom=Alice taille=175"

    correspondances := pattern.FindAllStringSubmatch(s, -1)
    for _, m := range correspondances {
        fmt.Printf("clé=%s, valeur=%s\n", m[1], m[2])
    }

    // Vérifier s'il y a correspondance
    fmt.Println(pattern.MatchString("foo=123"))
}
```

## Sortie

```bash
clé=age, valeur=30
clé=nom, valeur=Alice
clé=taille, valeur=175
true
```

## Liens utiles

- [Documentation du package regexp](https://pkg.go.dev/regexp)
- [Go by Example : Expressions régulières](https://gobyexample.com/fr/regular-expressions)
