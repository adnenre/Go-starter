---
title: Livrables
sidebar:
  order: 20
  label: 10.20 Livrables
---

## Contexte

Après avoir terminé le projet Gestionnaire de tâches CLI, vous devriez disposer d'un ensemble de livrables qui rendent votre outil prêt pour la production et publiable.

## Livrables requis

- **Code source** – Tous les fichiers Go avec une structure de paquets appropriée, des commentaires et une gestion d'erreur.
- **Tests unitaires** – Au moins 80 % de couverture pour la logique centrale (chargement, sauvegarde, ajout de tâches).
- **Documentation** – `README.md` avec installation, utilisation, exemples et guide de contribution.
- **Binaires de release** – Binaires pré‑compilés pour Linux, macOS, Windows (amd64, arm64) en utilisant GoReleaser.
- **Module Go** – `go.mod` et `go.sum` avec dépendances épinglées.
- **Makefile** – Cibles pour `build`, `test`, `clean`, `install`, `release`.
- **CI/CD** – GitHub Actions (ou similaire) qui exécute les tests et construit lors du push/tag.
- **Tag de version** – Tag Git (ex. `v1.0.0`) pour la release.

## Livrables optionnels

- **Empaquetage** – Formule Homebrew, Snap, ou dépôt APT.
- **Complétions shell** – Générer les complétions bash/zsh/fish avec Cobra.
- **Sortie couleur** – Respecter `NO_COLOR` et `CLICOLOR`.
- **Barre de progression** – Pour les opérations longues (ex. traitement par lots).

## Exemple de structure README

# TaskMan – Gestionnaire de tâches CLI

## Installation

```bash
go install github.com/votrenomutilisateur/taskman@latest
```

## Utilisation

```bash
taskman ajouter "Acheter du lait"
taskman lister
taskman terminer 1
taskman supprimer 1
```

## Développement

```bash
make test
make build
```

## Licence

MIT

## Liens utiles

- [Démarrage rapide GoReleaser](https://goreleaser.com/quick-start/)
- [GitHub Actions pour Go](https://docs.github.com/fr/actions/automating-builds-and-tests/building-and-testing-go)
