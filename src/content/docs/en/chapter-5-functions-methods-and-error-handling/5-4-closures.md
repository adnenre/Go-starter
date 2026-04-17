---
title: Closures
sidebar:
  order: 4
  label: 5.4 Closures
---

## Context

Go functions can be anonymous and can form closures. A closure is a function value that references variables from outside its body. It captures those variables and can use them even after the outer function has returned.

## Example

Create a closure that returns a function that increments a counter.

## Code example

```go
package main

import "fmt"

func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

func main() {
    inc := counter()
    fmt.Println(inc())
    fmt.Println(inc())
    fmt.Println(inc())

    another := counter()
    fmt.Println(another())
}
```

## Output

```bash
1
2
3
1
```

## Useful links

- [Go by Example: Closures](https://gobyexample.com/closures)
- [Go spec: Function literals](https://go.dev/ref/spec#Function_literals)
