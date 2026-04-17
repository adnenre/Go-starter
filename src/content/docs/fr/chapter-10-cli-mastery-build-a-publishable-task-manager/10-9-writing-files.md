---
title: Écriture de fichiers
sidebar:
  order: 9
  label: 10.9 Écriture de fichiers
---

## Contexte

Écrivez des fichiers en utilisant `os.WriteFile` (contenu entier) ou `os.Create` + `io.WriteString` (incrémental). Fermez toujours les fichiers après écriture.

## Exemple

Écrire une chaîne dans un fichier.

## Code exemple

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    contenu := []byte("Bonjour, fichier !")
    err := os.WriteFile("sortie.txt", contenu, 0644)
    if err != nil {
        fmt.Println("Erreur :", err)
        return
    }
    fmt.Println("Fichier écrit avec succès")
}
```

## Sortie

```bash
Fichier écrit avec succès
```

## Liens utiles

- [os.WriteFile](https://pkg.go.dev/os#WriteFile)
- [os.Create](https://pkg.go.dev/os#Create)
