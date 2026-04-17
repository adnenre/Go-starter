---
title: Fermetures (closures)
sidebar:
  order: 4
  label: 5.4 Fermetures (closures)
---

## Contexte

Les fonctions Go peuvent être anonymes et former des fermetures (closures). Une fermeture est une valeur fonction qui référence des variables extérieures à son corps. Elle capture ces variables et peut les utiliser même après le retour de la fonction externe.

## Exemple

Créer une fermeture qui retourne une fonction incrémentant un compteur.

## Code exemple

```go
package main

import "fmt"

func compteur() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

func main() {
    inc := compteur()
    fmt.Println(inc())
    fmt.Println(inc())
    fmt.Println(inc())

    autre := compteur()
    fmt.Println(autre())
}
```

## Sortie

```bash
1
2
3
1
```

## Liens utiles

- [Go by Example : Fermetures](https://gobyexample.com/fr/closures)
- [Spécification Go : Littéraux de fonction](https://go.dev/ref/spec#Function_literals)
