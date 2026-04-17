---
title: Dossiers
sidebar:
  order: 12
  label: 10.12 Dossiers
---

## Contexte

Travaillez avec les dossiers en utilisant `os.Mkdir`, `os.MkdirAll`, `os.ReadDir`, `os.Remove`, et `os.RemoveAll`.

## Exemple

Créer un dossier, lister son contenu, puis le supprimer.

## Code exemple

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    err := os.Mkdir("testdossier", 0755)
    if err != nil {
        fmt.Println("Erreur création dossier :", err)
        return
    }
    defer os.RemoveAll("testdossier")

    entrees, err := os.ReadDir(".")
    if err != nil {
        fmt.Println("Erreur lecture dossier :", err)
        return
    }
    for _, e := range entrees {
        fmt.Println(e.Name(), e.IsDir())
    }
}
```

## Sortie (exemple)

```bash
testdossier true
main.go false
```

## Liens utiles

- [os.ReadDir](https://pkg.go.dev/os#ReadDir)
- [os.Mkdir](https://pkg.go.dev/os#Mkdir)
