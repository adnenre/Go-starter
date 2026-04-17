---
title: Remplacement de processus (exec)
sidebar:
  order: 22
  label: 9.22 Remplacement de processus (exec)
---

## Contexte

`syscall.Exec` remplace le processus Go courant par un autre programme (il ne retourne jamais). C'est rarement utilisé, mais disponible pour des cas avancés.

## Exemple

Remplacer le processus courant par `/bin/ls`.

## Code exemple

```go
package main

import (
    "syscall"
)

func main() {
    binaire := "/bin/ls"
    args := []string{"ls", "-l"}
    env := syscall.Environ()

    err := syscall.Exec(binaire, args, env)
    if err != nil {
        panic(err)
    }
}
```

## Sortie (exemple)

```bash
total 0
-rw-r--r--  1 user  staff  0 Jan 1 12:00 fichier.txt
```

## Liens utiles

- [Documentation syscall.Exec](https://pkg.go.dev/syscall#Exec)
- [Go by Example : Exec](https://gobyexample.com/fr/execing-processes)
