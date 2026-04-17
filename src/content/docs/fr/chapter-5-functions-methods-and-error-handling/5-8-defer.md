---
title: Defer
sidebar:
  order: 8
  label: 5.8 Defer
---

## Contexte

L'instruction `defer` reporte l'exécution d'une fonction jusqu'à ce que la fonction englobante se termine. Elle est couramment utilisée pour les actions de nettoyage (fermeture de fichiers, déverrouillage de mutex). Les appels différés sont exécutés dans l'ordre LIFO (dernier entré, premier sorti).

## Exemple

Utiliser `defer` pour fermer un fichier et pour démontrer l'ordre LIFO.

## Code exemple

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    // Exemple LIFO
    defer fmt.Println("premier différé (exécuté en dernier)")
    defer fmt.Println("deuxième différé")
    defer fmt.Println("troisième différé (exécuté en premier)")

    // Utilisation pratique : fermeture de fichier
    fichier, err := os.Create("exemple.txt")
    if err != nil {
        fmt.Println("Erreur lors de la création du fichier")
        return
    }
    defer fichier.Close() // sera exécuté avant la sortie de main

    fichier.WriteString("Bonjour, defer!")
    fmt.Println("Fichier écrit")
}
```

## Sortie

```bash
Fichier écrit
troisième différé (exécuté en premier)
deuxième différé
premier différé (exécuté en dernier)
```

## Liens utiles

- [Go by Example : Defer](https://gobyexample.com/fr/defer)
- [Spécification Go : Instructions defer](https://go.dev/ref/spec#Defer_statements)
