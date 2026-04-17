---
title: Projet – Interface Shape
sidebar:
  order: 6
  label: 7.6 Projet – Interface Shape
---

## Contexte

Construisez un programme qui définit une interface `Shape` avec les méthodes `Area()` et `Perimeter()`. Implémentez les types concrets `Cercle`, `Rectangle` et `Triangle`. Écrivez ensuite une fonction qui affiche les détails de n'importe quelle forme.

Ce projet démontre :

- Déclaration et implémentation d'interface
- Polymorphisme via les interfaces
- Définition de méthodes sur les structures

## Code pas à pas

```go
package main

import (
    "fmt"
    "math"
)

// Interface Shape
type Shape interface {
    Aire() float64
    Perimetre() float64
}

// Cercle
type Cercle struct {
    Rayon float64
}

func (c Cercle) Aire() float64 {
    return math.Pi * c.Rayon * c.Rayon
}

func (c Cercle) Perimetre() float64 {
    return 2 * math.Pi * c.Rayon
}

// Rectangle
type Rectangle struct {
    Largeur, Hauteur float64
}

func (r Rectangle) Aire() float64 {
    return r.Largeur * r.Hauteur
}

func (r Rectangle) Perimetre() float64 {
    return 2 * (r.Largeur + r.Hauteur)
}

// Triangle équilatéral
type Triangle struct {
    Cote float64
}

func (t Triangle) Aire() float64 {
    return (math.Sqrt(3) / 4) * t.Cote * t.Cote
}

func (t Triangle) Perimetre() float64 {
    return 3 * t.Cote
}

// Fonction qui fonctionne avec n'importe quelle Shape
func afficherInfos(s Shape) {
    fmt.Printf("Aire : %.2f, Périmètre : %.2f\n", s.Aire(), s.Perimetre())
}

func main() {
    formes := []Shape{
        Cercle{Rayon: 5},
        Rectangle{Largeur: 4, Hauteur: 7},
        Triangle{Cote: 3},
    }

    for _, f := range formes {
        afficherInfos(f)
    }
}
```

## Sortie

```bash
Aire : 78.54, Périmètre : 31.42
Aire : 28.00, Périmètre : 22.00
Aire : 3.90, Périmètre : 9.00
```

## Liens utiles

- [Go by Example : Interfaces](https://gobyexample.com/fr/interfaces)
- [Effective Go : Interfaces](https://go.dev/doc/effective_go#interfaces)
