---
title: Logging
sidebar:
  order: 6
  label: 10.6 Logging
---

## Context

The `log` package provides simple logging. For structured logging, use `log/slog` (Go 1.21+). Logging is essential for CLI tools to output status, errors, and debug information.

## Example

Use `log` and `slog` to log messages.

## Code example

```go
package main

import (
    "log"
    "log/slog"
    "os"
)

func main() {
    // Standard log
    log.Println("This is a log message")

    // Structured logging with slog
    slog.Info("Server started", "port", 8080)
    slog.Warn("Disk usage high", "usage", "85%")
    slog.Error("Failed to connect", "error", "timeout")
}
```

## Output

```bash
2025/01/01 12:00:00 This is a log message
2025-01-01T12:00:00.000 INFO Server started port=8080
2025-01-01T12:00:00.000 WARN Disk usage high usage=85%
2025-01-01T12:00:00.000 ERROR Failed to connect error=timeout
```

## Useful links

- [log package](https://pkg.go.dev/log)
- [log/slog package](https://pkg.go.dev/log/slog)
