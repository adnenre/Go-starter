---
title: Goroutines
sidebar:
  order: 1
  label: 9.1 Goroutines
---

## Contexte

Une goroutine est un thread léger géré par l'exécution de Go. Vous démarrez une goroutine en préfixant un appel de fonction par le mot‑clé `go`. Les goroutines sont économes (pile de quelques kilo‑octets) et vous pouvez en exécuter des milliers en parallèle.

## Exemple

Démarrer une goroutine qui affiche un message pendant que la fonction `main` continue.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func direBonjour() {
    fmt.Println("Bonjour depuis la goroutine")
}

func main() {
    go direBonjour()
    time.Sleep(100 * time.Millisecond) // laisse le temps à la goroutine de s'exécuter
    fmt.Println("Bonjour depuis main")
}
```

## Sortie

```bash
Bonjour depuis la goroutine
Bonjour depuis main
```

## Liens utiles

- [Spécification Go : Instructions Go](https://go.dev/ref/spec#Go_statements)
- [Go by Example : Goroutines](https://gobyexample.com/fr/goroutines)
