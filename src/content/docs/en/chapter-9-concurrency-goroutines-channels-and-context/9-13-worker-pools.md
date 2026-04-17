---
title: Worker pools
sidebar:
  order: 13
  label: 9.13 Worker pools
---

## Context

A worker pool uses multiple goroutines to process tasks from a channel. This pattern limits concurrency and efficiently distributes work.

## Example

Create a pool of 3 workers processing 5 jobs.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("worker %d processing job %d\n", id, j)
        time.Sleep(time.Second)
        results <- j * 2
    }
}

func main() {
    const numJobs = 5
    const numWorkers = 3

    jobs := make(chan int, numJobs)
    results := make(chan int, numJobs)

    // Start workers
    for w := 1; w <= numWorkers; w++ {
        go worker(w, jobs, results)
    }

    // Send jobs
    for j := 1; j <= numJobs; j++ {
        jobs <- j
    }
    close(jobs)

    // Collect results
    for r := 1; r <= numJobs; r++ {
        <-results
    }
}
```

## Output (order may vary)

```bash
worker 3 processing job 1
worker 1 processing job 2
worker 2 processing job 3
worker 1 processing job 4
worker 2 processing job 5
```

## Useful links

- [Go by Example: Worker Pools](https://gobyexample.com/worker-pools)
- [Go concurrency patterns: Pipelines](https://go.dev/blog/pipelines)
