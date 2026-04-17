---
title: Text templates
sidebar:
  order: 9
  label: 4.9 Text templates
---

## Context

The `text/template` package generates textual output from data using a template syntax. It is safe for HTML generation as well (use `html/template` for web).

## Example

Execute a template with struct data.

## Code example

```go
package main

import (
    "os"
    "text/template"
)

func main() {
    type Person struct {
        Name string
        Age  int
    }
    p := Person{"Alice", 30}

    tmpl := template.Must(template.New("greeting").Parse("Hello {{.Name}}, you are {{.Age}} years old."))
    tmpl.Execute(os.Stdout, p)
}
```

## Output

```bash
Hello Alice, you are 30 years old.
```

## Useful links

- [text/template package](https://pkg.go.dev/text/template)
- [Go by Example: Templates](https://gobyexample.com/templates)
