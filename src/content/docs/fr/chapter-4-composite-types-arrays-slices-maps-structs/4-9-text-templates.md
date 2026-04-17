---
title: Templates texte
sidebar:
  order: 9
  label: 4.9 Templates texte
---

## Contexte

Le package `text/template` génère une sortie textuelle à partir de données en utilisant une syntaxe de template. Il est sûr pour la génération HTML (utilisez `html/template` pour le web).

## Exemple

Exécuter un template avec une structure.

## Code exemple

```go
package main

import (
    "os"
    "text/template"
)

func main() {
    type Personne struct {
        Nom string
        Age int
    }
    p := Personne{"Alice", 30}

    tmpl := template.Must(template.New("salutation").Parse("Bonjour {{.Nom}}, vous avez {{.Age}} ans."))
    tmpl.Execute(os.Stdout, p)
}
```

## Sortie

```bash
Bonjour Alice, vous avez 30 ans.
```

## Liens utiles

- [Package text/template](https://pkg.go.dev/text/template)
- [Go by Example : Templates](https://gobyexample.com/fr/templates)
