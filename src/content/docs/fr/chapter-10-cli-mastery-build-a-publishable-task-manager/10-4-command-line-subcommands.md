---
title: Sous-commandes en ligne de commande
sidebar:
  order: 4
  label: 10.4 Sous-commandes en ligne de commande
---

## Contexte

Pour les outils CLI complexes (comme `git` avec `git add`, `git commit`), vous avez besoin de sous-commandes. Le package `flag` seul ne suffit pas ; vous pouvez implémenter des sous-commandes en utilisant `flag.NewFlagSet` pour chaque sous-commande.

## Exemple

Un CLI simple avec les sous-commandes `ajouter` et `lister`.

## Code exemple

```go
package main

import (
    "flag"
    "fmt"
    "os"
)

func main() {
    if len(os.Args) < 2 {
        fmt.Println("Commande 'ajouter' ou 'lister' attendue")
        os.Exit(1)
    }

    switch os.Args[1] {
    case "ajouter":
        addCmd := flag.NewFlagSet("ajouter", flag.ExitOnError)
        tache := addCmd.String("tache", "", "description de la tâche")
        addCmd.Parse(os.Args[2:])
        fmt.Printf("Ajout de la tâche : %s\n", *tache)

    case "lister":
        listCmd := flag.NewFlagSet("lister", flag.ExitOnError)
        tout := listCmd.Bool("tout", false, "lister toutes les tâches")
        listCmd.Parse(os.Args[2:])
        fmt.Printf("Liste des tâches (tout=%v)\n", *tout)

    default:
        fmt.Println("Sous-commande inconnue")
        os.Exit(1)
    }
}
```

## Sortie

```bash
Ajout de la tâche : acheter du lait
Liste des tâches (tout=true)
```

## Liens utiles

- [Documentation flag.NewFlagSet](https://pkg.go.dev/flag#NewFlagSet)
- [Go by Example : Sous-commandes](https://gobyexample.com/fr/command-line-subcommands)
