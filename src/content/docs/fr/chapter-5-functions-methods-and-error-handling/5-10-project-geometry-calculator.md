---
title: Projet – Calculateur de géométrie
sidebar:
  order: 10
  label: 5.10 Projet – Calculateur de géométrie
---

## Contexte

Construisez un programme en ligne de commande qui calcule l'aire et le périmètre de différentes formes (cercle, rectangle, triangle). Utilisez des structures, des méthodes, la gestion d'erreur et les entrées utilisateur.

Ce projet combine :

- Structures et méthodes
- Gestion d'erreur (erreurs personnalisées)
- Boucle de lecture utilisateur
- Instruction `switch`

## Code pas à pas

```go
package main

import (
    "bufio"
    "fmt"
    "math"
    "os"
    "strconv"
    "strings"
)

// Cercle
type Cercle struct {
    Rayon float64
}

func (c Cercle) Aire() float64 {
    return math.Pi * c.Rayon * c.Rayon
}

func (c Cercle) Perimetre() float64 {
    return 2 * math.Pi * c.Rayon
}

// Rectangle
type Rectangle struct {
    Largeur, Hauteur float64
}

func (r Rectangle) Aire() float64 {
    return r.Largeur * r.Hauteur
}

func (r Rectangle) Perimetre() float64 {
    return 2 * (r.Largeur + r.Hauteur)
}

// Triangle équilatéral
type Triangle struct {
    Cote float64
}

func (t Triangle) Aire() float64 {
    return (math.Sqrt(3) / 4) * t.Cote * t.Cote
}

func (t Triangle) Perimetre() float64 {
    return 3 * t.Cote
}

func main() {
    lecteur := bufio.NewReader(os.Stdin)

    fmt.Println("Calculateur de géométrie")
    fmt.Println("Formes disponibles : cercle, rectangle, triangle")
    fmt.Print("Entrez la forme : ")
    forme, _ := lecteur.ReadString('\n')
    forme = strings.TrimSpace(strings.ToLower(forme))

    switch forme {
    case "cercle":
        fmt.Print("Entrez le rayon : ")
        rStr, _ := lecteur.ReadString('\n')
        r, err := strconv.ParseFloat(strings.TrimSpace(rStr), 64)
        if err != nil || r <= 0 {
            fmt.Println("Rayon invalide")
            return
        }
        c := Cercle{Rayon: r}
        fmt.Printf("Aire : %.2f, Périmètre : %.2f\n", c.Aire(), c.Perimetre())

    case "rectangle":
        fmt.Print("Entrez la largeur : ")
        lStr, _ := lecteur.ReadString('\n')
        l, err1 := strconv.ParseFloat(strings.TrimSpace(lStr), 64)
        fmt.Print("Entrez la hauteur : ")
        hStr, _ := lecteur.ReadString('\n')
        h, err2 := strconv.ParseFloat(strings.TrimSpace(hStr), 64)
        if err1 != nil || err2 != nil || l <= 0 || h <= 0 {
            fmt.Println("Dimensions invalides")
            return
        }
        rect := Rectangle{Largeur: l, Hauteur: h}
        fmt.Printf("Aire : %.2f, Périmètre : %.2f\n", rect.Aire(), rect.Perimetre())

    case "triangle":
        fmt.Print("Entrez la longueur du côté : ")
        cStr, _ := lecteur.ReadString('\n')
        c, err := strconv.ParseFloat(strings.TrimSpace(cStr), 64)
        if err != nil || c <= 0 {
            fmt.Println("Longueur de côté invalide")
            return
        }
        t := Triangle{Cote: c}
        fmt.Printf("Aire : %.2f, Périmètre : %.2f\n", t.Aire(), t.Perimetre())

    default:
        fmt.Println("Forme inconnue")
    }
}
```

## Exemple d'interaction

```bash
Calculateur de géométrie
Formes disponibles : cercle, rectangle, triangle
Entrez la forme : cercle
Entrez le rayon : 5
Aire : 78.54, Périmètre : 31.42
```

## Autre exemple

```bash
Entrez la forme : rectangle
Entrez la largeur : 4
Entrez la hauteur : 7
Aire : 28.00, Périmètre : 22.00
```

## Liens utiles

- [Package math](https://pkg.go.dev/math)
- [Package strconv](https://pkg.go.dev/strconv)
- [Package bufio](https://pkg.go.dev/bufio)
