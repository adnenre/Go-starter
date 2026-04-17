---
title: Paquets internes
sidebar:
  order: 4
  label: 6.4 Paquets internes
---

## Contexte

Un répertoire `internal/` est une convention spéciale. Le code à l'intérieur de `internal/` ne peut être importé que par d'autres codes à l'intérieur du même module (ou ses répertoires parents). Cela impose l'encapsulation et empêche l'utilisation externe des détails d'implémentation internes.

## Exemple

Structure de projet avec un paquet interne.

## Code exemple

```bash
monprojet/
├── go.mod
├── internal/
│   └── aide/
│       └── aide.go   // package aide
└── cmd/
    └── monapp/
        └── main.go    // peut importer internal/aide
```

```go
// internal/aide/aide.go
package aide

func Aider() string {
    return "aide interne"
}
```

```go
// cmd/monapp/main.go
package main

import (
    "fmt"
    "monprojet/internal/aide"
)

func main() {
    fmt.Println(aide.Aider())
}
```

## Sortie

```bash
aide interne
```

## Liens utiles

- [Conception des paquets internes Go](https://go.dev/doc/go1.4#internalpackages)
- [Documentation des paquets internes](https://go.dev/doc/go1.4#internalpackages)
