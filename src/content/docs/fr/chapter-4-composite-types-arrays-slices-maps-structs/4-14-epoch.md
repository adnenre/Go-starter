---
title: Epoch (temps Unix)
sidebar:
  order: 14
  label: 4.14 Epoch (temps Unix)
---

## Contexte

L'époque Unix est le nombre de secondes depuis le 1er janvier 1970 UTC. Utilisez `time.Unix` pour convertir en `time.Time`, et `time.Time.Unix` pour obtenir les secondes.

## Exemple

Obtenir l'epoch actuel et convertir.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    maintenant := time.Now()
    secondesEpoch := maintenant.Unix()
    nanoEpoch := maintenant.UnixNano()

    fmt.Println("Secondes depuis epoch :", secondesEpoch)
    fmt.Println("Nanosecondes depuis epoch :", nanoEpoch)

    // Convertir en retour
    t := time.Unix(secondesEpoch, 0)
    fmt.Println("Depuis secondes :", t)
}
```

## Sortie (exemple)

```bash
Secondes depuis epoch : 1742041800
Nanosecondes depuis epoch : 1742041800123456789
Depuis secondes : 2025-03-15 10:30:00 +0000 UTC
```

## Liens utiles

- [Documentation time.Unix](https://pkg.go.dev/time#Unix)
- [Go by Example : Epoch](https://gobyexample.com/fr/epoch)
