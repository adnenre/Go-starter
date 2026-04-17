---
title: Encodage Base64
sidebar:
  order: 19
  label: 4.19 Encodage Base64
---

## Contexte

Le package `encoding/base64` encode et décode en Base64. Utilisez `StdEncoding` pour le Base64 standard, `URLEncoding` pour un encodage compatible URL.

## Exemple

Encoder et décoder une chaîne.

## Code exemple

```go
package main

import (
    "encoding/base64"
    "fmt"
)

func main() {
    donnees := []byte("bonjour monde")
    encode := base64.StdEncoding.EncodeToString(donnees)
    fmt.Println(encode)

    decode, _ := base64.StdEncoding.DecodeString(encode)
    fmt.Println(string(decode))
}
```

## Sortie

```bash
Ym9uam91ciBtb25kZQ==
bonjour monde
```

## Liens utiles

- [Package base64](https://pkg.go.dev/encoding/base64)
- [Go by Example : Encodage Base64](https://gobyexample.com/fr/base64-encoding)
