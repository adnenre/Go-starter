---
title: Conditionals if else
sidebar:
  order: 1
  label: 3.1 Conditionals if else
---

## Context

In Go, `if` and `if-else` conditions are written without parentheses around the condition. Braces are required.

You can also use a **short statement** before the condition, with the same scope as the `if` block.

## Example

Check if a number is positive, negative, or zero.

## Code example

```go
package main

import "fmt"

func main() {
    x := 5

    if x > 0 {
        fmt.Println(x, "is positive")
    } else if x < 0 {
        fmt.Println(x, "is negative")
    } else {
        fmt.Println(x, "is zero")
    }

    // Short statement
    if y := -3; y < 0 {
        fmt.Println(y, "is negative")
    }
    // y is not accessible here
}
```

## Output

```bash
5 is positive
-3 is negative
```

## Useful links

- [Go spec: If statements](https://go.dev/ref/spec#If_statements)
- [Go by Example: If/Else](https://gobyexample.com/if-else)
