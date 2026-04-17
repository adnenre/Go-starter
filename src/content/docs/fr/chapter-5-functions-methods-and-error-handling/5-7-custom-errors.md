---
title: Erreurs personnalisées
sidebar:
  order: 7
  label: 5.7 Erreurs personnalisées
---

## Contexte

Vous pouvez définir vos propres types d'erreur en implémentant l'interface `error` (`Error() string`). Les erreurs personnalisées peuvent transporter des informations supplémentaires (ex. codes d'erreur). Utilisez `errors.Is` et `errors.As` pour inspecter les chaînes d'erreur.

## Exemple

Définir une erreur personnalisée avec un code d'erreur.

## Code exemple

```go
package main

import (
    "errors"
    "fmt"
)

type ErreurValidation struct {
    Champ string
    Valeur interface{}
}

func (e ErreurValidation) Error() string {
    return fmt.Sprintf("échec de validation pour le champ '%s' avec la valeur %v", e.Champ, e.Valeur)
}

func validerAge(age int) error {
    if age < 0 {
        return ErreurValidation{Champ: "age", Valeur: age}
    }
    return nil
}

func main() {
    err := validerAge(-5)
    if err != nil {
        // Assertion de type pour obtenir les champs supplémentaires
        if ve, ok := err.(ErreurValidation); ok {
            fmt.Printf("Erreur personnalisée : %s (champ=%s, valeur=%v)\n", err, ve.Champ, ve.Valeur)
        } else {
            fmt.Println("Erreur :", err)
        }
    }
}
```

## Sortie

```bash
Erreur personnalisée : échec de validation pour le champ 'age' avec la valeur -5 (champ=age, valeur=-5)
```

## Liens utiles

- [Go by Example : Erreurs personnalisées](https://gobyexample.com/fr/custom-errors)
- [Package errors](https://pkg.go.dev/errors)
