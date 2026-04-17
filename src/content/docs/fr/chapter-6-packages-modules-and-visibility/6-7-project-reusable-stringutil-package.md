---
title: Projet – Paquet réutilisable stringutil
sidebar:
  order: 7
  label: 6.7 Projet – Paquet réutilisable stringutil
---

## Contexte

Construisez un paquet réutilisable `stringutil` qui fournit des utilitaires courants pour les chaînes : `Reverse`, `ToUpper`, `ToLower`, `Contains`, etc. Utilisez‑le ensuite dans un programme principal.

Ce projet démontre :

- La création d'un paquet
- La visibilité (exporté vs non exporté)
- L'importation de son propre paquet
- L'écriture de tests

## Code pas à pas

### Structure des répertoires

```bash
stringutil/
├── go.mod
├── stringutil.go
├── stringutil_test.go
└── cmd/
    └── demo/
        └── main.go
```

### go.mod

```
module github.com/votrenom/stringutil

go 1.24
```

### stringutil.go

```go
package stringutil

import "strings"

// Reverse retourne la chaîne inversée (en runes).
func Reverse(s string) string {
    r := []rune(s)
    for i, j := 0, len(r)-1; i < j; i, j = i+1, j-1 {
        r[i], r[j] = r[j], r[i]
    }
    return string(r)
}

// ToUpper convertit la chaîne en majuscules.
func ToUpper(s string) string {
    return strings.ToUpper(s)
}

// ToLower convertit la chaîne en minuscules.
func ToLower(s string) string {
    return strings.ToLower(s)
}

// Contains vérifie si une sous‑chaîne est présente.
func Contains(s, substr string) bool {
    return strings.Contains(s, substr)
}

// IsPalindrome vérifie si une chaîne se lit identiquement dans les deux sens.
func IsPalindrome(s string) bool {
    rev := Reverse(s)
    return s == rev
}
```

### stringutil_test.go

```go
package stringutil

import "testing"

func TestReverse(t *testing.T) {
    cas := []struct {
        entree, attendu string
    }{
        {"bonjour", "ruojnob"},
        {"monde", "ednom"},
        {"", ""},
        {"世 界", "界 世"},
    }
    for _, c := range cas {
        obtenu := Reverse(c.entree)
        if obtenu != c.attendu {
            t.Errorf("Reverse(%q) == %q, attendu %q", c.entree, obtenu, c.attendu)
        }
    }
}

func TestIsPalindrome(t *testing.T) {
    if !IsPalindrome("ressasser") {
        t.Error("ressasser devrait être un palindrome")
    }
    if IsPalindrome("bonjour") {
        t.Error("bonjour ne devrait pas être un palindrome")
    }
}
```

### cmd/demo/main.go

```go
package main

import (
    "fmt"
    "github.com/votrenom/stringutil"
)

func main() {
    s := "Bonjour, Go !"
    fmt.Println("Original :", s)
    fmt.Println("Inversé :", stringutil.Reverse(s))
    fmt.Println("Majuscules :", stringutil.ToUpper(s))
    fmt.Println("Minuscules :", stringutil.ToLower(s))
    fmt.Println("Contient 'Go' :", stringutil.Contains(s, "Go"))
    fmt.Println("Est un palindrome ? (ressasser) :", stringutil.IsPalindrome("ressasser"))
}
```

## Exemple de sortie

```bash
Original : Bonjour, Go !
Inversé : !oG ,ruojnoB
Majuscules : BONJOUR, GO !
Minuscules : bonjour, go !
Contient 'Go' : true
Est un palindrome ? (ressasser) : true
```

## Liens utiles

- [Écrire des paquets Go](https://go.dev/doc/tutorial/create-module)
- [Tests en Go](https://go.dev/doc/tutorial/add-a-test)
