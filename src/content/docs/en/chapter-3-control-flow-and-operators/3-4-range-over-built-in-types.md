---
title: Range over built in types
sidebar:
  order: 4
  label: 3.4 Range over built in types
---

## Context

The `range` keyword allows iteration over slices, arrays, maps, strings (runes), and channels. It returns one or two values depending on the type.

- **Slices/arrays**: `index, value`
- **Maps**: `key, value`
- **Strings**: `byte index, rune`
- **Channels**: `value` (single parameter)

## Example

Iterate over a slice, a map, and a string.

## Code example

```go
package main

import "fmt"

func main() {
    // Slice
    nums := []int{2, 4, 6}
    for i, v := range nums {
        fmt.Printf("index=%d, value=%d\n", i, v)
    }

    // Map
    colors := map[string]string{"red": "#FF0000", "green": "#00FF00"}
    for key, value := range colors {
        fmt.Printf("%s -> %s\n", key, value)
    }

    // String (rune by rune)
    for pos, r := range "Hello, 世界" {
        fmt.Printf("%d: %c\n", pos, r)
    }
}
```

## Output

```bash
index=0, value=2
index=1, value=4
index=2, value=6
red -> #FF0000
green -> #00FF00
0: H
1: e
2: l
3: l
4: o
5: ,
6:
7: 世
10: 界
```

## Useful links

- [Go spec: Range clause](https://go.dev/ref/spec#RangeClause)
- [Go by Example: Range](https://gobyexample.com/range)
