---
title: Pourquoi les outils CLI en Go
sidebar:
  order: 1
  label: 10.1 Pourquoi les outils CLI en Go
---

## Contexte

Go est un langage excellent pour construire des outils en ligne de commande (CLI). Ses atouts incluent :

- **Déploiement en binaire unique** – Pas de dépendances d'exécution. Compilez une fois, exécutez n'importe où.
- **Compilation multiplateforme** – `GOOS=windows go build` produit un `.exe` Windows depuis un Mac ou Linux.
- **Démarrage rapide et faible mémoire** – Essentiel pour les outils qui s'exécutent et se terminent rapidement.
- **Bibliothèque standard riche** – `flag`, `os`, `io`, `text/tabwriter`, `encoding/json`, etc.
- **Typage statique** – Aide à prévenir les bugs dans la logique CLI complexe.

De nombreux outils CLI célèbres sont écrits en Go : Docker, Kubernetes, Terraform, Hugo, et d'innombrables outils de développement.

## Exemple

Un outil CLI minimal qui affiche son nom et ses arguments.

## Code exemple

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    fmt.Printf("Programme : %s\n", os.Args[0])
    fmt.Printf("Arguments : %v\n", os.Args[1:])
}
```

## Sortie (exécuté comme `./moncli bonjour monde`)

```bash
Programme : ./moncli
Arguments : [bonjour monde]
```

## Liens utiles

- [Blog Go : Outils en ligne de commande](https://go.dev/blog/tools)
- [Awesome Go CLI tools](https://github.com/avelino/awesome-go#command-line)
