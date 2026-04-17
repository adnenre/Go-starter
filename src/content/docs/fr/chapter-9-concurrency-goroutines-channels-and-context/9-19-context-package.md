---
title: Package context
sidebar:
  order: 19
  label: 9.19 Package context
---

## Contexte

Le package `context` fournit une manière standard de transporter des délais, des signaux d'annulation et des valeurs limitées à la requête à travers les frontières d'API. Il est particulièrement utile pour annuler des goroutines.

## Exemple

Utiliser `context.WithCancel` pour annuler une goroutine.

## Code exemple

```go
package main

import (
    "context"
    "fmt"
    "time"
)

func worker(ctx context.Context, id int) {
    for {
        select {
        case <-ctx.Done():
            fmt.Printf("Worker %d annulé\n", id)
            return
        default:
            fmt.Printf("Worker %d travaille\n", id)
            time.Sleep(500 * time.Millisecond)
        }
    }
}

func main() {
    ctx, cancel := context.WithCancel(context.Background())
    go worker(ctx, 1)
    go worker(ctx, 2)

    time.Sleep(2 * time.Second)
    cancel() // arrêter tous les workers
    time.Sleep(500 * time.Millisecond)
}
```

## Sortie (exemple)

```bash
Worker 2 travaille
Worker 1 travaille
Worker 1 travaille
Worker 2 travaille
Worker 1 travaille
Worker 2 travaille
Worker 2 annulé
Worker 1 annulé
```

## Liens utiles

- [Documentation du package context](https://pkg.go.dev/context)
- [Blog Go : Context](https://go.dev/blog/context)
