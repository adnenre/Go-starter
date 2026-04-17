---
title: Interfaces nil vs valeurs concrètes nil
sidebar:
  order: 5
  label: 7.5 Interfaces nil vs valeurs concrètes nil
---

## Contexte

Une valeur d'interface est un couple `(type, valeur)`. Elle est `nil` seulement si le type et la valeur sont tous deux `nil`. Si vous assignez un pointeur concret `nil` à une interface, l'interface elle‑même **n'est pas nil** car elle contient un type.

## Exemple

Démontrer la différence.

## Code exemple

```go
package main

import "fmt"

type MonErreur struct{}

func (e *MonErreur) Error() string {
    return "mon erreur"
}

func retourneErreur() error {
    var e *MonErreur = nil
    return e // retourne une interface non-nil (type *MonErreur, valeur nil)
}

func main() {
    var i interface{} = nil
    fmt.Println("i est nil :", i == nil) // true

    err := retourneErreur()
    fmt.Println("err est nil :", err == nil) // false
    fmt.Printf("Type err : %T, valeur : %v\n", err, err)

    // Vérifier si la valeur concrète est nil :
    if err == nil {
        fmt.Println("Ceci ne s'affichera pas")
    } else if err != nil {
        fmt.Println("err n'est pas nil, mais la valeur concrète peut être nil")
    }
}
```

## Sortie

```bash
i est nil : true
err est nil : false
Type err : *main.MonErreur, valeur : <nil>
err n'est pas nil, mais la valeur concrète peut être nil
```

## Liens utiles

- [Blog Go : Les lois de la réflexion](https://go.dev/blog/laws-of-reflection)
- [Valeurs d'interface nil](https://go.dev/ref/spec#Interface_types)
