---
title: Chemins de fichiers
sidebar:
  order: 11
  label: 10.11 Chemins de fichiers
---

## Contexte

Le package `path/filepath` fournit une manipulation de chemins multiplateforme : assemblage, décomposition, nettoyage et chemins relatifs.

## Exemple

Assembler des chemins, obtenir la base et le répertoire.

## Code exemple

```go
package main

import (
    "fmt"
    "path/filepath"
)

func main() {
    chemin := filepath.Join("dossier", "sousdossier", "fichier.txt")
    fmt.Println("Assemblé :", chemin)

    fmt.Println("Base :", filepath.Base(chemin))
    fmt.Println("Répertoire :", filepath.Dir(chemin))
    fmt.Println("Extension :", filepath.Ext(chemin))
    fmt.Println("Absolu ?", filepath.IsAbs(chemin))
}
```

## Sortie

```bash
Assemblé : dossier/sousdossier/fichier.txt
Base : fichier.txt
Répertoire : dossier/sousdossier
Extension : .txt
Absolu ? false
```

## Liens utiles

- [Package path/filepath](https://pkg.go.dev/path/filepath)
- [Go by Example : Chemins de fichiers](https://gobyexample.com/fr/file-paths)
