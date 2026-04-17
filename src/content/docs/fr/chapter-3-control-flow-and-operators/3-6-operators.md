---
title: Opérateurs
sidebar:
  order: 6
  label: 3.6 Opérateurs
---

## Contexte

Go propose des opérateurs similaires au C, avec quelques spécificités.

### Catégories

- **Arithmétiques** : `+` `-` `*` `/` `%`
- **Comparaison** : `==` `!=` `<` `<=` `>` `>=`
- **Logiques** : `&&` `||` `!`
- **Bit à bit** : `&` `|` `^` `&^` (ET NON) `<<` `>>`
- **Assignation** : `=` `+=` `-=` `*=` `/=` `%=` `&=` `|=` `^=` `<<=` `>>=`

## Exemple

Utilisation de différents opérateurs.

## Code exemple

```go
package main

import "fmt"

func main() {
    a, b := 10, 3
    fmt.Println("Addition :", a+b)
    fmt.Println("Division entière :", a/b)
    fmt.Println("Reste :", a%b)

    // Opérateurs logiques
    x, y := true, false
    fmt.Println("x && y :", x && y)
    fmt.Println("x || y :", x || y)

    // Bit à bit
    c, d := 0b1100, 0b1010
    fmt.Printf("c & d = %b\n", c&d)   // 1000
    fmt.Printf("c | d = %b\n", c|d)   // 1110
    fmt.Printf("c ^ d = %b\n", c^d)   // 0110
    fmt.Printf("c &^ d = %b\n", c&^d) // 0100
    fmt.Printf("c << 1 = %b\n", c<<1) // 11000
}
```

## Sortie

```bash
Addition : 13
Division entière : 3
Reste : 1
x && y : false
x || y : true
c & d = 1000
c | d = 1110
c ^ d = 110
c &^ d = 100
c << 1 = 11000
```

## Liens utiles

- [Spécification Go : Opérateurs](https://go.dev/ref/spec#Operators)
- [Go by Example : Opérateurs](https://gobyexample.com/fr/operators)
