---
title: Pools de workers
sidebar:
  order: 13
  label: 9.13 Pools de workers
---

## Contexte

Un pool de workers utilise plusieurs goroutines pour traiter des tâches depuis un canal. Ce patron limite la concurrence et distribue efficacement le travail.

## Exemple

Créer un pool de 3 workers traitant 5 tâches.

## Code exemple

```go
package main

import (
    "fmt"
    "time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("worker %d traite la tâche %d\n", id, j)
        time.Sleep(time.Second)
        results <- j * 2
    }
}

func main() {
    const nbJobs = 5
    const nbWorkers = 3

    jobs := make(chan int, nbJobs)
    results := make(chan int, nbJobs)

    // Démarrer les workers
    for w := 1; w <= nbWorkers; w++ {
        go worker(w, jobs, results)
    }

    // Envoyer les tâches
    for j := 1; j <= nbJobs; j++ {
        jobs <- j
    }
    close(jobs)

    // Collecter les résultats
    for r := 1; r <= nbJobs; r++ {
        <-results
    }
}
```

## Sortie (l'ordre peut varier)

```bash
worker 3 traite la tâche 1
worker 1 traite la tâche 2
worker 2 traite la tâche 3
worker 1 traite la tâche 4
worker 2 traite la tâche 5
```

## Liens utiles

- [Go by Example : Pools de workers](https://gobyexample.com/fr/worker-pools)
- [Patrons de concurrence Go : Pipelines](https://go.dev/blog/pipelines)
