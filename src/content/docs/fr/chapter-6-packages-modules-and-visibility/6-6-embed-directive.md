---
title: Directive embed
sidebar:
  order: 6
  label: 6.6 Directive embed
---

## Contexte

La directive `//go:embed` (introduite en Go 1.16) intègre des fichiers et dossiers dans le binaire au moment de la compilation. Elle est utilisée pour les assets statiques, les templates et les fichiers de configuration. Le package `embed` fournit le type `embed.FS`.

## Exemple

Intégrer un fichier texte et le servir sous forme de chaîne.

## Code exemple

```go
package main

import (
    _ "embed"
    "fmt"
)

//go:embed salutations.txt
var salutation string

func main() {
    fmt.Print(salutation)
}
```

Supposons que `salutations.txt` contienne :

```
Bonjour, monde intégré !
```

## Sortie

```bash
Bonjour, monde intégré !
```

## Liens utiles

- [Documentation du package embed](https://pkg.go.dev/embed)
- [Blog Go : Intégrer des fichiers](https://go.dev/blog/embed)
