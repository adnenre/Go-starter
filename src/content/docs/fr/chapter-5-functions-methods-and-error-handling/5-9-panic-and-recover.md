---
title: Panic et recover
sidebar:
  order: 9
  label: 5.9 Panic et recover
---

## Contexte

- `panic` arrête l'exécution normale, exécute les fonctions différées, puis termine le programme. Il est utilisé pour des erreurs irrécupérables.
- `recover` reprend le contrôle après un `panic`. Il doit être appelé à l'intérieur d'une fonction différée. Si le programme est en panique, `recover` retourne la valeur de la panique ; sinon il retourne `nil`.

## Exemple

Attraper une panique et éviter l'arrêt du programme.

## Code exemple

```go
package main

import "fmt"

func peutPaniquer() {
    panic("quelque chose s'est mal passé")
}

func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Récupéré après panique :", r)
        }
    }()

    fmt.Println("Avant la panique")
    peutPaniquer()
    fmt.Println("Cette ligne ne sera pas exécutée")
}
```

## Sortie

```bash
Avant la panique
Récupéré après panique : quelque chose s'est mal passé
```

## Liens utiles

- [Go by Example : Panic](https://gobyexample.com/fr/panic) et [Recover](https://gobyexample.com/fr/recover)
- [Spécification Go : Gestion des paniques](https://go.dev/ref/spec#Handling_panics)
