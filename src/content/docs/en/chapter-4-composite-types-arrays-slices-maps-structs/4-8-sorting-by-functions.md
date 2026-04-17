---
title: Sorting by functions
sidebar:
  order: 8
  label: 4.8 Sorting by functions
---

## Context

For custom sorting (e.g., by struct field), use `sort.Slice` with a less function. This avoids implementing `sort.Interface`.

## Example

Sort a slice of structs by age and by name.

## Code example

```go
package main

import (
    "fmt"
    "sort"
)

type Person struct {
    Name string
    Age  int
}

func main() {
    people := []Person{
        {"Alice", 30},
        {"Bob", 25},
        {"Charlie", 35},
    }

    // Sort by Age (ascending)
    sort.Slice(people, func(i, j int) bool {
        return people[i].Age < people[j].Age
    })
    fmt.Println("By age:", people)

    // Sort by Name (descending)
    sort.Slice(people, func(i, j int) bool {
        return people[i].Name > people[j].Name
    })
    fmt.Println("By name descending:", people)
}
```

## Output

```bash
By age: [{Bob 25} {Alice 30} {Charlie 35}]
By name descending: [{Charlie 35} {Bob 25} {Alice 30}]
```

## Useful links

- [sort.Slice documentation](https://pkg.go.dev/sort#Slice)
- [Go by Example: Sorting by Functions](https://gobyexample.com/sorting-by-functions)
