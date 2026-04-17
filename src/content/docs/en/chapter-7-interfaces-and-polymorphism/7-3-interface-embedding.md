---
title: Interface embedding
sidebar:
  order: 3
  label: 7.3 Interface embedding
---

## Context

Interfaces can embed other interfaces. This creates a new interface that contains all methods of the embedded interfaces. It is a form of composition, similar to struct embedding.

## Example

Embed `Reader` and `Writer` into `ReadWriter`.

## Code example

```go
package main

import "fmt"

type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

type ReadWriter interface {
    Reader
    Writer
}

// A simple struct that implements both
type File struct{}

func (f File) Read(p []byte) (int, error) {
    fmt.Println("Reading...")
    return 0, nil
}

func (f File) Write(p []byte) (int, error) {
    fmt.Println("Writing...")
    return 0, nil
}

func main() {
    var rw ReadWriter = File{}
    rw.Read(nil)
    rw.Write(nil)
}
```

## Output

```bash
Reading...
Writing...
```

## Useful links

- [Go spec: Interface embedding](https://go.dev/ref/spec#Interface_types)
- [Go by Example: Embedding Interfaces](https://gobyexample.com/embedding-interfaces)
