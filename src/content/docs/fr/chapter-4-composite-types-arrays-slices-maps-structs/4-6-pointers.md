---
title: Pointeurs
sidebar:
  order: 6
  label: 4.6 Pointeurs
---

## Contexte

Un pointeur contient l'adresse mémoire d'une valeur. Utilisez `*T` pour un pointeur vers `T`, et `&` pour obtenir l'adresse. Go n'a pas d'arithmétique des pointeurs (sauf via `unsafe`).

## Exemple

Passage par valeur vs par référence.

## Code exemple

```go
package main

import "fmt"

func zeroVal(x int) {
    x = 0
}

func zeroPtr(x *int) {
    *x = 0
}

func main() {
    a := 42
    zeroVal(a)
    fmt.Println(a)      // toujours 42

    zeroPtr(&a)
    fmt.Println(a)      // maintenant 0

    // pointeur nil
    var p *int
    if p == nil {
        fmt.Println("p est nil")
    }
}
```

## Sortie

```bash
42
0
p est nil
```

## Liens utiles

- [Go by Example : Pointeurs](https://gobyexample.com/fr/pointers)
- [Spécification Go : types pointeur](https://go.dev/ref/spec#Pointer_types)
