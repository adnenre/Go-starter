---
title: WaitGroups
sidebar:
  order: 14
  label: 9.14 WaitGroups
---

## Contexte

`sync.WaitGroup` attend qu'un ensemble de goroutines ait terminé. Utilisez `Add` pour définir le compteur, `Done` pour le décrémenter, et `Wait` pour bloquer jusqu'à ce qu'il atteigne zéro.

## Exemple

Démarrer trois goroutines et attendre qu'elles se terminent toutes.

## Code exemple

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Worker %d démarre\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d terminé\n", id)
}

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }
    wg.Wait()
    fmt.Println("Tous les workers ont terminé")
}
```

## Sortie

```bash
Worker 3 démarre
Worker 1 démarre
Worker 2 démarre
Worker 2 terminé
Worker 1 terminé
Worker 3 terminé
Tous les workers ont terminé
```

## Liens utiles

- [Documentation sync.WaitGroup](https://pkg.go.dev/sync#WaitGroup)
- [Go by Example : WaitGroups](https://gobyexample.com/fr/waitgroups)
