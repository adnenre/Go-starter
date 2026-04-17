---
title: Hachage SHA256
sidebar:
  order: 18
  label: 4.18 Hachage SHA256
---

## Contexte

Le package `crypto/sha256` calcule des hachages SHA‑256. Utilisez `sha256.Sum256` pour un hachage rapide ou `sha256.New` pour un flux.

## Exemple

Hacher une chaîne.

## Code exemple

```go
package main

import (
    "crypto/sha256"
    "fmt"
)

func main() {
    donnees := []byte("bonjour monde")
    hash := sha256.Sum256(donnees)
    fmt.Printf("%x\n", hash)

    // Avec New
    h := sha256.New()
    h.Write([]byte("bonjour "))
    h.Write([]byte("monde"))
    fmt.Printf("%x\n", h.Sum(nil))
}
```

## Sortie

```bash
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Liens utiles

- [Package crypto/sha256](https://pkg.go.dev/crypto/sha256)
- [Go by Example : Hachages SHA256](https://gobyexample.com/fr/sha256-hashes)
