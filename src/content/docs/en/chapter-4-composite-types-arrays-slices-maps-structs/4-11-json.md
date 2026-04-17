---
title: JSON
sidebar:
  order: 11
  label: 4.11 JSON
---

## Context

Go’s `encoding/json` package encodes and decodes JSON. Struct tags control field names and options (omitempty, string, etc.).

## Example

Marshal and unmarshal JSON.

## Code example

```go
package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string `json:"name"`
    Age  int    `json:"age,omitempty"`
}

func main() {
    p := Person{Name: "Alice", Age: 30}
    data, _ := json.Marshal(p)
    fmt.Println(string(data))

    jsonStr := `{"name":"Bob"}`
    var p2 Person
    json.Unmarshal([]byte(jsonStr), &p2)
    fmt.Printf("%+v\n", p2)
}
```

## Output

```bash
{"name":"Alice","age":30}
{Name:Bob Age:0}
```

## Useful links

- [json package documentation](https://pkg.go.dev/encoding/json)
- [Go by Example: JSON](https://gobyexample.com/json)
