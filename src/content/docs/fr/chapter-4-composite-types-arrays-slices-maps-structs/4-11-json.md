---
title: JSON
sidebar:
  order: 11
  label: 4.11 JSON
---

## Contexte

Le package `encoding/json` encode et décode du JSON. Les tags de structure contrôlent les noms des champs et les options (omitempty, string, etc.).

## Exemple

Marshaller et unmarshaller du JSON.

## Code exemple

```go
package main

import (
    "encoding/json"
    "fmt"
)

type Personne struct {
    Nom string `json:"nom"`
    Age int    `json:"age,omitempty"`
}

func main() {
    p := Personne{Nom: "Alice", Age: 30}
    donnees, _ := json.Marshal(p)
    fmt.Println(string(donnees))

    jsonStr := `{"nom":"Bob"}`
    var p2 Personne
    json.Unmarshal([]byte(jsonStr), &p2)
    fmt.Printf("%+v\n", p2)
}
```

## Sortie

```bash
{"nom":"Alice","age":30}
{Nom:Bob Age:0}
```

## Liens utiles

- [Documentation du package json](https://pkg.go.dev/encoding/json)
- [Go by Example : JSON](https://gobyexample.com/fr/json)
