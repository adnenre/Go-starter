---
title: Nombres aléatoires
sidebar:
  order: 16
  label: 4.16 Nombres aléatoires
---

## Contexte

Le package `math/rand` génère des nombres pseudo‑aléatoires. Pour un aléatoire cryptographique, utilisez `crypto/rand`. Depuis Go 1.20, le générateur global est initialisé automatiquement.

## Exemple

Générer des entiers, des flottants et des permutations aléatoires.

## Code exemple

```go
package main

import (
    "fmt"
    "math/rand"
)

func main() {
    fmt.Println(rand.Intn(100))       // 0-99
    fmt.Println(rand.Float64())       // 0.0-1.0
    fmt.Println(rand.Int())           // non négatif

    // Permutation de [0..n)
    perm := rand.Perm(5)
    fmt.Println(perm)
}
```

## Sortie (exemple)

```bash
42
0.123456789
1234567890123456789
[2 0 4 1 3]
```

## Liens utiles

- [Package math/rand](https://pkg.go.dev/math/rand)
- [Go by Example : Nombres aléatoires](https://gobyexample.com/fr/random-numbers)
