---
title: Gestion des erreurs
sidebar:
  order: 6
  label: 5.6 Gestion des erreurs
---

## Contexte

Go utilise une gestion d'erreur explicite. Les fonctions qui peuvent échouer retournent une `error` en dernière valeur de retour. L'appelant doit vérifier l'erreur. Le package `errors` fournit `errors.New` pour créer des messages d'erreur simples, et `fmt.Errorf` permet le formatage.

## Exemple

Une fonction qui divise deux entiers, retournant une erreur en cas de division par zéro.

## Code exemple

```go
package main

import (
    "errors"
    "fmt"
)

func diviser(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division par zéro")
    }
    return a / b, nil
}

func main() {
    resultat, err := diviser(10, 2)
    if err != nil {
        fmt.Println("Erreur :", err)
    } else {
        fmt.Println("Résultat :", resultat)
    }

    resultat, err = diviser(5, 0)
    if err != nil {
        fmt.Println("Erreur :", err)
    } else {
        fmt.Println("Résultat :", resultat)
    }
}
```

## Sortie

```bash
Résultat : 5
Erreur : division par zéro
```

## Liens utiles

- [Go by Example : Erreurs](https://gobyexample.com/fr/errors)
- [Blog Go : Gestion d'erreur et Go](https://go.dev/blog/error-handling-and-go)
