---
title: Structures
sidebar:
  order: 4
  label: 4.4 Structures
---

## Contexte

Une structure (struct) est une collection de champs. C'est la principale façon de regrouper des données en Go. Les structs sont des types valeurs, mais on utilise souvent des pointeurs vers struct pour l'efficacité.

## Exemple

Définir une structure, créer des instances et accéder aux champs.

## Code exemple

```go
package main

import "fmt"

type Personne struct {
    Nom string
    Age int
}

func main() {
    p1 := Personne{"Alice", 30}
    p2 := Personne{Nom: "Bob", Age: 25}
    var p3 Personne
    p3.Nom = "Charlie"
    p3.Age = 35

    fmt.Println(p1, p2, p3)

    // Pointeur vers structure
    ptr := &p1
    ptr.Age = 31          // pas besoin de déréférencement
    fmt.Println(p1)
}
```

## Sortie

```bash
{Alice 30} {Bob 25} {Charlie 35}
{Alice 31}
```

## Liens utiles

- [Spécification Go : types structure](https://go.dev/ref/spec#Struct_types)
- [Go by Example : Structures](https://gobyexample.com/fr/structs)
