---
title: Visibilité
sidebar:
  order: 2
  label: 6.2 Visibilité
---

## Contexte

En Go, la visibilité est déterminée par la casse. Les identifiants commençant par une lettre majuscule sont **exportés** (visibles en dehors du paquet). Les identifiants en minuscule sont **non exportés** (privés au paquet).

## Exemple

Créez un paquet avec des identifiants exportés et non exportés.

## Code exemple

```go
// personne.go
package personne

type Personne struct {
    Nom string // exporté
    age int    // non exporté
}

func Nouveau(nom string, age int) Personne {
    return Personne{Nom: nom, age: age}
}

func (p Personne) GetAge() int { // exporté
    return p.age
}
```

```go
// main.go
package main

import (
    "fmt"
    "personne"
)

func main() {
    p := personne.Nouveau("Alice", 30)
    fmt.Println(p.Nom) // ok
    // fmt.Println(p.age) // erreur : age non exporté
    fmt.Println(p.GetAge()) // ok
}
```

## Sortie

```bash
Alice
30
```

## Liens utiles

- [Spécification Go : Identifiants exportés](https://go.dev/ref/spec#Exported_identifiers)
- [Go by Example : Visibilité](https://gobyexample.com/fr/visibility)
