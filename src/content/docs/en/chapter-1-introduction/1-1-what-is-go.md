---
title: What is Go
sidebar:
  order: 1
  label: 1.1 What is Go
---

## Context

Go (also called Golang) is an open‑source programming language created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It was publicly announced in November 2009, and the first stable version, Go 1.0, was released in March 2012.

Go was designed to address common criticisms of other languages (slow compilation, cumbersome concurrency, complex dependency management) while keeping their strengths. Its key design goals are:

- **Simplicity** – Minimal syntax, no classes or inheritance, no exceptions, no generics until 2022 (and they are kept simple).
- **Efficiency** – Compiled to native code, fast execution, low memory footprint, and fast compilation times.
- **Built‑in concurrency** – Goroutines and channels make concurrent programming safe and easy.

Go is a **statically typed**, **compiled** language with **garbage collection**. It has become the language of the cloud, powering tools like Docker, Kubernetes, Terraform, and many others.

## Version History and Key Features

Go follows a six‑month release cycle (every February and August). Each version is supported until two newer versions are released.

- **Go 1.0 (2012-03-28)** – Première version stable, garantie de compatibilité.
- **Go 1.1 (2013-05-13)** – Améliorations de performances, détecteur de concurrence.
- **Go 1.2 (2013-12-01)** – Limite configurable du nombre de threads, meilleur ordonnanceur.
- **Go 1.3 (2014-06-18)** – Gestion améliorée des piles.
- **Go 1.4 (2014-12-10)** – Support Android, `go generate`.
- **Go 1.5 (2015-08-19)** – Compilateur et runtime réécrits en Go, nouveau GC.
- **Go 1.6 (2016-02-17)** – Support HTTP/2, améliorations du GC.
- **Go 1.7 (2016-08-15)** – Introduction du package `context`.
- **Go 1.8 (2017-02-16)** – Pauses GC inférieures à la milliseconde, arrêt gracieux.
- **Go 1.9 (2017-08-24)** – Alias de types.
- **Go 1.10 (2018-02-16)** – Mise en cache des tests, mise en cache automatique des packages.
- **Go 1.11 (2018-08-24)** – **Go Modules** (gestion des dépendances), WebAssembly.
- **Go 1.12 (2019-02-25)** – Améliorations de Go Modules, TLS 1.3.
- **Go 1.13 (2019-09-03)** – Encapsulation des erreurs, amélioration des littéraux numériques.
- **Go 1.14 (2020-02-25)** – Go Modules prêt pour la production, performance de `defer`.
- **Go 1.15 (2020-08-11)** – Améliorations de l'éditeur de liens (20% plus rapide).
- **Go 1.16 (2021-02-16)** – Package `embed`, Go Modules par défaut.
- **Go 1.17 (2021-08-16)** – Convention d'appel basée sur les registres (~5% plus rapide).
- **Go 1.18 (2022-03-15)** – **Génériques** (paramètres de type).
- **Go 1.19 (2022-08-02)** – Raffinements des génériques, commentaires de documentation.
- **Go 1.20 (2023-02-01)** – Optimisation guidée par profil (PGO), conversion slice vers tableau.
- **Go 1.21 (2023-08-08)** – Fonctions intégrées `min`, `max`, `clear`, PGO généralisé.
- **Go 1.22 (2024-02-06)** – Correction de la capture de variable de boucle (portée par itération), améliorations du routage HTTP, prévisualisation des itérateurs `range-over-func`.
- **Go 1.23 (2024-08-12)** – Nouveaux raffinements et améliorations de performance.
- **Go 1.24 (2025-02-11)** – Version stable avec améliorations de la chaîne d'outils et gains de performance.
- **Go 1.25.0 (2025-08-12)** – Version majeure ; voir les [notes de version Go 1.25](https://go.dev/doc/go1.25).
- **Go 1.26.0 (2026-02-10)** – Version majeure ; voir les [notes de version Go 1.26](https://go.dev/doc/go1.26).

A minimal Go program consists of a `package main` declaration and a `func main()` function.

## Code example

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}
```

## Output

```
Hello, Go!
```

## Useful links

- [Official Go website](https://go.dev/)
- [Official Go release history](https://go.dev/doc/devel/release)
- [Go History (The Go Blog)](https://go.dev/blog/11year)
- [Go FAQ](https://go.dev/doc/faq)
