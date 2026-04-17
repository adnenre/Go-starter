---
title: Déclaration de fonction
sidebar:
  order: 1
  label: 5.1 Déclaration de fonction
---

## Contexte

Les fonctions en Go sont déclarées avec le mot‑clé `func`, suivi du nom de la fonction, des paramètres (avec leurs types) et des types de retour (s'il y en a). Les paramètres et les retours sont obligatoires. Les fonctions Go peuvent retourner plusieurs valeurs.

## Exemple

Déclarer une fonction simple qui additionne deux entiers.

## Code exemple

```go
package main

import "fmt"

func addition(a int, b int) int {
    return a + b
}

// Des paramètres de même type peuvent être combinés
func multiplication(a, b int) int {
    return a * b
}

func main() {
    somme := addition(5, 3)
    produit := multiplication(4, 2)
    fmt.Println("Somme :", somme)
    fmt.Println("Produit :", produit)
}
```

## Sortie

```bash
Somme : 8
Produit : 8
```

## Liens utiles

- [Spécification Go : Déclarations de fonction](https://go.dev/ref/spec#Function_declarations)
- [Go by Example : Fonctions](https://gobyexample.com/fr/functions)
