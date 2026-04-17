---
title: Projet – Filter Map Reduce génériques
sidebar:
  order: 5
  label: 8.5 Projet – Filter Map Reduce génériques
---

## Contexte

Construisez une petite bibliothèque de fonctions génériques d'ordre supérieur : `Filter`, `Map` et `Reduce`. Ce sont des utilitaires courants de programmation fonctionnelle. Utilisez des paramètres de type et des contraintes.

Ce projet démontre :

- Les fonctions génériques
- Les types fonction comme paramètres
- L'inférence de type

## Code pas à pas

```go
package main

import "fmt"

// Filter retourne une nouvelle slice contenant uniquement les éléments pour lesquels pred retourne true.
func Filter[T any](slice []T, pred func(T) bool) []T {
    resultat := make([]T, 0, len(slice))
    for _, v := range slice {
        if pred(v) {
            resultat = append(resultat, v)
        }
    }
    return resultat
}

// Map transforme chaque élément de la slice en utilisant la fonction transform.
func Map[T, U any](slice []T, transform func(T) U) []U {
    resultat := make([]U, len(slice))
    for i, v := range slice {
        resultat[i] = transform(v)
    }
    return resultat
}

// Reduce combine les éléments de la slice en utilisant la fonction accumulateur.
func Reduce[T, U any](slice []T, initial U, accumulateur func(U, T) U) U {
    resultat := initial
    for _, v := range slice {
        resultat = accumulateur(resultat, v)
    }
    return resultat
}

func main() {
    nombres := []int{1, 2, 3, 4, 5, 6}

    // Filter les nombres pairs
    pairs := Filter(nombres, func(n int) bool { return n%2 == 0 })
    fmt.Println("Pairs :", pairs)

    // Map : élever au carré chaque nombre
    carres := Map(nombres, func(n int) int { return n * n })
    fmt.Println("Carrés :", carres)

    // Reduce : somme de tous les nombres
    somme := Reduce(nombres, 0, func(acc, n int) int { return acc + n })
    fmt.Println("Somme :", somme)

    // Combinaison : somme des carrés des nombres pairs
    resultat := Reduce(
        Filter(nombres, func(n int) bool { return n%2 == 0 }),
        0,
        func(acc, n int) int { return acc + n*n },
    )
    fmt.Println("Somme des carrés des pairs :", resultat)
}
```

## Sortie

```bash
Pairs : [2 4 6]
Carrés : [1 4 9 16 25 36]
Somme : 21
Somme des carrés des pairs : 56
```

## Liens utiles

- [Tutoriel génériques Go](https://go.dev/doc/tutorial/generics)
- [Programmation fonctionnelle en Go avec génériques](https://go.dev/blog/intro-generics)
