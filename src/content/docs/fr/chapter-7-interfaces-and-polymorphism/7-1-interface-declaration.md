---
title: Déclaration d'interface
sidebar:
  order: 1
  label: 7.1 Déclaration d'interface
---

## Contexte

Une interface définit un ensemble de signatures de méthodes. En Go, les interfaces sont satisfaites **implicitement** – un type implémente une interface s'il fournit toutes les méthodes déclarées. Aucun mot‑clé `implements` explicite n'est nécessaire.

## Exemple

Définir une interface `Speaker` et deux structures qui l'implémentent.

## Code exemple

```go
package main

import "fmt"

type Speaker interface {
    Speak() string
}

type Chien struct{}
func (c Chien) Speak() string { return "Woof !" }

type Chat struct{}
func (c Chat) Speak() string { return "Miaou !" }

func faireDuBruit(s Speaker) {
    fmt.Println(s.Speak())
}

func main() {
    chien := Chien{}
    chat := Chat{}
    faireDuBruit(chien)
    faireDuBruit(chat)
}
```

## Sortie

```bash
Woof !
Miaou !
```

## Liens utiles

- [Spécification Go : Types interface](https://go.dev/ref/spec#Interface_types)
- [Go by Example : Interfaces](https://gobyexample.com/fr/interfaces)
