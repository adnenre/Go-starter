---
title: Project Student Grades Database
sidebar:
  order: 20
  label: 4.20 Project Student Grades Database
---

## Context

Build a command‑line program to manage student grades. Use a map to store student names and slices of grades. Implement add, list, average, and delete operations.

This project combines:

- Maps and slices
- Structs (optional)
- String parsing
- User input loops

## Step‑by‑step code

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
    "strings"
)

func main() {
    db := make(map[string][]float64)
    reader := bufio.NewReader(os.Stdin)

    for {
        fmt.Print("\n> ")
        input, _ := reader.ReadString('\n')
        input = strings.TrimSpace(input)
        parts := strings.Fields(input)
        if len(parts) == 0 {
            continue
        }

        cmd := parts[0]
        switch cmd {
        case "add":
            if len(parts) < 2 {
                fmt.Println("usage: add NAME")
                continue
            }
            name := parts[1]
            if _, exists := db[name]; !exists {
                db[name] = []float64{}
                fmt.Printf("Added student: %s\n", name)
            } else {
                fmt.Printf("Student %s already exists\n", name)
            }

        case "grade":
            if len(parts) < 3 {
                fmt.Println("usage: grade NAME GRADE")
                continue
            }
            name := parts[1]
            grade, err := strconv.ParseFloat(parts[2], 64)
            if err != nil {
                fmt.Println("invalid grade")
                continue
            }
            if grades, exists := db[name]; exists {
                db[name] = append(grades, grade)
                fmt.Printf("Added grade %.1f to %s\n", grade, name)
            } else {
                fmt.Printf("Student %s not found\n", name)
            }

        case "avg":
            if len(parts) < 2 {
                fmt.Println("usage: avg NAME")
                continue
            }
            name := parts[1]
            grades, exists := db[name]
            if !exists || len(grades) == 0 {
                fmt.Printf("No grades for %s\n", name)
                continue
            }
            sum := 0.0
            for _, g := range grades {
                sum += g
            }
            fmt.Printf("Average for %s: %.2f\n", name, sum/float64(len(grades)))

        case "list":
            if len(db) == 0 {
                fmt.Println("No students")
                continue
            }
            for name, grades := range db {
                fmt.Printf("%s: %v\n", name, grades)
            }

        case "delete":
            if len(parts) < 2 {
                fmt.Println("usage: delete NAME")
                continue
            }
            name := parts[1]
            if _, exists := db[name]; exists {
                delete(db, name)
                fmt.Printf("Deleted %s\n", name)
            } else {
                fmt.Printf("Student %s not found\n", name)
            }

        case "exit":
            fmt.Println("Goodbye!")
            return

        default:
            fmt.Println("Commands: add, grade, avg, list, delete, exit")
        }
    }
}
```

## Example interaction

```bash
> add Alice
Added student: Alice
> grade Alice 85.5
Added grade 85.5 to Alice
> grade Alice 92.0
Added grade 92.0 to Alice
> avg Alice
Average for Alice: 88.75
> list
Alice: [85.5 92]
> delete Alice
Deleted Alice
> exit
Goodbye!
```

## Useful links

- [Map documentation](https://go.dev/blog/maps)
- [strconv package](https://pkg.go.dev/strconv)
- [bufio package](https://pkg.go.dev/bufio)
