---
title: Timers
sidebar:
  order: 11
  label: 9.11 Timers
---

## Contexte

Un `time.Timer` représente un événement unique dans le futur. Vous pouvez attendre sur son canal (`<-timer.C`) ou l'arrêter avant qu'il ne se déclenche.

## Exemple

Créer un timer qui se déclenche après 2 secondes.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    timer := time.NewTimer(2 * time.Second)
    fmt.Println("Attente...")
    <-timer.C
    fmt.Println("Timer déclenché")

    // Arrêter un timer
    timer2 := time.NewTimer(1 * time.Second)
    arret := timer2.Stop()
    if arret {
        fmt.Println("Timer2 arrêté avant déclenchement")
    }
}
```

## Sortie

```bash
Attente...
Timer déclenché
Timer2 arrêté avant déclenchement
```

## Liens utiles

- [Documentation time.Timer](https://pkg.go.dev/time#Timer)
- [Go by Example : Timers](https://gobyexample.com/fr/timers)
