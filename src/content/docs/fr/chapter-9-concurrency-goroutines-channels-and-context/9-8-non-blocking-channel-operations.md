---
title: Opérations non bloquantes sur canaux
sidebar:
  order: 8
  label: 9.8 Opérations non bloquantes sur canaux
---

## Contexte

Un `select` avec une clause `default` permet des envois et réceptions non bloquants. Si aucune opération sur canal n'est prête, la clause `default` s'exécute immédiatement.

## Exemple

Essayer de recevoir d'un canal sans bloquer.

## Code exemple

```go
package main

import "fmt"

func main() {
    ch := make(chan string)

    select {
    case msg := <-ch:
        fmt.Println("reçu", msg)
    default:
        fmt.Println("aucun message reçu")
    }

    // Envoi non bloquant
    select {
    case ch <- "bonjour":
        fmt.Println("envoyé")
    default:
        fmt.Println("l'envoi bloquerait")
    }
}
```

## Sortie

```bash
aucun message reçu
l'envoi bloquerait
```

## Liens utiles

- [Go by Example : Opérations non bloquantes](https://gobyexample.com/fr/non-blocking-channel-operations)
- [Select avec default](https://go.dev/ref/spec#Select_statements)
