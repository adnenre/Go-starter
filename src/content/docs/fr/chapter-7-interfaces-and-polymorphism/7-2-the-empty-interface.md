---
title: L'interface vide
sidebar:
  order: 2
  label: 7.2 L'interface vide
---

## Contexte

L'interface vide `interface{}` (ou `any` depuis Go 1.18) n'a aucune méthode. Par conséquent, **tous** les types la satisfont. Elle est utilisée quand une fonction doit accepter des valeurs de n'importe quel type, similaire à `any` en TypeScript. Cependant, pour utiliser la valeur sous‑jacente, vous devez effectuer une assertion de type ou un `type switch`.

## Exemple

Accepter n'importe quelle valeur et l'afficher.

## Code exemple

```go
package main

import "fmt"

func decrire(i interface{}) {
    fmt.Printf("Type = %T, Valeur = %v\n", i, i)
}

func main() {
    decrire(42)
    decrire("bonjour")
    decrire(3.14)
}
```

## Sortie

```bash
Type = int, Valeur = 42
Type = string, Valeur = bonjour
Type = float64, Valeur = 3.14
```

## Liens utiles

- [Spécification Go : Interface vide](https://go.dev/ref/spec#Interface_types)
- [Go by Example : Interface vide](https://gobyexample.com/fr/empty-interface)
