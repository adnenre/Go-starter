---
title: Lancement de processus
sidebar:
  order: 21
  label: 9.21 Lancement de processus
---

## Contexte

Le package `os/exec` permet de lancer des processus externes. Vous pouvez exécuter des commandes et capturer leur sortie.

## Exemple

Exécuter `ls -l` et afficher la sortie.

## Code exemple

```go
package main

import (
    "fmt"
    "os/exec"
)

func main() {
    cmd := exec.Command("ls", "-l")
    out, err := cmd.Output()
    if err != nil {
        fmt.Println("Erreur :", err)
        return
    }
    fmt.Println(string(out))
}
```

## Sortie (exemple)

```bash
total 0
-rw-r--r--  1 user  staff  0 Jan 1 12:00 fichier.txt
```

## Liens utiles

- [Package os/exec](https://pkg.go.dev/os/exec)
- [Go by Example : Lancement de processus](https://gobyexample.com/fr/spawning-processes)
