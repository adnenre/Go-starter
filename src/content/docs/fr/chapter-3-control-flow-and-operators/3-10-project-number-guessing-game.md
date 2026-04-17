---
title: Projet – Jeu de devinette de nombre
sidebar:
  order: 10
  label: 3.10 Projet – Jeu de devinette de nombre
---

## Contexte

Le programme choisit un nombre aléatoire entre 1 et 100. L'utilisateur doit le deviner, avec des indices « trop grand » ou « trop petit ». Le jeu continue jusqu'à ce que l'utilisateur trouve le nombre.

Ce projet combine :

- Génération aléatoire (`math/rand`)
- Boucles (`for`)
- Conditionnelles (`if/else`)
- Entrée utilisateur (`fmt.Scan`)

## Code pas à pas

```go
package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    // Initialisation du générateur (depuis Go 1.20, automatique, mais on garde pour l'exemple)
    rand.NewSource(time.Now().UnixNano())
    secret := rand.Intn(100) + 1 // nombre entre 1 et 100
    var tentative int
    essais := 0

    fmt.Println("Devinez le nombre entre 1 et 100 !")

    for {
        fmt.Print("Votre proposition : ")
        _, err := fmt.Scan(&tentative)
        if err != nil {
            fmt.Println("Entrée invalide.")
            continue
        }
        essais++

        if tentative < secret {
            fmt.Println("Trop petit !")
        } else if tentative > secret {
            fmt.Println("Trop grand !")
        } else {
            fmt.Printf("Bravo ! Vous avez trouvé %d en %d essais.\n", secret, essais)
            break
        }
    }
}
```

## Exemple d'interaction

```bash
Devinez le nombre entre 1 et 100 !
Votre proposition : 50
Trop petit !
Votre proposition : 75
Trop grand !
Votre proposition : 62
Trop petit !
Votre proposition : 68
Bravo ! Vous avez trouvé 68 en 4 essais.
```

## Extensions possibles

- Limiter le nombre d'essais.
- Ajouter la possibilité de rejouer.
- Gérer les entrées non numériques.

## Liens utiles

- [Documentation du package math/rand](https://pkg.go.dev/math/rand)
- [Documentation du package fmt](https://pkg.go.dev/fmt)
- [Go by Example : Random Numbers](https://gobyexample.com/fr/random-numbers)
