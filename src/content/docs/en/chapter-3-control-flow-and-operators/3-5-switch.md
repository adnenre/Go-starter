---
title: Switch
sidebar:
  order: 5
  label: 3.5 Switch
---

## Context

In Go, `switch` is very flexible:

- No implicit fallthrough (automatic `break` between cases).
- Cases can be lists of values.
- You can use a `switch` without an expression (equivalent to an `if-else` chain).
- `fallthrough` forces execution into the next case (rarely used).

## Example

Determine the type of day, or use a switch without expression.

## Code example

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    day := time.Now().Weekday()

    switch day {
    case time.Saturday, time.Sunday:
        fmt.Println("It's the weekend!")
    default:
        fmt.Println("It's a weekday.")
    }

    // Switch without expression
    x := 10
    switch {
    case x > 0:
        fmt.Println("x is positive")
    case x < 0:
        fmt.Println("x is negative")
    default:
        fmt.Println("x is zero")
    }

    // fallthrough (not recommended)
    a := 2
    switch a {
    case 1:
        fmt.Println("one")
    case 2:
        fmt.Println("two")
        fallthrough
    case 3:
        fmt.Println("three (fallthrough)")
    }
}
```

## Output (example depends on current day)

```bash
It's a weekday.
x is positive
two
three (fallthrough)
```

## Useful links

- [Go spec: Switch statements](https://go.dev/ref/spec#Switch_statements)
- [Go by Example: Switch](https://gobyexample.com/switch)
