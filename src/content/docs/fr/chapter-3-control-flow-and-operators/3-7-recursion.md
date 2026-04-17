---
title: Récursivité
sidebar:
  order: 7
  label: 3.7 Récursivité
---

## Contexte

Une fonction peut s'appeler elle‑même : c'est la récursivité. Il faut toujours un **cas de base** pour arrêter les appels, sinon la pile déborde.

Go gère la récursivité correctement, mais n'optimise pas la récursion terminale.

## Exemple

Calculer la factorielle et la suite de Fibonacci de manière récursive.

## Code exemple

```go
package main

import "fmt"

func factorielle(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorielle(n-1)
}

func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

func main() {
    fmt.Println("factorielle(5) =", factorielle(5))
    fmt.Println("fibonacci(10) =", fibonacci(10))
}
```

## Sortie

```bash
factorielle(5) = 120
fibonacci(10) = 55
```

## Liens utiles

- [Go by Example : Récursivité](https://gobyexample.com/fr/recursion)
- [Tour de Go : Récursivité](https://go.dev/tour/flowcontrol/8)
