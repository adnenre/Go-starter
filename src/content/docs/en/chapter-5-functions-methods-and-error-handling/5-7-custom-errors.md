---
title: Custom errors
sidebar:
  order: 7
  label: 5.7 Custom errors
---

## Context

You can define custom error types by implementing the `error` interface (`Error() string`). Custom errors can carry additional context (e.g., status codes). Use `errors.Is` and `errors.As` to inspect error chains.

## Example

Define a custom error with an error code.

## Code example

```go
package main

import (
    "errors"
    "fmt"
)

type ValidationError struct {
    Field string
    Value interface{}
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("validation failed for field '%s' with value %v", e.Field, e.Value)
}

func validateAge(age int) error {
    if age < 0 {
        return ValidationError{Field: "age", Value: age}
    }
    return nil
}

func main() {
    err := validateAge(-5)
    if err != nil {
        // Type assertion to get extra fields
        if ve, ok := err.(ValidationError); ok {
            fmt.Printf("Custom error: %s (field=%s, value=%v)\n", err, ve.Field, ve.Value)
        } else {
            fmt.Println("Error:", err)
        }
    }
}
```

## Output

```bash
Custom error: validation failed for field 'age' with value -5 (field=age, value=-5)
```

## Useful links

- [Go by Example: Custom Errors](https://gobyexample.com/custom-errors)
- [errors package](https://pkg.go.dev/errors)
