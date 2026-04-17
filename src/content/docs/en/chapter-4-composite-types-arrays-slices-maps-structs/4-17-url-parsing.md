---
title: URL parsing
sidebar:
  order: 17
  label: 4.17 URL parsing
---

## Context

The `net/url` package parses URLs and escapes query strings. Use `url.Parse` to break a URL into components.

## Example

Parse a URL and extract parts.

## Code example

```go
package main

import (
    "fmt"
    "net/url"
)

func main() {
    s := "https://example.com:8080/path?name=Alice&age=30#section"
    u, err := url.Parse(s)
    if err != nil {
        panic(err)
    }
    fmt.Println("Scheme:", u.Scheme)
    fmt.Println("Host:", u.Host)
    fmt.Println("Path:", u.Path)
    fmt.Println("Query:", u.Query())
    fmt.Println("Fragment:", u.Fragment)
}
```

## Output

```bash
Scheme: https
Host: example.com:8080
Path: /path
Query: map[age:[30] name:[Alice]]
Fragment: section
```

## Useful links

- [net/url package](https://pkg.go.dev/net/url)
- [Go by Example: URL Parsing](https://gobyexample.com/url-parsing)
