---
title: Importing
sidebar:
  order: 3
  label: 6.3 Importing
---

## Context

Use `import` to bring other packages into scope. You can import single packages, multiple packages in a block, rename imports with aliases, or use a blank import (`_`) for side effects (e.g., registering a driver).

## Example

Show different import styles.

## Code example

```go
package main

import (
    "fmt"
    "math/rand"
    myfmt "mylib/fmt" // alias
    _ "image/png"     // blank import for side effect
)

func main() {
    fmt.Println(rand.Intn(100))
    myfmt.Println("Hello")
}
```

## Output (example)

```bash
42
Hello
```

## Useful links

- [Go spec: Import declarations](https://go.dev/ref/spec#Import_declarations)
- [Effective Go: Importing](https://go.dev/doc/effective_go#importing)
