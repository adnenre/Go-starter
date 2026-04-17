---
title: Projet – Récupérateur d'URL concurrent
sidebar:
  order: 23
  label: 9.23 Projet – Récupérateur d'URL concurrent
---

## Contexte

Construisez un programme qui récupère plusieurs URL en parallèle, avec limitation de débit, timeout et annulation gracieuse via contexte.

Ce projet démontre :

- Goroutines et canaux
- Patron du pool de workers
- Contexte pour l'annulation
- Limitation de débit avec tickers
- Gestion d'erreur

## Code pas à pas

```go
package main

import (
    "context"
    "fmt"
    "io"
    "net/http"
    "time"
)

type resultatFetch struct {
    url      string
    contenu   string
    err       error
    duree     time.Duration
}

func fetch(ctx context.Context, url string) resultatFetch {
    debut := time.Now()
    req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
    if err != nil {
        return resultatFetch{url: url, err: err, duree: time.Since(debut)}
    }
    client := &http.Client{Timeout: 10 * time.Second}
    resp, err := client.Do(req)
    if err != nil {
        return resultatFetch{url: url, err: err, duree: time.Since(debut)}
    }
    defer resp.Body.Close()
    corps, err := io.ReadAll(resp.Body)
    if err != nil {
        return resultatFetch{url: url, err: err, duree: time.Since(debut)}
    }
    return resultatFetch{
        url:     url,
        contenu: string(corps),
        duree:   time.Since(debut),
    }
}

func main() {
    urls := []string{
        "https://example.com",
        "https://google.com",
        "https://github.com",
        "https://stackoverflow.com",
    }

    // Limitation de débit : 2 requêtes par seconde
    limiteur := time.Tick(500 * time.Millisecond)

    // Contexte avec timeout global
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()

    resultats := make(chan resultatFetch, len(urls))

    for _, url := range urls {
        <-limiteur // attendre le limiteur
        go func(u string) {
            resultats <- fetch(ctx, u)
        }(url)
    }

    // Collecte des résultats
    for i := 0; i < len(urls); i++ {
        res := <-resultats
        if res.err != nil {
            fmt.Printf("[ERREUR] %s : %v (durée %v)\n", res.url, res.err, res.duree)
        } else {
            fmt.Printf("[OK] %s : %d octets (durée %v)\n", res.url, len(res.contenu), res.duree)
        }
    }
}
```

## Sortie (exemple)

```bash
[OK] https://example.com : 1256 octets (durée 234ms)
[OK] https://google.com : 18742 octets (durée 567ms)
[OK] https://github.com : 45678 octets (durée 890ms)
[OK] https://stackoverflow.com : 34567 octets (durée 712ms)
```

## Liens utiles

- [Package net/http](https://pkg.go.dev/net/http)
- [Package context](https://pkg.go.dev/context)
- [Patrons de concurrence Go](https://go.dev/blog/pipelines)
