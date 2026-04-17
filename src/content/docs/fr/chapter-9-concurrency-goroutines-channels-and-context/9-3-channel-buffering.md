---
title: Tampon de canaux
sidebar:
  order: 3
  label: 9.3 Tampon de canaux
---

## Contexte

Les canaux tamponnés ont une capacité. L'envoi vers un canal tamponné bloque seulement lorsque le tampon est plein ; la réception bloque lorsque le tampon est vide. Utilisez `make(chan T, capacité)`.

## Exemple

Envoyer trois valeurs dans un canal tamponné sans récepteur immédiat.

## Code exemple

```go
package main

import "fmt"

func main() {
    ch := make(chan string, 2)
    ch <- "tamponné"
    ch <- "canal"
    fmt.Println(<-ch)
    fmt.Println(<-ch)
}
```

## Sortie

```bash
tamponné
canal
```

## Liens utiles

- [Go by Example : Tampon de canaux](https://gobyexample.com/fr/channel-buffering)
- [Blog Go : Canaux](https://go.dev/blog/pipelines)
