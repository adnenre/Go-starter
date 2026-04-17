---
title: CLI avancé avec cobra et viper
sidebar:
  order: 7
  label: 10.7 CLI avancé avec cobra et viper
---

## Contexte

Pour des outils CLI de qualité professionnelle, utilisez `cobra` (commandes, sous-commandes, aide) et `viper` (configuration à partir de drapeaux, variables d'environnement, fichiers). Cobra est utilisé par Kubernetes, Docker, GitHub CLI, etc.

## Exemple

Une application cobra simple avec une commande.

## Code exemple

```go
package main

import (
    "fmt"
    "github.com/spf13/cobra"
)

func main() {
    var nom string
    rootCmd := &cobra.Command{
        Use:   "saluer",
        Short: "Saluer quelqu'un",
        Run: func(cmd *cobra.Command, args []string) {
            fmt.Printf("Bonjour, %s !\n", nom)
        },
    }
    rootCmd.Flags().StringVarP(&nom, "nom", "n", "Monde", "Nom à saluer")
    rootCmd.Execute()
}
```

## Sortie

```bash
Bonjour, Alice !
```

## Liens utiles

- [Documentation Cobra](https://github.com/spf13/cobra)
- [Documentation Viper](https://github.com/spf13/viper)
