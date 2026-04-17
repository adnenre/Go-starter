---
title: Project Concurrent URL fetcher
sidebar:
  order: 23
  label: 9.23 Project Concurrent URL fetcher
---

## Context

Build a program that fetches multiple URLs concurrently, with rate limiting, timeout, and graceful cancellation using context.

This project demonstrates:

- Goroutines and channels
- Worker pool pattern
- Context for cancellation
- Rate limiting with tickers
- Error handling

## Step‑by‑step code

```go
package main

import (
    "context"
    "fmt"
    "io"
    "net/http"
    "time"
)

type fetchResult struct {
    url     string
    content string
    err     error
    duration time.Duration
}

func fetch(ctx context.Context, url string) fetchResult {
    start := time.Now()
    req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
    if err != nil {
        return fetchResult{url: url, err: err, duration: time.Since(start)}
    }
    client := &http.Client{Timeout: 10 * time.Second}
    resp, err := client.Do(req)
    if err != nil {
        return fetchResult{url: url, err: err, duration: time.Since(start)}
    }
    defer resp.Body.Close()
    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return fetchResult{url: url, err: err, duration: time.Since(start)}
    }
    return fetchResult{
        url:      url,
        content:  string(body),
        duration: time.Since(start),
    }
}

func main() {
    urls := []string{
        "https://example.com",
        "https://google.com",
        "https://github.com",
        "https://stackoverflow.com",
    }

    // Rate limit: 2 requests per second
    limiter := time.Tick(500 * time.Millisecond)

    // Context with timeout for overall operation
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()

    results := make(chan fetchResult, len(urls))

    for _, url := range urls {
        <-limiter // wait for rate limiter
        go func(u string) {
            results <- fetch(ctx, u)
        }(url)
    }

    // Collect results
    for i := 0; i < len(urls); i++ {
        res := <-results
        if res.err != nil {
            fmt.Printf("[ERROR] %s: %v (took %v)\n", res.url, res.err, res.duration)
        } else {
            fmt.Printf("[OK] %s: %d bytes (took %v)\n", res.url, len(res.content), res.duration)
        }
    }
}
```

## Output (example)

```bash
[OK] https://example.com: 1256 bytes (took 234ms)
[OK] https://google.com: 18742 bytes (took 567ms)
[OK] https://github.com: 45678 bytes (took 890ms)
[OK] https://stackoverflow.com: 34567 bytes (took 712ms)
```

## Useful links

- [net/http package](https://pkg.go.dev/net/http)
- [context package](https://pkg.go.dev/context)
- [Go concurrency patterns](https://go.dev/blog/pipelines)
