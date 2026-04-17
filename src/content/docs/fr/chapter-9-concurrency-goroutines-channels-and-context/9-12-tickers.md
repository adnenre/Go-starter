---
title: Tickers
sidebar:
  order: 12
  label: 9.12 Tickers
---

## Contexte

Un `time.Ticker` envoie des événements périodiques sur son canal. Utilisez `Stop()` pour arrêter le ticker et libérer les ressources.

## Exemple

Créer un ticker qui émet une impulsion toutes les 500 ms.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ticker := time.NewTicker(500 * time.Millisecond)
    fini := make(chan bool)

    go func() {
        for i := 0; i < 3; i++ {
            fmt.Println(<-ticker.C)
        }
        fini <- true
    }()

    <-fini
    ticker.Stop()
    fmt.Println("Ticker arrêté")
}
```

## Sortie (les horodatages varient)

```bash
2025-01-01 12:00:00.123 +0000 UTC
2025-01-01 12:00:00.623 +0000 UTC
2025-01-01 12:00:01.123 +0000 UTC
Ticker arrêté
```

## Liens utiles

- [Documentation time.Ticker](https://pkg.go.dev/time#Ticker)
- [Go by Example : Tickers](https://gobyexample.com/fr/tickers)
