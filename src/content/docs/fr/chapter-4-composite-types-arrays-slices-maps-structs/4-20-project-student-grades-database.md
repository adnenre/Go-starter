---
title: Projet – Base de données de notes d'étudiants
sidebar:
  order: 20
  label: 4.20 Projet – Base de données de notes d'étudiants
---

## Contexte

Construisez un programme en ligne de commande pour gérer les notes d'étudiants. Utilisez une map pour stocker les noms des étudiants et une slice de notes. Implémentez les opérations d'ajout, liste, moyenne et suppression.

Ce projet combine :

- Maps et slices
- Structures (optionnel)
- Analyse de chaînes
- Boucle de lecture utilisateur

## Code pas à pas

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
    "strings"
)

func main() {
    db := make(map[string][]float64)
    lecteur := bufio.NewReader(os.Stdin)

    for {
        fmt.Print("\n> ")
        input, _ := lecteur.ReadString('\n')
        input = strings.TrimSpace(input)
        parties := strings.Fields(input)
        if len(parties) == 0 {
            continue
        }

        cmd := parties[0]
        switch cmd {
        case "ajouter":
            if len(parties) < 2 {
                fmt.Println("usage : ajouter NOM")
                continue
            }
            nom := parties[1]
            if _, existe := db[nom]; !existe {
                db[nom] = []float64{}
                fmt.Printf("Étudiant ajouté : %s\n", nom)
            } else {
                fmt.Printf("L'étudiant %s existe déjà\n", nom)
            }

        case "note":
            if len(parties) < 3 {
                fmt.Println("usage : note NOM NOTE")
                continue
            }
            nom := parties[1]
            note, err := strconv.ParseFloat(parties[2], 64)
            if err != nil {
                fmt.Println("note invalide")
                continue
            }
            if notes, existe := db[nom]; existe {
                db[nom] = append(notes, note)
                fmt.Printf("Note %.1f ajoutée à %s\n", note, nom)
            } else {
                fmt.Printf("Étudiant %s introuvable\n", nom)
            }

        case "moyenne":
            if len(parties) < 2 {
                fmt.Println("usage : moyenne NOM")
                continue
            }
            nom := parties[1]
            notes, existe := db[nom]
            if !existe || len(notes) == 0 {
                fmt.Printf("Aucune note pour %s\n", nom)
                continue
            }
            somme := 0.0
            for _, n := range notes {
                somme += n
            }
            fmt.Printf("Moyenne de %s : %.2f\n", nom, somme/float64(len(notes)))

        case "liste":
            if len(db) == 0 {
                fmt.Println("Aucun étudiant")
                continue
            }
            for nom, notes := range db {
                fmt.Printf("%s : %v\n", nom, notes)
            }

        case "supprimer":
            if len(parties) < 2 {
                fmt.Println("usage : supprimer NOM")
                continue
            }
            nom := parties[1]
            if _, existe := db[nom]; existe {
                delete(db, nom)
                fmt.Printf("%s supprimé\n", nom)
            } else {
                fmt.Printf("Étudiant %s introuvable\n", nom)
            }

        case "quitter":
            fmt.Println("Au revoir !")
            return

        default:
            fmt.Println("Commandes : ajouter, note, moyenne, liste, supprimer, quitter")
        }
    }
}
```

## Exemple d'interaction

```bash
> ajouter Alice
Étudiant ajouté : Alice
> note Alice 85.5
Note 85.5 ajoutée à Alice
> note Alice 92.0
Note 92.0 ajoutée à Alice
> moyenne Alice
Moyenne de Alice : 88.75
> liste
Alice : [85.5 92]
> supprimer Alice
Alice supprimé
> quitter
Au revoir !
```

## Liens utiles

- [Documentation des maps](https://go.dev/blog/maps)
- [Package strconv](https://pkg.go.dev/strconv)
- [Package bufio](https://pkg.go.dev/bufio)
