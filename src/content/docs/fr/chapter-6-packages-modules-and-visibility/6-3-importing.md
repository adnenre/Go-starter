---
title: Importation
sidebar:
  order: 3
  label: 6.3 Importation
---

## Contexte

Utilisez `import` pour amener d'autres paquets dans la portée. Vous pouvez importer un paquet unique, plusieurs paquets dans un bloc, renommer des importations avec des alias, ou utiliser une importation vide (`_`) pour les effets de bord (ex. enregistrement d'un pilote).

## Exemple

Montrer différents styles d'importation.

## Code exemple

```go
package main

import (
    "fmt"
    "math/rand"
    monfmt "mylib/fmt" // alias
    _ "image/png"      // importation vide pour effet de bord
)

func main() {
    fmt.Println(rand.Intn(100))
    monfmt.Println("Bonjour")
}
```

## Sortie (exemple)

```bash
42
Bonjour
```

## Liens utiles

- [Spécification Go : Déclarations d'importation](https://go.dev/ref/spec#Import_declarations)
- [Effective Go : Importation](https://go.dev/doc/effective_go#importing)
