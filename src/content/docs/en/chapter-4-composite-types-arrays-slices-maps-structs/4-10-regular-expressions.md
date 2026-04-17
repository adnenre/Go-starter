---
title: Regular expressions
sidebar:
  order: 10
  label: 4.10 Regular expressions
---

## Context

The `regexp` package provides regular expression search and match. It uses the RE2 syntax (no backtracking, guaranteed linear time).

## Example

Match a pattern and extract submatches.

## Code example

```go
package main

import (
    "fmt"
    "regexp"
)

func main() {
    pattern := regexp.MustCompile(`(\w+)=(\d+)`)
    s := "age=30 name=Alice height=175"

    matches := pattern.FindAllStringSubmatch(s, -1)
    for _, m := range matches {
        fmt.Printf("key=%s, value=%s\n", m[1], m[2])
    }

    // Check if matches
    fmt.Println(pattern.MatchString("foo=123"))
}
```

## Output

```bash
key=age, value=30
key=name, value=Alice
key=height, value=175
true
```

## Useful links

- [regexp package documentation](https://pkg.go.dev/regexp)
- [Go by Example: Regular Expressions](https://gobyexample.com/regular-expressions)
