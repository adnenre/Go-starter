---
title: Gestion des dépendances
sidebar:
  order: 5
  label: 6.5 Gestion des dépendances
---

## Contexte

Les modules Go sont le système standard de gestion des dépendances. Utilisez `go get` pour ajouter une dépendance, `go mod tidy` pour nettoyer, et `go mod vendor` pour mettre les dépendances dans un dossier `vendor/`. Le fichier `go.mod` enregistre les chemins et versions des modules.

## Exemple

Ajouter une dépendance tierce et l'utiliser.

## Code exemple

```bash
go mod init monmodule
go get github.com/google/uuid
```

```go
package main

import (
    "fmt"
    "github.com/google/uuid"
)

func main() {
    id := uuid.New()
    fmt.Println(id)
}
```

## Sortie (exemple)

```bash
550e8400-e29b-41d4-a716-446655440000
```

## Liens utiles

- [Gestion des dépendances (officiel)](https://go.dev/doc/modules/managing-dependencies)
- [Référence des modules Go](https://go.dev/ref/mod)
