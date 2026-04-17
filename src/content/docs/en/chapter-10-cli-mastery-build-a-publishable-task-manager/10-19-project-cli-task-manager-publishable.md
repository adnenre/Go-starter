---
title: Project CLI Task Manager publishable
sidebar:
  order: 19
  label: 10.19 Project CLI Task Manager publishable
---

## Context

Build a complete, publishable CLI task manager with commands: `add`, `list`, `done`, `delete`. Store tasks in a JSON file. Use Cobra for commands and Viper for configuration.

This project demonstrates:

- Cobra subcommands
- File I/O (JSON)
- Error handling
- Testing
- Build and release with GoReleaser

## Step‑by‑step code

### Directory structure

```bash
taskman/
├── cmd/
│   ├── root.go
│   ├── add.go
│   ├── list.go
│   ├── done.go
│   └── delete.go
├── main.go
├── go.mod
├── tasks.json
└── .goreleaser.yml
```

### main.go

```go
package main

import "taskman/cmd"

func main() {
    cmd.Execute()
}
```

### cmd/root.go

```go
package cmd

import (
    "fmt"
    "os"
    "github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
    Use:   "taskman",
    Short: "A simple task manager CLI",
    Long:  `TaskMan helps you manage your tasks from the command line.`,
}

func Execute() {
    if err := rootCmd.Execute(); err != nil {
        fmt.Fprintln(os.Stderr, err)
        os.Exit(1)
    }
}
```

### cmd/add.go

```go
package cmd

import (
    "encoding/json"
    "fmt"
    "os"
    "time"
    "github.com/spf13/cobra"
)

type Task struct {
    ID        int       `json:"id"`
    Title     string    `json:"title"`
    Completed bool      `json:"completed"`
    CreatedAt time.Time `json:"created_at"`
}

const tasksFile = "tasks.json"

func loadTasks() ([]Task, error) {
    data, err := os.ReadFile(tasksFile)
    if err != nil {
        if os.IsNotExist(err) {
            return []Task{}, nil
        }
        return nil, err
    }
    var tasks []Task
    err = json.Unmarshal(data, &tasks)
    return tasks, err
}

func saveTasks(tasks []Task) error {
    data, err := json.MarshalIndent(tasks, "", "  ")
    if err != nil {
        return err
    }
    return os.WriteFile(tasksFile, data, 0644)
}

var addCmd = &cobra.Command{
    Use:   "add <title>",
    Short: "Add a new task",
    Args:  cobra.ExactArgs(1),
    Run: func(cmd *cobra.Command, args []string) {
        tasks, err := loadTasks()
        if err != nil {
            fmt.Println("Error loading tasks:", err)
            return
        }
        newID := 1
        if len(tasks) > 0 {
            newID = tasks[len(tasks)-1].ID + 1
        }
        task := Task{
            ID:        newID,
            Title:     args[0],
            Completed: false,
            CreatedAt: time.Now(),
        }
        tasks = append(tasks, task)
        if err := saveTasks(tasks); err != nil {
            fmt.Println("Error saving task:", err)
            return
        }
        fmt.Printf("Task added: %s (ID: %d)\n", task.Title, task.ID)
    },
}

func init() {
    rootCmd.AddCommand(addCmd)
}
```

### cmd/list.go

```go
package cmd

import (
    "fmt"
    "github.com/spf13/cobra"
)

var listCmd = &cobra.Command{
    Use:   "list",
    Short: "List all tasks",
    Run: func(cmd *cobra.Command, args []string) {
        tasks, err := loadTasks()
        if err != nil {
            fmt.Println("Error loading tasks:", err)
            return
        }
        if len(tasks) == 0 {
            fmt.Println("No tasks.")
            return
        }
        for _, t := range tasks {
            status := " "
            if t.Completed {
                status = "✓"
            }
            fmt.Printf("[%s] %d: %s (created %s)\n", status, t.ID, t.Title, t.CreatedAt.Format("2006-01-02"))
        }
    },
}

func init() {
    rootCmd.AddCommand(listCmd)
}
```

### cmd/done.go

```go
package cmd

import (
    "fmt"
    "strconv"
    "github.com/spf13/cobra"
)

var doneCmd = &cobra.Command{
    Use:   "done <id>",
    Short: "Mark a task as completed",
    Args:  cobra.ExactArgs(1),
    Run: func(cmd *cobra.Command, args []string) {
        id, err := strconv.Atoi(args[0])
        if err != nil {
            fmt.Println("Invalid task ID")
            return
        }
        tasks, err := loadTasks()
        if err != nil {
            fmt.Println("Error loading tasks:", err)
            return
        }
        found := false
        for i, t := range tasks {
            if t.ID == id {
                tasks[i].Completed = true
                found = true
                break
            }
        }
        if !found {
            fmt.Printf("Task with ID %d not found\n", id)
            return
        }
        if err := saveTasks(tasks); err != nil {
            fmt.Println("Error saving tasks:", err)
            return
        }
        fmt.Printf("Task %d marked as completed\n", id)
    },
}

func init() {
    rootCmd.AddCommand(doneCmd)
}
```

### cmd/delete.go

```go
package cmd

import (
    "fmt"
    "strconv"
    "github.com/spf13/cobra"
)

var deleteCmd = &cobra.Command{
    Use:   "delete <id>",
    Short: "Delete a task",
    Args:  cobra.ExactArgs(1),
    Run: func(cmd *cobra.Command, args []string) {
        id, err := strconv.Atoi(args[0])
        if err != nil {
            fmt.Println("Invalid task ID")
            return
        }
        tasks, err := loadTasks()
        if err != nil {
            fmt.Println("Error loading tasks:", err)
            return
        }
        newTasks := []Task{}
        found := false
        for _, t := range tasks {
            if t.ID == id {
                found = true
                continue
            }
            newTasks = append(newTasks, t)
        }
        if !found {
            fmt.Printf("Task with ID %d not found\n", id)
            return
        }
        if err := saveTasks(newTasks); err != nil {
            fmt.Println("Error saving tasks:", err)
            return
        }
        fmt.Printf("Task %d deleted\n", id)
    },
}

func init() {
    rootCmd.AddCommand(deleteCmd)
}
```

### .goreleaser.yml (for publishing)

```yaml
project_name: taskman
builds:
  - main: .
    binary: taskman
    goos:
      - linux
      - darwin
      - windows
    goarch:
      - amd64
      - arm64
archives:
  - format: tar.gz
    name_template: "{{ .ProjectName }}_{{ .Version }}_{{ .Os }}_{{ .Arch }}"
checksum:
  name_template: "checksums.txt"
release:
  github:
    owner: yourusername
    name: taskman
```

### Makefile

```bash
build:
    go build -o bin/taskman main.go
test:
    go test ./...
release:
    goreleaser release --rm-dist
```

## Example usage

```bash
$ taskman add "Buy milk"
Task added: Buy milk (ID: 1)
$ taskman list
[ ] 1: Buy milk (created 2025-01-01)
$ taskman done 1
Task 1 marked as completed
$ taskman list
[✓] 1: Buy milk (created 2025-01-01)
$ taskman delete 1
Task 1 deleted
```

## Useful links

- [Cobra](https://github.com/spf13/cobra)
- [Viper](https://github.com/spf13/viper)
- [GoReleaser](https://goreleaser.com/)
