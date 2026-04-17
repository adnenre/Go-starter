---
title: Embedding de structures
sidebar:
  order: 5
  label: 4.5 Embedding de structures
---

## Contexte

Go supporte la **composition** via l'embedding de structures (similaire aux mixins). Les champs et méthodes de la structure embarquée sont remontés dans la structure englobante.

## Exemple

Embedder `Personne` dans `Employe`.

## Code exemple

```go
package main

import "fmt"

type Personne struct {
    Nom string
    Age int
}

type Employe struct {
    Personne     // embed
    ID           int
    Departement  string
}

func main() {
    e := Employe{
        Personne:    Personne{Nom: "Alice", Age: 30},
        ID:          123,
        Departement: "Ingénierie",
    }

    // Accès direct aux champs remontés
    fmt.Println(e.Nom, e.Age, e.ID, e.Departement)
}
```

## Sortie

```bash
Alice 30 123 Ingénierie
```

## Liens utiles

- [Spécification Go : embedding de structures](https://go.dev/ref/spec#Struct_types)
- [Go by Example : Embedding](https://gobyexample.com/fr/struct-embedding)
