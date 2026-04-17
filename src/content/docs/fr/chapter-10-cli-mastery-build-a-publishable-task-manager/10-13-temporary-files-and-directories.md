---
title: Fichiers et dossiers temporaires
sidebar:
  order: 13
  label: 10.13 Fichiers et dossiers temporaires
---

## Contexte

Utilisez `os.CreateTemp` et `os.MkdirTemp` pour créer des fichiers/dossiers temporaires. Ils sont automatiquement nettoyés par le système d'exploitation ou manuellement avec `defer os.Remove`.

## Exemple

Créer un fichier temporaire, y écrire des données, puis le supprimer.

## Code exemple

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    f, err := os.CreateTemp("", "exemple-*.txt")
    if err != nil {
        fmt.Println("Erreur :", err)
        return
    }
    defer os.Remove(f.Name())
    defer f.Close()

    f.WriteString("données temporaires")
    fmt.Println("Fichier temporaire :", f.Name())
}
```

## Sortie (exemple)

```bash
Fichier temporaire : /tmp/exemple-123456789.txt
```

## Liens utiles

- [os.CreateTemp](https://pkg.go.dev/os#CreateTemp)
- [os.MkdirTemp](https://pkg.go.dev/os#MkdirTemp)
