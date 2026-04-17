---
title: Types génériques
sidebar:
  order: 3
  label: 8.3 Types génériques
---

## Contexte

Vous pouvez définir des structures, interfaces et alias génériques. Le paramètre de type apparaît après le nom du type entre crochets. Les types génériques peuvent avoir des méthodes, mais les méthodes ne peuvent pas avoir de paramètres de type supplémentaires (le paramètre du récepteur est fixe).

## Exemple

Définir une `Pile[T]` générique avec les méthodes `Empiler` et `Depiler`.

## Code exemple

```go
package main

import "fmt"

type Pile[T any] struct {
    elements []T
}

func (p *Pile[T]) Empiler(item T) {
    p.elements = append(p.elements, item)
}

func (p *Pile[T]) Depiler() (T, bool) {
    if len(p.elements) == 0 {
        var zero T
        return zero, false
    }
    dernier := p.elements[len(p.elements)-1]
    p.elements = p.elements[:len(p.elements)-1]
    return dernier, true
}

func main() {
    pileInt := Pile[int]{}
    pileInt.Empiler(10)
    pileInt.Empiler(20)
    fmt.Println(pileInt.Depiler()) // 20, true
    fmt.Println(pileInt.Depiler()) // 10, true
    fmt.Println(pileInt.Depiler()) // 0, false
}
```

## Sortie

```bash
20 true
10 true
0 false
```

## Liens utiles

- [Spécification Go : Types génériques](https://go.dev/ref/spec#Type_definitions)
- [Tutoriel génériques Go](https://go.dev/doc/tutorial/generics)
