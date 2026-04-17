---
title: Project Reusable stringutil package
sidebar:
  order: 7
  label: 6.7 Project Reusable stringutil package
---

## Context

Build a reusable package `stringutil` that provides common string utilities: `Reverse`, `ToUpper`, `ToLower`, `Contains`, etc. Then use it in a main program.

This project demonstrates:

- Package creation
- Visibility (exported vs unexported)
- Importing your own package
- Writing tests

## Step‑by‑step code

### Directory structure

```bash
stringutil/
├── go.mod
├── stringutil.go
├── stringutil_test.go
└── cmd/
    └── demo/
        └── main.go
```

### go.mod

```
module github.com/yourusername/stringutil

go 1.24
```

### stringutil.go

```go
package stringutil

import "strings"

// Reverse returns its argument string reversed rune-wise.
func Reverse(s string) string {
    r := []rune(s)
    for i, j := 0, len(r)-1; i < j; i, j = i+1, j-1 {
        r[i], r[j] = r[j], r[i]
    }
    return string(r)
}

// ToUpper converts the string to uppercase.
func ToUpper(s string) string {
    return strings.ToUpper(s)
}

// ToLower converts the string to lowercase.
func ToLower(s string) string {
    return strings.ToLower(s)
}

// Contains checks if substring is present.
func Contains(s, substr string) bool {
    return strings.Contains(s, substr)
}

// IsPalindrome checks if a string reads the same forward and backward.
func IsPalindrome(s string) bool {
    rev := Reverse(s)
    return s == rev
}
```

### stringutil_test.go

```go
package stringutil

import "testing"

func TestReverse(t *testing.T) {
    cases := []struct {
        in, want string
    }{
        {"hello", "olleh"},
        {"world", "dlrow"},
        {"", ""},
        {"世 界", "界 世"},
    }
    for _, c := range cases {
        got := Reverse(c.in)
        if got != c.want {
            t.Errorf("Reverse(%q) == %q, want %q", c.in, got, c.want)
        }
    }
}

func TestIsPalindrome(t *testing.T) {
    if !IsPalindrome("racecar") {
        t.Error("racecar should be palindrome")
    }
    if IsPalindrome("hello") {
        t.Error("hello should not be palindrome")
    }
}
```

### cmd/demo/main.go

```go
package main

import (
    "fmt"
    "github.com/yourusername/stringutil"
)

func main() {
    s := "Hello, Go!"
    fmt.Println("Original:", s)
    fmt.Println("Reversed:", stringutil.Reverse(s))
    fmt.Println("Uppercase:", stringutil.ToUpper(s))
    fmt.Println("Lowercase:", stringutil.ToLower(s))
    fmt.Println("Contains 'Go':", stringutil.Contains(s, "Go"))
    fmt.Println("Is palindrome? (racecar):", stringutil.IsPalindrome("racecar"))
}
```

## Example output

```bash
Original: Hello, Go!
Reversed: !oG ,olleH
Uppercase: HELLO, GO!
Lowercase: hello, go!
Contains 'Go': true
Is palindrome? (racecar): true
```

## Useful links

- [Writing Go packages](https://go.dev/doc/tutorial/create-module)
- [Testing in Go](https://go.dev/doc/tutorial/add-a-test)
