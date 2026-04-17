---
title: Nil interfaces vs nil concrete values
sidebar:
  order: 5
  label: 7.5 Nil interfaces vs nil concrete values
---

## Context

An interface value is a pair `(type, value)`. It is `nil` only if both type and value are `nil`. If you assign a `nil` concrete pointer to an interface, the interface itself is **not nil** because it holds a type.

## Example

Demonstrate the difference.

## Code example

```go
package main

import "fmt"

type MyError struct{}

func (e *MyError) Error() string {
    return "my error"
}

func returnsError() error {
    var e *MyError = nil
    return e // returns a non-nil interface (type is *MyError, value is nil)
}

func main() {
    var i interface{} = nil
    fmt.Println("i is nil:", i == nil) // true

    err := returnsError()
    fmt.Println("err is nil:", err == nil) // false
    fmt.Printf("err type: %T, value: %v\n", err, err)

    // To check if the concrete value is nil:
    if err == nil {
        fmt.Println("This won't print")
    } else if err != nil {
        fmt.Println("err is not nil, but the concrete value may be nil")
    }
}
```

## Output

```bash
i is nil: true
err is nil: false
err type: *main.MyError, value: <nil>
err is not nil, but the concrete value may be nil
```

## Useful links

- [Go blog: The Laws of Reflection](https://go.dev/blog/laws-of-reflection)
- [Nil interface values](https://go.dev/ref/spec#Interface_types)
