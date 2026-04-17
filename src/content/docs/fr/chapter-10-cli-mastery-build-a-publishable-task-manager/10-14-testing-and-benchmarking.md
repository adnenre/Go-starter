---
title: Tests et benchmarks
sidebar:
  order: 14
  label: 10.14 Tests et benchmarks
---

## Contexte

Le package `testing` fournit des tests unitaires et des benchmarks. Écrivez les tests dans des fichiers `*_test.go`. Les benchmarks mesurent les performances.

## Exemple

Tester une fonction et la benchmarker.

## Code exemple

```go
// main.go
package main

func Addition(a, b int) int {
    return a + b
}
```

```go
// main_test.go
package main

import "testing"

func TestAddition(t *testing.T) {
    if Addition(2, 3) != 5 {
        t.Error("Addition(2,3) devrait être 5")
    }
}

func BenchmarkAddition(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Addition(1, 2)
    }
}
```

## Sortie (exécutez `go test -bench=.`)

```bash
PASS
BenchmarkAddition-8   1000000000   0.25 ns/op
```

## Liens utiles

- [Package testing](https://pkg.go.dev/testing)
- [Go by Example : Tests](https://gobyexample.com/fr/testing)
