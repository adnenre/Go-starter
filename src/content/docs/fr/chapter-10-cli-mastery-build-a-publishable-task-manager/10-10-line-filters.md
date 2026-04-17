---
title: Filtres ligne par ligne
sidebar:
  order: 10
  label: 10.10 Filtres ligne par ligne
---

## Contexte

Les filtres ligne par ligne lisent l'entrée ligne par ligne (depuis stdin ou un fichier) et transforment chaque ligne. Courant dans les pipelines Unix. Utilisez `bufio.Scanner` pour lire les lignes.

## Exemple

Un filtre qui convertit chaque ligne en majuscules.

## Code exemple

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    scanner := bufio.NewScanner(os.Stdin)
    for scanner.Scan() {
        ligne := scanner.Text()
        fmt.Println(strings.ToUpper(ligne))
    }
    if err := scanner.Err(); err != nil {
        fmt.Fprintln(os.Stderr, "erreur :", err)
        os.Exit(1)
    }
}
```

## Sortie (si l'entrée est "bonjour\nmonde")

```bash
BONJOUR
MONDE
```

## Liens utiles

- [bufio.Scanner](https://pkg.go.dev/bufio#Scanner)
- [Go by Example : Filtres ligne par ligne](https://gobyexample.com/fr/line-filters)
