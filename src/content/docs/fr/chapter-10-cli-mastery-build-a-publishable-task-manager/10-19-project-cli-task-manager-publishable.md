---
title: Projet – Gestionnaire de tâches CLI publiable
sidebar:
  order: 19
  label: 10.19 Projet – Gestionnaire de tâches CLI publiable
---

## Contexte

Construisez un gestionnaire de tâches CLI complet et publiable avec les commandes : `ajouter`, `lister`, `terminer`, `supprimer`. Stockez les tâches dans un fichier JSON. Utilisez Cobra pour les commandes et Viper pour la configuration.

Ce projet démontre :

- Les sous-commandes Cobra
- Les entrées/sorties de fichiers (JSON)
- La gestion d'erreur
- Les tests
- La construction et la publication avec GoReleaser

## Code pas à pas

### Structure des répertoires

```bash
taskman/
├── cmd/
│   ├── root.go
│   ├── ajouter.go
│   ├── lister.go
│   ├── terminer.go
│   └── supprimer.go
├── main.go
├── go.mod
├── taches.json
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
    Short: "Un gestionnaire de tâches CLI simple",
    Long:  `TaskMan vous aide à gérer vos tâches depuis la ligne de commande.`,
}

func Execute() {
    if err := rootCmd.Execute(); err != nil {
        fmt.Fprintln(os.Stderr, err)
        os.Exit(1)
    }
}
```

### cmd/ajouter.go

```go
package cmd

import (
    "encoding/json"
    "fmt"
    "os"
    "time"
    "github.com/spf13/cobra"
)

type Tache struct {
    ID        int       `json:"id"`
    Titre     string    `json:"titre"`
    Terminee  bool      `json:"terminee"`
    CreeeLe   time.Time `json:"creee_le"`
}

const fichierTaches = "taches.json"

func chargerTaches() ([]Tache, error) {
    donnees, err := os.ReadFile(fichierTaches)
    if err != nil {
        if os.IsNotExist(err) {
            return []Tache{}, nil
        }
        return nil, err
    }
    var taches []Tache
    err = json.Unmarshal(donnees, &taches)
    return taches, err
}

func sauvegarderTaches(taches []Tache) error {
    donnees, err := json.MarshalIndent(taches, "", "  ")
    if err != nil {
        return err
    }
    return os.WriteFile(fichierTaches, donnees, 0644)
}

var ajouterCmd = &cobra.Command{
    Use:   "ajouter <titre>",
    Short: "Ajouter une nouvelle tâche",
    Args:  cobra.ExactArgs(1),
    Run: func(cmd *cobra.Command, args []string) {
        taches, err := chargerTaches()
        if err != nil {
            fmt.Println("Erreur chargement des tâches :", err)
            return
        }
        nouvelID := 1
        if len(taches) > 0 {
            nouvelID = taches[len(taches)-1].ID + 1
        }
        tache := Tache{
            ID:        nouvelID,
            Titre:     args[0],
            Terminee:  false,
            CreeeLe:   time.Now(),
        }
        taches = append(taches, tache)
        if err := sauvegarderTaches(taches); err != nil {
            fmt.Println("Erreur sauvegarde de la tâche :", err)
            return
        }
        fmt.Printf("Tâche ajoutée : %s (ID : %d)\n", tache.Titre, tache.ID)
    },
}

func init() {
    rootCmd.AddCommand(ajouterCmd)
}
```

### cmd/lister.go

```go
package cmd

import (
    "fmt"
    "github.com/spf13/cobra"
)

var listerCmd = &cobra.Command{
    Use:   "lister",
    Short: "Lister toutes les tâches",
    Run: func(cmd *cobra.Command, args []string) {
        taches, err := chargerTaches()
        if err != nil {
            fmt.Println("Erreur chargement des tâches :", err)
            return
        }
        if len(taches) == 0 {
            fmt.Println("Aucune tâche.")
            return
        }
        for _, t := range taches {
            statut := " "
            if t.Terminee {
                statut = "✓"
            }
            fmt.Printf("[%s] %d : %s (créée le %s)\n", statut, t.ID, t.Titre, t.CreeeLe.Format("2006-01-02"))
        }
    },
}

func init() {
    rootCmd.AddCommand(listerCmd)
}
```

### cmd/terminer.go

```go
package cmd

import (
    "fmt"
    "strconv"
    "github.com/spf13/cobra"
)

var terminerCmd = &cobra.Command{
    Use:   "terminer <id>",
    Short: "Marquer une tâche comme terminée",
    Args:  cobra.ExactArgs(1),
    Run: func(cmd *cobra.Command, args []string) {
        id, err := strconv.Atoi(args[0])
        if err != nil {
            fmt.Println("ID de tâche invalide")
            return
        }
        taches, err := chargerTaches()
        if err != nil {
            fmt.Println("Erreur chargement des tâches :", err)
            return
        }
        trouvee := false
        for i, t := range taches {
            if t.ID == id {
                taches[i].Terminee = true
                trouvee = true
                break
            }
        }
        if !trouvee {
            fmt.Printf("Tâche avec ID %d introuvable\n", id)
            return
        }
        if err := sauvegarderTaches(taches); err != nil {
            fmt.Println("Erreur sauvegarde des tâches :", err)
            return
        }
        fmt.Printf("Tâche %d marquée comme terminée\n", id)
    },
}

func init() {
    rootCmd.AddCommand(terminerCmd)
}
```

### cmd/supprimer.go

```go
package cmd

import (
    "fmt"
    "strconv"
    "github.com/spf13/cobra"
)

var supprimerCmd = &cobra.Command{
    Use:   "supprimer <id>",
    Short: "Supprimer une tâche",
    Args:  cobra.ExactArgs(1),
    Run: func(cmd *cobra.Command, args []string) {
        id, err := strconv.Atoi(args[0])
        if err != nil {
            fmt.Println("ID de tâche invalide")
            return
        }
        taches, err := chargerTaches()
        if err != nil {
            fmt.Println("Erreur chargement des tâches :", err)
            return
        }
        nouvellesTaches := []Tache{}
        trouvee := false
        for _, t := range taches {
            if t.ID == id {
                trouvee = true
                continue
            }
            nouvellesTaches = append(nouvellesTaches, t)
        }
        if !trouvee {
            fmt.Printf("Tâche avec ID %d introuvable\n", id)
            return
        }
        if err := sauvegarderTaches(nouvellesTaches); err != nil {
            fmt.Println("Erreur sauvegarde des tâches :", err)
            return
        }
        fmt.Printf("Tâche %d supprimée\n", id)
    },
}

func init() {
    rootCmd.AddCommand(supprimerCmd)
}
```

### .goreleaser.yml (pour publication)

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
    owner: votrenomutilisateur
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

## Exemple d'utilisation

```bash
$ taskman ajouter "Acheter du lait"
Tâche ajoutée : Acheter du lait (ID : 1)
$ taskman lister
[ ] 1 : Acheter du lait (créée le 2025-01-01)
$ taskman terminer 1
Tâche 1 marquée comme terminée
$ taskman lister
[✓] 1 : Acheter du lait (créée le 2025-01-01)
$ taskman supprimer 1
Tâche 1 supprimée
```

## Liens utiles

- [Cobra](https://github.com/spf13/cobra)
- [Viper](https://github.com/spf13/viper)
- [GoReleaser](https://goreleaser.com/)
