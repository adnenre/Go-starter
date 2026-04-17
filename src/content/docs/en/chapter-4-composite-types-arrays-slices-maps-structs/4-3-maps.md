---
title: Maps
sidebar:
  order: 3
  label: 4.3 Maps
---

## Context

A map is an unordered collection of key‑value pairs. Keys must be comparable types. Maps are reference types; `nil` maps behave like empty maps but cannot be assigned to.

## Example

Create, insert, look up, and delete entries.

## Code example

```go
package main

import "fmt"

func main() {
    m := make(map[string]int)
    m["apple"] = 5
    m["banana"] = 7

    fmt.Println(m["apple"])
    fmt.Println(len(m))

    delete(m, "banana")

    value, ok := m["banana"]
    fmt.Printf("value=%d, ok=%v\n", value, ok)

    literal := map[string]int{"x": 1, "y": 2}
    fmt.Println(literal)
}
```

## Output

```bash
5
2
value=0, ok=false
map[x:1 y:2]
```

## Useful links

- [Go blog: Go maps in action](https://go.dev/blog/maps)
- [Go by Example: Maps](https://gobyexample.com/maps)
