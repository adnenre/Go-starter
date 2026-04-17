---
title: Serveur HTTP
sidebar:
  order: 16
  label: 10.16 Serveur HTTP
---

## Contexte

Le package `net/http` de Go facilite la construction de serveurs HTTP. Utilisez `http.HandleFunc` et `http.ListenAndServe`.

## Exemple

Un serveur simple qui répond avec "Bonjour, Monde".

## Code exemple

```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Bonjour, %s !", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

## Sortie (curl http://localhost:8080/Alice)

```bash
Bonjour, Alice !
```

## Liens utiles

- [Serveur HTTP net/http](https://pkg.go.dev/net/http#ListenAndServe)
- [Go by Example : Serveurs HTTP](https://gobyexample.com/fr/http-servers)
