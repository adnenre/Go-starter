---
title: Embedding d'interfaces
sidebar:
  order: 3
  label: 7.3 Embedding d'interfaces
---

## Contexte

Les interfaces peuvent en contenir d'autres. Cela crée une nouvelle interface qui rassemble toutes les méthodes des interfaces embarquées. C'est une forme de composition, similaire à l'embedding de structures.

## Exemple

Embedder `Reader` et `Writer` dans `ReadWriter`.

## Code exemple

```go
package main

import "fmt"

type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

type ReadWriter interface {
    Reader
    Writer
}

// Une structure simple qui implémente les deux
type Fichier struct{}

func (f Fichier) Read(p []byte) (int, error) {
    fmt.Println("Lecture...")
    return 0, nil
}

func (f Fichier) Write(p []byte) (int, error) {
    fmt.Println("Écriture...")
    return 0, nil
}

func main() {
    var rw ReadWriter = Fichier{}
    rw.Read(nil)
    rw.Write(nil)
}
```

## Sortie

```bash
Lecture...
Écriture...
```

## Liens utiles

- [Spécification Go : Embedding d'interfaces](https://go.dev/ref/spec#Interface_types)
- [Go by Example : Embedding d'interfaces](https://gobyexample.com/fr/embedding-interfaces)
