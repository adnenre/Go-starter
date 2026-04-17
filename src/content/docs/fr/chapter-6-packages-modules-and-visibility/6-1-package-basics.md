---
title: Bases des paquets
sidebar:
  order: 1
  label: 6.1 Bases des paquets
---

## Contexte

Chaque fichier Go appartient à un paquet (package). Un paquet est un ensemble de fichiers Go dans le même répertoire, compilés ensemble. Le paquet `main` définit un programme exécutable. Les autres paquets sont des bibliothèques réutilisables.

## Exemple

Créez deux fichiers dans le même répertoire : `main.go` et `math.go` avec le paquet `mymath`.

## Code exemple

```go
// math.go
package mymath

func Add(a, b int) int {
    return a + b
}
```

```go
// main.go
package main

import (
    "fmt"
    "mymath"
)

func main() {
    fmt.Println(mymath.Add(3, 4))
}
```

## Sortie

```bash
7
```

## Liens utiles

- [Spécification Go : Paquets](https://go.dev/ref/spec#Packages)
- [Comment écrire du code Go](https://go.dev/doc/code)
