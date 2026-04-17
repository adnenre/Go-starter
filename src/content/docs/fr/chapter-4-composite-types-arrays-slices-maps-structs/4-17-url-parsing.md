---
title: Analyse d'URL
sidebar:
  order: 17
  label: 4.17 Analyse d'URL
---

## Contexte

Le package `net/url` analyse les URL et échappe les paramètres de requête. Utilisez `url.Parse` pour décomposer une URL en composants.

## Exemple

Analyser une URL et extraire ses parties.

## Code exemple

```go
package main

import (
    "fmt"
    "net/url"
)

func main() {
    s := "https://exemple.com:8080/chemin?nom=Alice&age=30#section"
    u, err := url.Parse(s)
    if err != nil {
        panic(err)
    }
    fmt.Println("Schéma :", u.Scheme)
    fmt.Println("Hôte :", u.Host)
    fmt.Println("Chemin :", u.Path)
    fmt.Println("Requête :", u.Query())
    fmt.Println("Fragment :", u.Fragment)
}
```

## Sortie

```bash
Schéma : https
Hôte : exemple.com:8080
Chemin : /chemin
Requête : map[age:[30] nom:[Alice]]
Fragment : section
```

## Liens utiles

- [Package net/url](https://pkg.go.dev/net/url)
- [Go by Example : Analyse d'URL](https://gobyexample.com/fr/url-parsing)
