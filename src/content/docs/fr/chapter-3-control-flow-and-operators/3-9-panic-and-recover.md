---
title: Panic et recover
sidebar:
  order: 9
  label: 3.9 Panic et recover
---

## Contexte

- `panic` arrête le flux normal, exécute les `defer`, puis le programme se termine.
- `recover` est une fonction qui permet de reprendre le contrôle après un `panic`. Elle doit être appelée à l'intérieur d'une fonction différée (`defer`).

À utiliser uniquement pour des erreurs irrécupérables (ex. état incohérent). Pour les erreurs normales, préférez la gestion par `error`.

## Exemple

Attraper un panic et continuer.

## Code exemple

```go
package main

import "fmt"

func main() {
    // Fonction qui peut paniquer
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from:", r)
        }
    }()

    fmt.Println("Avant panic")
    panic("une erreur grave")
    fmt.Println("Ceci ne sera pas exécuté")
}
```

## Sortie

```bash
Avant panic
Recovered from: une erreur grave
```

## Note

Le programme ne plante pas, mais il continue après le `recover`. Cela peut être utile pour des serveurs web (éviter qu'une requête ne fasse planter tout le serveur).

## Liens utiles

- [Spécification Go : Panic/Recover](https://go.dev/ref/spec#Handling_panics)
- [Go by Example : Panic](https://gobyexample.com/fr/panic) et [Recover](https://gobyexample.com/fr/recover)
