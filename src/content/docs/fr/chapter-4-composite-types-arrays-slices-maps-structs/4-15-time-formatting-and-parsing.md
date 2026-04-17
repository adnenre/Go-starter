---
title: Formatage et analyse de temps
sidebar:
  order: 15
  label: 4.15 Formatage et analyse de temps
---

## Contexte

Go utilise un **temps de référence** `Mon Jan 2 15:04:05 MST 2006` pour formater/analyser. Utilisez `time.Format` et `time.Parse` avec ce motif.

## Exemple

Formater une heure et analyser une chaîne.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    t := time.Date(2025, 3, 15, 14, 30, 0, 0, time.UTC)
    fmt.Println(t.Format("2006-01-02 15:04:05"))
    fmt.Println(t.Format("Monday, 02-Jan-06 03:04 PM"))

    analyse, _ := time.Parse("2006-01-02", "2025-12-25")
    fmt.Println(analyse)
}
```

## Sortie

```bash
2025-03-15 14:30:00
Saturday, 15-Mar-25 02:30 PM
2025-12-25 00:00:00 +0000 UTC
```

## Liens utiles

- [Documentation time.Format](https://pkg.go.dev/time#Time.Format)
- [Go by Example : Formatage de temps](https://gobyexample.com/fr/time-formatting-parsing)
