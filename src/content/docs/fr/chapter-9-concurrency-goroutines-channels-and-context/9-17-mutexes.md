---
title: Mutexes
sidebar:
  order: 17
  label: 9.17 Mutexes
---

## Contexte

Un `sync.Mutex` garantit qu'une seule goroutine accède à une section critique à la fois. Utilisez `Lock()` et `Unlock()`. Pour les scénarios avec beaucoup de lectures, `sync.RWMutex` permet plusieurs lecteurs.

## Exemple

Protéger un compteur avec un mutex.

## Code exemple

```go
package main

import (
    "fmt"
    "sync"
)

type CompteurSecurise struct {
    mu    sync.Mutex
    valeur int
}

func (c *CompteurSecurise) Inc() {
    c.mu.Lock()
    c.valeur++
    c.mu.Unlock()
}

func (c *CompteurSecurise) Valeur() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.valeur
}

func main() {
    var wg sync.WaitGroup
    c := CompteurSecurise{}
    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            c.Inc()
            wg.Done()
        }()
    }
    wg.Wait()
    fmt.Println(c.Valeur())
}
```

## Sortie

```bash
1000
```

## Liens utiles

- [Documentation sync.Mutex](https://pkg.go.dev/sync#Mutex)
- [Go by Example : Mutexes](https://gobyexample.com/fr/mutexes)
