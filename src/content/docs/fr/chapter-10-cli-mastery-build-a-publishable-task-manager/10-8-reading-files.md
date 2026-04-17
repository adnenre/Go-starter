---
title: Lecture de fichiers
sidebar:
  order: 8
  label: 10.8 Lecture de fichiers
---

## Contexte

Go offre plusieurs façons de lire des fichiers : `os.ReadFile` (fichier entier), `bufio` (ligne par ligne), `os.Open` + `io.ReadAll`, etc. Choisissez en fonction de la taille du fichier et des besoins.

## Exemple

Lire un fichier entier et afficher son contenu.

## Code exemple

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    donnees, err := os.ReadFile("exemple.txt")
    if err != nil {
        fmt.Println("Erreur :", err)
        return
    }
    fmt.Println(string(donnees))
}
```

## Sortie (si exemple.txt contient "Bonjour, fichier !")

```bash
Bonjour, fichier !
```

## Liens utiles

- [os.ReadFile](https://pkg.go.dev/os#ReadFile)
- [bufio.Scanner](https://pkg.go.dev/bufio#Scanner)
