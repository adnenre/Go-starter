---
title: Méthodes
sidebar:
  order: 5
  label: 5.5 Méthodes
---

## Contexte

Go n'a pas de classes, mais vous pouvez définir des méthodes sur des types. Une méthode est une fonction avec un **récepteur** spécial. Le récepteur peut être une valeur ou un pointeur. Les méthodes permettent d'associer un comportement à des types personnalisés.

## Exemple

Définir une structure `Rectangle` et des méthodes pour calculer l'aire et le périmètre.

## Code exemple

```go
package main

import "fmt"

type Rectangle struct {
    Largeur, Hauteur float64
}

// Récepteur valeur (ne modifie pas l'original)
func (r Rectangle) Aire() float64 {
    return r.Largeur * r.Hauteur
}

// Récepteur pointeur (peut modifier la structure)
func (r *Rectangle) Echelle(facteur float64) {
    r.Largeur *= facteur
    r.Hauteur *= facteur
}

func main() {
    rect := Rectangle{Largeur: 10, Hauteur: 5}
    fmt.Println("Aire :", rect.Aire())

    rect.Echelle(2)
    fmt.Println("Après mise à l'échelle, aire :", rect.Aire())
}
```

## Sortie

```bash
Aire : 50
Après mise à l'échelle, aire : 200
```

## Liens utiles

- [Go by Example : Méthodes](https://gobyexample.com/fr/methods)
- [Spécification Go : Déclarations de méthode](https://go.dev/ref/spec#Method_declarations)
