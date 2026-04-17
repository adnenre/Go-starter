---
title: Interfaces standard communes
sidebar:
  order: 4
  label: 7.4 Interfaces standard communes
---

## Contexte

La bibliothèque standard de Go définit de nombreuses interfaces utiles. Les plus courantes sont :

- `fmt.Stringer` – pour les types qui peuvent se décrire sous forme de chaîne (`String() string`)
- `error` – l'interface d'erreur intégrée (`Error() string`)
- `io.Reader` et `io.Writer` – pour lire et écrire des flux d'octets
- `sort.Interface` – pour trier des collections personnalisées

## Exemple

Implémenter `fmt.Stringer` pour un type `Personne`.

## Code exemple

```go
package main

import "fmt"

type Personne struct {
    Nom string
    Age int
}

func (p Personne) String() string {
    return fmt.Sprintf("%s (%d ans)", p.Nom, p.Age)
}

func main() {
    alice := Personne{"Alice", 30}
    fmt.Println(alice) // fmt.Print utilise String() automatiquement
}
```

## Sortie

```bash
Alice (30 ans)
```

## Liens utiles

- [Documentation fmt.Stringer](https://pkg.go.dev/fmt#Stringer)
- [Package io](https://pkg.go.dev/io)
- [Package sort](https://pkg.go.dev/sort)
