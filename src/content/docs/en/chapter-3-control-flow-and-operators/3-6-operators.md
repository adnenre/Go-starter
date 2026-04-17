---
title: Operators
sidebar:
  order: 6
  label: 3.6 Operators
---

## Context

Go provides operators similar to C, with a few specifics.

### Categories

- **Arithmetic**: `+` `-` `*` `/` `%`
- **Comparison**: `==` `!=` `<` `<=` `>` `>=`
- **Logical**: `&&` `||` `!`
- **Bitwise**: `&` `|` `^` `&^` (AND NOT) `<<` `>>`
- **Assignment**: `=` `+=` `-=` `*=` `/=` `%=` `&=` `|=` `^=` `<<=` `>>=`

## Example

Use different operators.

## Code example

```go
package main

import "fmt"

func main() {
    a, b := 10, 3
    fmt.Println("Addition:", a+b)
    fmt.Println("Integer division:", a/b)
    fmt.Println("Remainder:", a%b)

    // Logical operators
    x, y := true, false
    fmt.Println("x && y:", x && y)
    fmt.Println("x || y:", x || y)

    // Bitwise
    c, d := 0b1100, 0b1010
    fmt.Printf("c & d = %b\n", c&d)   // 1000
    fmt.Printf("c | d = %b\n", c|d)   // 1110
    fmt.Printf("c ^ d = %b\n", c^d)   // 0110
    fmt.Printf("c &^ d = %b\n", c&^d) // 0100
    fmt.Printf("c << 1 = %b\n", c<<1) // 11000
}
```

## Output

```bash
Addition: 13
Integer division: 3
Remainder: 1
x && y: false
x || y: true
c & d = 1000
c | d = 1110
c ^ d = 110
c &^ d = 100
c << 1 = 11000
```

## Useful links

- [Go spec: Operators](https://go.dev/ref/spec#Operators)
- [Go by Example: Operators](https://gobyexample.com/operators)
