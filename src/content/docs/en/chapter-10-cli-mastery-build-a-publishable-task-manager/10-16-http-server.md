---
title: HTTP server
sidebar:
  order: 16
  label: 10.16 HTTP server
---

## Context

Go's `net/http` package makes it easy to build HTTP servers. Use `http.HandleFunc` and `http.ListenAndServe`.

## Example

A simple server that responds with "Hello, World".

## Code example

```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

## Output (curl http://localhost:8080/Alice)

```bash
Hello, Alice!
```

## Useful links

- [net/http server](https://pkg.go.dev/net/http#ListenAndServe)
- [Go by Example: HTTP Servers](https://gobyexample.com/http-servers)
