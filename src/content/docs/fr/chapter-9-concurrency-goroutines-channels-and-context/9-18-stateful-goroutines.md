---
title: Goroutines avec état
sidebar:
  order: 18
  label: 9.18 Goroutines avec état
---

## Contexte

Au lieu d'utiliser des mutexes, vous pouvez gérer l'état en envoyant des commandes à une seule goroutine qui possède l'état (modèle d'acteur). Cela utilise des canaux et est souvent plus idiomatique.

## Exemple

Une goroutine avec état qui maintient une map, accessible via des canaux.

## Code exemple

```go
package main

import "fmt"

type operationLecture struct {
    cle  int
    rep  chan int
}
type operationEcriture struct {
    cle  int
    val  int
    rep  chan bool
}

func main() {
    lectures := make(chan operationLecture)
    ecritures := make(chan operationEcriture)

    // Goroutine avec état
    go func() {
        etat := make(map[int]int)
        for {
            select {
            case lecture := <-lectures:
                lecture.rep <- etat[lecture.cle]
            case ecriture := <-ecritures:
                etat[ecriture.cle] = ecriture.val
                ecriture.rep <- true
            }
        }
    }()

    // Effectuer 1000 lectures et écritures
    for i := 0; i < 1000; i++ {
        go func() {
            rep := make(chan int)
            lectures <- operationLecture{cle: i, rep: rep}
            <-rep
        }()
        go func() {
            rep := make(chan bool)
            ecritures <- operationEcriture{cle: i, val: i, rep: rep}
            <-rep
        }()
    }
    fmt.Println("Terminé")
}
```

## Sortie

```bash
Terminé
```

## Liens utiles

- [Go by Example : Goroutines avec état](https://gobyexample.com/fr/stateful-goroutines)
- [Patrons de concurrence Go : Partager par communication](https://go.dev/blog/codelab-share)
