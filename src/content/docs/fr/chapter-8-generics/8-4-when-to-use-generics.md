---
title: Quand utiliser les génériques
sidebar:
  order: 4
  label: 8.4 Quand utiliser les génériques
---

## Contexte

Les génériques sont puissants mais pas toujours nécessaires. Utilisez les génériques quand :

- Vous écrivez des fonctions qui travaillent sur des slices, maps ou canaux de n'importe quel type (ex. `Reverse`, `Map`, `Filter`).
- Vous avez besoin d'une structure de données conteneur (comme une pile, une file, un arbre) qui fonctionne avec plusieurs types.
- Vous voulez éviter la duplication de code pour des algorithmes similaires.

**Évitez les génériques quand :**

- Une simple interface (avec méthodes) suffit.
- Le paramètre de type n'est utilisé qu'une seule fois.
- La fonction n'a besoin que d'appeler des méthodes – utilisez une interface à la place.

## Exemple

Comparer l'approche générique vs interface.

## Code exemple

```go
package main

import "fmt"

// Approche générique – fonctionne pour tout type implémentant Stringer
func AfficherGenerique[T fmt.Stringer](items []T) {
    for _, item := range items {
        fmt.Println(item.String())
    }
}

// Approche par interface – fonctionne aussi
type Stringer interface {
    String() string
}
func AfficherInterface(items []Stringer) {
    for _, item := range items {
        fmt.Println(item.String())
    }
}

type Personne struct{ Nom string }
func (p Personne) String() string { return p.Nom }

func main() {
    personnes := []Personne{{"Alice"}, {"Bob"}}
    AfficherGenerique(personnes)
    AfficherInterface(personnes)
}
```

## Sortie

```bash
Alice
Bob
Alice
Bob
```

## Liens utiles

- [Blog Go : Quand utiliser les génériques](https://go.dev/blog/when-generics)
- [Effective Go : Conseils sur les génériques](https://go.dev/doc/effective_go#generics)
