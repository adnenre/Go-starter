---
title: Journalisation (logging)
sidebar:
  order: 6
  label: 10.6 Journalisation (logging)
---

## Contexte

Le package `log` fournit une journalisation simple. Pour une journalisation structurée, utilisez `log/slog` (Go 1.21+). La journalisation est essentielle pour que les outils CLI affichent l'état, les erreurs et les informations de débogage.

## Exemple

Utiliser `log` et `slog` pour enregistrer des messages.

## Code exemple

```go
package main

import (
    "log"
    "log/slog"
    "os"
)

func main() {
    // Journalisation standard
    log.Println("Ceci est un message de log")

    // Journalisation structurée avec slog
    slog.Info("Serveur démarré", "port", 8080)
    slog.Warn("Utilisation disque élevée", "utilisation", "85%")
    slog.Error("Échec de connexion", "erreur", "timeout")
}
```

## Sortie

```bash
2025/01/01 12:00:00 Ceci est un message de log
2025-01-01T12:00:00.000 INFO Serveur démarré port=8080
2025-01-01T12:00:00.000 WARN Utilisation disque élevée utilisation=85%
2025-01-01T12:00:00.000 ERROR Échec de connexion erreur=timeout
```

## Liens utiles

- [Package log](https://pkg.go.dev/log)
- [Package log/slog](https://pkg.go.dev/log/slog)
