---
title: Client HTTP
sidebar:
  order: 15
  label: 10.15 Client HTTP
---

## Contexte

Le package `net/http` fournit un client HTTP. Utilisez `http.Get` pour des requêtes GET simples, ou `http.Client` pour des timeouts personnalisés, en‑têtes, etc.

## Exemple

Récupérer une URL et afficher le code de statut.

## Code exemple

```go
package main

import (
    "fmt"
    "net/http"
    "time"
)

func main() {
    client := &http.Client{Timeout: 5 * time.Second}
    resp, err := client.Get("https://example.com")
    if err != nil {
        fmt.Println("Erreur :", err)
        return
    }
    defer resp.Body.Close()
    fmt.Println("Statut :", resp.Status)
}
```

## Sortie

```bash
Statut : 200 OK
```

## Liens utiles

- [Package net/http](https://pkg.go.dev/net/http)
- [Go by Example : Clients HTTP](https://gobyexample.com/fr/http-clients)
