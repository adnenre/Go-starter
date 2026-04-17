---
title: Temps
sidebar:
  order: 13
  label: 4.13 Temps
---

## Contexte

Le package `time` fournit des fonctions pour mesurer et afficher le temps. Utilisez `time.Now()` pour l'heure actuelle, `time.Sleep` pour les délais, et `time.Timer` pour les événements programmés.

## Exemple

Obtenir l'heure courante, ajouter des durées, mesurer le temps d'exécution.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    maintenant := time.Now()
    fmt.Println("Maintenant :", maintenant)

    plusTard := maintenant.Add(2 * time.Hour)
    fmt.Println("Dans 2 heures :", plusTard)

    debut := time.Now()
    time.Sleep(100 * time.Millisecond)
    ecoule := time.Since(debut)
    fmt.Println("Écoulé :", ecoule)
}
```

## Sortie (exemple)

```bash
Maintenant : 2025-03-15 10:30:00.123456789 +0000 UTC
Dans 2 heures : 2025-03-15 12:30:00.123456789 +0000 UTC
Écoulé : 100.123456ms
```

## Liens utiles

- [Documentation du package time](https://pkg.go.dev/time)
- [Go by Example : Temps](https://gobyexample.com/fr/time)
