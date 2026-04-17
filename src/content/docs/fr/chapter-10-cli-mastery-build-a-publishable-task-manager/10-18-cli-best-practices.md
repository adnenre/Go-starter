---
title: Bonnes pratiques CLI
sidebar:
  order: 18
  label: 10.18 Bonnes pratiques CLI
---

## Contexte

Les outils CLI bien conçus suivent des conventions communes : texte d'aide, codes de sortie, formatage de la sortie et gestion des erreurs.

## Bonnes pratiques

- **Texte d'aide** – Fournissez `-h` ou `--help` avec une utilisation claire.
- **Codes de sortie** – `0` pour succès, non‑nul pour erreur.
- **Sortie** – Utilisez `fmt.Println` pour la sortie normale, `fmt.Fprintln(os.Stderr, ...)` pour les erreurs.
- **Silence** – Permettez un mode silencieux (`-q`).
- **Progression** – Utilisez des barres de progression pour les longues opérations (ex. `github.com/schollz/progressbar`).
- **Couleur** – Utilisez la couleur pour la lisibilité, mais respectez la variable d'environnement `NO_COLOR`.
- **Sous-commandes** – Regroupez les actions liées (comme `git add`, `git commit`).
- **Configuration** – Supportez les drapeaux, variables d'environnement et fichiers de configuration (utilisez Viper).

## Exemple

Un CLI bien structuré avec des codes de sortie appropriés.

## Code exemple

```go
package main

import (
    "flag"
    "fmt"
    "os"
)

func main() {
    nom := flag.String("nom", "", "votre nom")
    flag.Parse()
    if *nom == "" {
        fmt.Fprintln(os.Stderr, "erreur : --nom est requis")
        os.Exit(1)
    }
    fmt.Printf("Bonjour, %s\n", *nom)
    os.Exit(0)
}
```

## Sortie (drapeau manquant)

```bash
erreur : --nom est requis
```

## Liens utiles

- [Directives CLI (CLIG)](https://clig.dev/)
- [Conventions utilitaires POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/)
