---
title: CLI basique avec os.Args et flag
sidebar:
  order: 2
  label: 10.2 CLI basique avec os.Args et flag
---

## Contexte

Go fournit deux moyens simples de lire les entrées en ligne de commande :

- `os.Args` – une slice de chaînes contenant le nom du programme et les arguments.
- Le package `flag` – analyse les drapeaux de style Unix (`-nom valeur` ou `--nom valeur`).

`os.Args` est adapté aux arguments positionnels. `flag` est meilleur pour les drapeaux nommés optionnels.

## Exemple

Utiliser `os.Args` pour afficher tous les arguments.

## Code exemple

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    if len(os.Args) < 2 {
        fmt.Println("Usage : ./programme <nom>")
        return
    }
    nom := os.Args[1]
    fmt.Printf("Bonjour, %s !\n", nom)
}
```

## Sortie

```bash
Bonjour, Alice !
```

## Liens utiles

- [Documentation os.Args](https://pkg.go.dev/os#Args)
- [Documentation du package flag](https://pkg.go.dev/flag)
