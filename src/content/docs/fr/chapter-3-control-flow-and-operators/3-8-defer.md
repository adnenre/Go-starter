---
title: Defer
sidebar:
  order: 8
  label: 3.8 Defer
---

## Contexte

L'instruction `defer` reporte l'exécution d'une fonction jusqu'à ce que la fonction englobante se termine (après un `return` ou en cas de `panic`). Les appels `defer` sont empilés et exécutés en ordre LIFO (dernier entré, premier sorti).

Utilisation typique : fermeture de fichiers, libération de verrous, nettoyage.

## Exemple

Démontrer l'ordre d'exécution des `defer` et leur utilité.

## Code exemple

```go
package main

import "fmt"

func main() {
    fmt.Println("début")

    // Les defer sont empilés
    defer fmt.Println("premier defer (exécuté en dernier)")
    defer fmt.Println("deuxième defer")
    defer fmt.Println("troisième defer (exécuté en premier)")

    fmt.Println("fin de la fonction")
    // Les defer s'exécutent ici, après le return implicite
}
```

## Sortie

```bash
début
fin de la fonction
troisième defer (exécuté en premier)
deuxième defer
premier defer (exécuté en dernier)
```

## Utilité réelle : fermeture de fichier

```go
f, err := os.Open("fichier.txt")
if err != nil {
    return err
}
defer f.Close() // fermeture garantie
```

## Liens utiles

- [Spécification Go : Defer](https://go.dev/ref/spec#Defer_statements)
- [Go by Example : Defer](https://gobyexample.com/fr/defer)
