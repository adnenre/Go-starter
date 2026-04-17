---
title: Limitation de débit
sidebar:
  order: 15
  label: 9.15 Limitation de débit
---

## Contexte

La limitation de débit contrôle la fréquence des opérations. On peut utiliser `time.Ticker` ou `time.After` pour implémenter une limitation (par exemple, une requête par seconde).

## Exemple

Traiter une série de requêtes à raison d'une par seconde.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    requetes := make(chan int, 5)
    for i := 1; i <= 5; i++ {
        requetes <- i
    }
    close(requetes)

    limiteur := time.Tick(200 * time.Millisecond) // 5 par seconde

    for req := range requetes {
        <-limiteur
        fmt.Println("requête", req, time.Now())
    }
}
```

## Sortie (les horodatages sont espacés de 200 ms)

```bash
requête 1 2025-01-01 12:00:00.000 +0000 UTC
requête 2 2025-01-01 12:00:00.200 +0000 UTC
requête 3 2025-01-01 12:00:00.400 +0000 UTC
requête 4 2025-01-01 12:00:00.600 +0000 UTC
requête 5 2025-01-01 12:00:00.800 +0000 UTC
```

## Liens utiles

- [Go by Example : Limitation de débit](https://gobyexample.com/fr/rate-limiting)
- [Documentation time.Tick](https://pkg.go.dev/time#Tick)
