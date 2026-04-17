---
title: Variables d'environnement
sidebar:
  order: 5
  label: 10.5 Variables d'environnement
---

## Contexte

Les variables d'environnement sont des paires clé‑valeur qui configurent l'environnement du système d'exploitation. En Go, utilisez `os.Getenv` pour les lire, `os.Setenv` pour les définir, et `os.Unsetenv` pour les supprimer.

## Exemple

Lire la variable `HOME` et une variable personnalisée `APP_MODE`.

## Code exemple

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    home := os.Getenv("HOME")
    fmt.Println("Home :", home)

    mode := os.Getenv("APP_MODE")
    if mode == "" {
        mode = "development"
    }
    fmt.Println("Mode :", mode)

    // Recherche avec ok
    if val, ok := os.LookupEnv("PATH"); ok {
        fmt.Println("PATH existe")
    }
}
```

## Sortie

```bash
Home : /home/utilisateur
Mode : development
PATH existe
```

## Liens utiles

- [Package os : Variables d'environnement](https://pkg.go.dev/os#Getenv)
- [12 Factor App : Configuration](https://12factor.net/config)
