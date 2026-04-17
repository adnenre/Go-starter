---
title: HTTP client
sidebar:
  order: 15
  label: 10.15 HTTP client
---

## Context

The `net/http` package provides an HTTP client. Use `http.Get` for simple GET requests, or `http.Client` for custom timeouts, headers, etc.

## Example

Fetch a URL and print the status code.

## Code example

```go
package main

import (
    "fmt"
    "net/http"
    "time"
)

func main() {
    client := &http.Client{Timeout: 5 * time.Second}
    resp, err := client.Get("https://example.com")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer resp.Body.Close()
    fmt.Println("Status:", resp.Status)
}
```

## Output

```bash
Status: 200 OK
```

## Useful links

- [net/http package](https://pkg.go.dev/net/http)
- [Go by Example: HTTP Clients](https://gobyexample.com/http-clients)
