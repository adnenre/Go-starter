---
title: Résumé
sidebar:
  order: 21
  label: 10.21 Résumé
---

# Référence complète de la syntaxe Go

Ce document explique la syntaxe de chaque construction majeure de Go. Chaque exemple inclut une **définition**, **ce que cela résout**, **quand l’utiliser**, une démonstration d’utilisation et sa sortie (le cas échéant). Après chaque section, vous trouverez un lien vers le fichier de chapitre correspondant (ou un espace réservé). Utilisez ceci comme votre guide ultime de la syntaxe Go.

---

## 1. Paquetage et importation

### 1.1 Déclaration de paquetage

```go
package main
```

- **Définition :** Un paquetage est un ensemble de fichiers sources Go. `package main` déclare le point d’entrée du programme.
- **Ce que cela résout :** Les paquetages fournissent l’organisation du code, la séparation des espaces de noms et les unités de compilation.
- **Quand l’utiliser :** Chaque fichier Go doit commencer par une déclaration de paquetage. Utilisez `main` pour les exécutables, tout autre nom pour des bibliothèques réutilisables.

**Exemple d’utilisation :**  
Créez un fichier `main.go` avec la ligne ci‑dessus. Exécutez `go run main.go` – cela compile sans erreur (même vide).

### 1.2 Instruction d’importation

```go
import "fmt"
import "os"

// Importation groupée
import (
    "fmt"
    "os"
)

// Alias
import f "fmt"

// Importation blanche (effet de bord uniquement)
import _ "image/png"
```

- **Définition :** Une instruction d’importation rend disponibles les identifiants exportés d’un autre paquetage.
- **Ce que cela résout :** Cela permet la réutilisation de code entre paquetages sans copier.
- **Quand l’utiliser :** Chaque fois que vous avez besoin de fonctionnalités de la bibliothèque standard ou de paquetages tiers.

**Exemple d’utilisation :**

```go
package main

import f "fmt"

func main() {
    f.Println("Bonjour")
}
```

**Sortie :**

```bash
Bonjour
```

[→ Chapitre 6.3 : Importation](/fr/chapter-6-packages-modules-and-visibility/6-3-importing)

---

## 2. Variables et constantes

### 2.1 Déclaration complète de variable

```go
var x int = 42
```

- **Définition :** `var` déclare une ou plusieurs variables. Le type et la valeur initiale sont facultatifs si l’autre est présent.
- **Ce que cela résout :** Les variables stockent des données qui peuvent changer pendant l’exécution du programme.
- **Quand l’utiliser :** Quand vous avez besoin d’un stockage mutable ; utilisez la forme complète lorsque le type n’est pas évident ou que vous voulez déclarer sans initialisation.

**Exemple d’utilisation :**

```go
var x int = 42
fmt.Println(x)
```

**Sortie :**

```bash
42
```

### 2.2 Déclaration courte de variable (inférence de type)

```go
y := 10
```

- **Définition :** `:=` déclare et initialise une variable en inférant le type à partir de l’expression de droite.
- **Ce que cela résout :** Cela réduit la verbosité et rend le code plus propre lorsque le type est évident.
- **Quand l’utiliser :** À l’intérieur des fonctions (pas au niveau du paquetage) pour les variables locales.

**Exemple d’utilisation :**

```go
y := 10
fmt.Printf("%T %v", y, y)
```

**Sortie :**

```bash
int 10
```

### 2.3 Variables multiples

```go
var a, b int = 1, 2
c, d := 3, "hello"
```

- **Définition :** Vous pouvez déclarer plusieurs variables sur une seule ligne, éventuellement avec des types différents.
- **Ce que cela résout :** Cela permet une initialisation concise de plusieurs variables à la fois.
- **Quand l’utiliser :** Quand vous avez besoin de plusieurs variables liées ou initialisées ensemble.

**Exemple d’utilisation :**

```go
var a, b int = 1, 2
c, d := 3, "hello"
fmt.Println(a, b, c, d)
```

**Sortie :**

```bash
1 2 3 hello
```

### 2.4 Constantes

```go
const Pi = 3.14
const (
    StatusOK = 200
    StatusNotFound = 404
)
```

- **Définition :** Les constantes sont des valeurs immuables connues à la compilation.
- **Ce que cela résout :** Elles empêchent les modifications accidentelles et permettent des optimisations par le compilateur.
- **Quand l’utiliser :** Pour les constantes mathématiques, les codes d’état, les valeurs de configuration qui ne changent jamais.

**Exemple d’utilisation :**

```go
const Pi = 3.14
fmt.Println(Pi)
```

**Sortie :**

```bash
3.14
```

### 2.5 Énumérations avec iota

```go
const (
    Dimanche = iota   // 0
    Lundi             // 1
    Mardi             // 2
)
```

- **Définition :** `iota` est un identifiant prédéclaré qui génère des constantes entières séquentielles.
- **Ce que cela résout :** Cela simplifie la création d’énumérations sans numérotation manuelle.
- **Quand l’utiliser :** Quand vous avez besoin d’un ensemble de constantes liées qui doivent avoir des valeurs séquentielles (jours, états, drapeaux).

**Exemple d’utilisation :**

```go
const (
    Dimanche = iota
    Lundi
    Mardi
)
fmt.Println(Dimanche, Lundi, Mardi)
```

**Sortie :**

```bash
0 1 2
```

[→ Chapitre 2.3 : Variables et constantes](/fr/chapter-2-primitive-types-variables-and-basic-syntax/2-3-variables-and-constants)  
[→ Chapitre 2.4 : Constantes et énumérations iota](/fr/chapter-2-primitive-types-variables-and-basic-syntax/2-4-constants-and-iota-enums)

---

## 3. Entrées/sorties de base

```go
var name string
fmt.Print("Entrez votre nom : ")
fmt.Scan(&name)
fmt.Printf("Bonjour, %s\n", name)
```

- **Définition :** Fonctions d’entrée/sortie de base du paquetage `fmt` pour l’affichage et la lecture.
- **Ce que cela résout :** Cela fournit des moyens simples d’interagir avec l’utilisateur ou de journaliser des données.
- **Quand l’utiliser :** Pour les outils en ligne de commande, le débogage ou les interactions utilisateur simples.

**Exemple d’utilisation :**

```go
package main

import "fmt"

func main() {
    var name string
    fmt.Print("Entrez votre nom : ")
    fmt.Scan(&name)
    fmt.Printf("Bonjour, %s\n", name)
}
```

**Entrée :**  
`Alice`  
**Sortie :**

```bash
Entrez votre nom : Bonjour, Alice
```

[→ Chapitre 2.5 : Entrées/sorties de base](/fr/chapter-2-primitive-types-variables-and-basic-syntax/2-5-basic-i-o)

---

## 4. Chaînes de caractères et runes

```go
s := "Go"
r := 'G'               // littéral rune
for i, ch := range s {
    fmt.Printf("%d: %c\n", i, ch)
}
```

- **Définition :** Une chaîne est une tranche d’octets en lecture seule ; une rune représente un point de code Unicode.
- **Ce que cela résout :** Les chaînes gèrent le texte UTF‑8 ; les runes permettent la manipulation caractère par caractère.
- **Quand l’utiliser :** Les chaînes pour le texte, les runes lorsque vous devez traiter des caractères individuels (par ex., itérer sur des caractères Unicode).

**Exemple d’utilisation :**

```go
s := "Go"
for i, ch := range s {
    fmt.Printf("%d: %c\n", i, ch)
}
```

**Sortie :**

```bash
0: G
1: o
```

[→ Chapitre 2.8 : Chaînes et runes](/fr/chapter-2-primitive-types-variables-and-basic-syntax/2-8-strings-and-runes)

---

## 5. Conversions de types et analyse de nombres

```go
var f float64 = 3.14
var i int = int(f)           // conversion explicite
num, err := strconv.Atoi("42")
```

- **Définition :** Les conversions de type changent une valeur d’un type à un autre ; l’analyse convertit les chaînes en nombres.
- **Ce que cela résout :** Elles permettent des opérations entre différents types numériques et interprètent les entrées utilisateur.
- **Quand l’utiliser :** Quand vous devez mélanger des types (par ex., int en float) ou lire des nombres depuis des chaînes.

**Exemple d’utilisation :**

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    var f float64 = 3.14
    i := int(f)
    fmt.Println(i)

    num, err := strconv.Atoi("42")
    if err == nil {
        fmt.Println(num)
    }
}
```

**Sortie :**

```bash
3
42
```

[→ Chapitre 2.6 : Conversions de types](/fr/chapter-2-primitive-types-variables-and-basic-syntax/2-6-type-conversions)  
[→ Chapitre 2.7 : Analyse de nombres](/fr/chapter-2-primitive-types-variables-and-basic-syntax/2-7-number-parsing)

---

## 6. Flux de contrôle

### 6.1 Instruction `if`

```go
if x := 10; x > 5 {
    fmt.Println("grand")
} else {
    fmt.Println("petit")
}
```

- **Définition :** `if` exécute un bloc de façon conditionnelle, éventuellement avec une courte instruction avant la condition.
- **Ce que cela résout :** Cela fournit une logique de branchement basée sur des conditions booléennes.
- **Quand l’utiliser :** Chaque fois que vous devez prendre des décisions dans votre code.

**Exemple d’utilisation :**

```go
if x := 10; x > 5 {
    fmt.Println("grand")
} else {
    fmt.Println("petit")
}
```

**Sortie :**

```bash
grand
```

[→ Chapitre 3.1 : Conditionnels if else](/fr/chapter-3-control-flow-and-operators/3-1-conditionals-if-else)

### 6.2 Boucle `for` – trois formes

**Style classique C**

```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```

- **Définition :** `for` avec initialisation, condition et post‑instruction.
- **Ce que cela résout :** Cela exécute un bloc un nombre fixe de fois avec un compteur.
- **Quand l’utiliser :** Quand vous connaissez le nombre d’itérations à l’avance.

**Exemple d’utilisation :**

```go
for i := 0; i < 5; i++ {
    fmt.Print(i, " ")
}
```

**Sortie :**

```bash
0 1 2 3 4
```

**Style while**

```go
n := 0
for n < 3 {
    fmt.Println(n)
    n++
}
```

- **Définition :** `for` avec seulement la condition (comme `while` dans d’autres langages).
- **Ce que cela résout :** Cela boucle jusqu’à ce qu’une condition devienne fausse.
- **Quand l’utiliser :** Quand le nombre d’itérations dépend d’une condition dynamique.

**Exemple d’utilisation :**

```go
n := 0
for n < 3 {
    fmt.Print(n, " ")
    n++
}
```

**Sortie :**

```bash
0 1 2
```

**Boucle infinie**

```go
for {
    // break ou return pour sortir
}
```

- **Définition :** `for` sans condition boucle indéfiniment.
- **Ce que cela résout :** Cela crée une boucle qui s’exécute jusqu’à ce qu’elle soit explicitement interrompue.
- **Quand l’utiliser :** Pour les serveurs, les boucles d’événements, ou lorsque la condition de sortie est complexe.

**Exemple d’utilisation (break après 3 itérations) :**

```go
i := 0
for {
    if i >= 3 {
        break
    }
    fmt.Print(i, " ")
    i++
}
```

**Sortie :**

```bash
0 1 2
```

[→ Chapitre 3.2 : Boucles for](/fr/chapter-3-control-flow-and-operators/3-2-loops-for)

### 6.3 `range` – explication du tiret bas

```go
nums := []int{10, 20, 30}
for i, v := range nums {
    fmt.Println(i, v)
}

// Ignorer l’indice
for _, v := range nums {
    fmt.Println(v)
}
```

- **Définition :** `range` itère sur les éléments des tranches, tableaux, chaînes, map ou canaux.
- **Ce que cela résout :** Cela fournit un moyen sûr et pratique de parcourir des collections sans gérer les indices.
- **Quand l’utiliser :** Chaque fois que vous devez itérer sur n’importe quel type de collection.

**Exemple d’utilisation :**

```go
nums := []int{10, 20, 30}
for i, v := range nums {
    fmt.Printf("indice=%d valeur=%d\n", i, v)
}
```

**Sortie :**

```bash
indice=0 valeur=10
indice=1 valeur=20
indice=2 valeur=30
```

[→ Chapitre 3.4 : Range sur les types natifs](/fr/chapter-3-control-flow-and-operators/3-4-range-over-built-in-types)

### 6.4 `switch`

```go
switch jour := 2; jour {
case 1:
    fmt.Println("Lundi")
case 2:
    fmt.Println("Mardi")
default:
    fmt.Println("Autre")
}

// Switch sans étiquette
switch {
case x > 0:
    fmt.Println("positif")
case x < 0:
    fmt.Println("négatif")
}
```

- **Définition :** `switch` évalue une valeur (ou aucune) et exécute le premier cas correspondant.
- **Ce que cela résout :** Cela simplifie les longues chaînes `if‑else` et fournit un branchement multi‑voies.
- **Quand l’utiliser :** Pour comparer une seule valeur à de nombreuses possibilités, ou pour des conditions booléennes avec plusieurs branches.

**Exemple d’utilisation :**

```go
jour := 2
switch jour {
case 1:
    fmt.Println("Lundi")
case 2:
    fmt.Println("Mardi")
default:
    fmt.Println("Autre")
}
```

**Sortie :**

```bash
Mardi
```

[→ Chapitre 3.5 : Switch](/fr/chapter-3-control-flow-and-operators/3-5-switch)

---

## 7. Defer, Panic, Recover

### 7.1 `defer`

```go
func lireFichier() error {
    f, err := os.Open("donnees.txt")
    if err != nil {
        return err
    }
    defer f.Close()   // s’exécute au retour de la fonction
    // ... traitement du fichier ...
    return nil
}
```

- **Définition :** `defer` planifie l’exécution d’un appel de fonction après le retour de la fonction englobante.
- **Ce que cela résout :** Cela garantit le nettoyage (fermeture de fichiers, déverrouillage de mutex) même si la fonction se termine prématurément ou panique.
- **Quand l’utiliser :** Chaque fois que vous acquérez une ressource qui doit être libérée.

**Exemple d’utilisation :**

```go
func main() {
    defer fmt.Println("monde")
    fmt.Println("bonjour")
}
```

**Sortie :**

```bash
bonjour
monde
```

### 7.2 `panic` et `recover`

```go
defer func() {
    if r := recover(); r != nil {
        fmt.Println("Récupéré :", r)
    }
}()
panic("quelque chose s’est mal passé")
```

- **Définition :** `panic` arrête l’exécution normale ; `recover` reprend le contrôle à l’intérieur d’une fonction différée.
- **Ce que cela résout :** Ils gèrent des situations véritablement exceptionnelles (bugs, états impossibles) qui ne peuvent être récupérées normalement.
- **Quand l’utiliser :** Uniquement pour des erreurs irrécupérables ; ne les utilisez pas comme gestion d’erreur ordinaire.

**Exemple d’utilisation :**

```go
package main

import "fmt"

func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Récupéré :", r)
        }
    }()
    panic("boum")
    fmt.Println("jamais affiché")
}
```

**Sortie :**

```bash
Récupéré : boum
```

[→ Chapitre 3.8 : Defer](/fr/chapter-3-control-flow-and-operators/3-8-defer)  
[→ Chapitre 3.9 : Panic et recover](/fr/chapter-3-control-flow-and-operators/3-9-panic-and-recover)

---

## 8. Fonctions – syntaxe complète

### 8.1 Fonction de base

```
func ajouter(a int, b int) int {
    return a + b
}
```

- **Définition :** Une fonction est un bloc de code réutilisable avec des paramètres et des valeurs de retour.
- **Ce que cela résout :** Cela organise le code, évite la duplication et encapsule la logique.
- **Quand l’utiliser :** Chaque fois que vous devez effectuer une tâche spécifique qui peut être appelée plusieurs fois.

**Exemple d’utilisation :**

```go
func ajouter(a, b int) int {
    return a + b
}
fmt.Println(ajouter(3, 5))
```

**Sortie :**

```bash
8
```

### 8.2 Valeurs de retour multiples

```go
func diviser(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division par zéro")
    }
    return a / b, nil
}
```

- **Définition :** Les fonctions peuvent retourner un nombre quelconque de valeurs.
- **Ce que cela résout :** Cela permet de retourner à la fois un résultat et une erreur, ou plusieurs valeurs liées.
- **Quand l’utiliser :** Gestion d’erreur idiomatique (résultat, erreur) ou quand une fonction produit naturellement plusieurs sorties.

**Exemple d’utilisation :**

```go
resultat, err := diviser(10, 2)
if err == nil {
    fmt.Println(resultat)
}
```

**Sortie :**

```bash
5
```

### 8.3 Valeurs de retour nommées

```go
func diviserSomme(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return   // retour nu (retourne x, y)
}
```

- **Définition :** Les paramètres de retour peuvent être nommés et utilisés comme variables locales.
- **Ce que cela résout :** Cela documente la signification des retours et permet les retours nus.
- **Quand l’utiliser :** Pour les fonctions courtes où les noms clarifient l’intention ; à utiliser avec parcimonie.

**Exemple d’utilisation :**

```go
a, b := diviserSomme(17)
fmt.Println(a, b)
```

**Sortie :**

```bash
7 10
```

### 8.4 Fonctions variadiques

```go
func somme(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}
```

- **Définition :** Les paramètres variadiques acceptent zéro ou plusieurs arguments du même type.
- **Ce que cela résout :** Cela permet aux fonctions de travailler avec un nombre arbitraire d’arguments.
- **Quand l’utiliser :** Pour des fonctions comme `fmt.Println` ou quand vous ne connaissez pas le nombre d’entrées.

**Exemple d’utilisation :**

```go
fmt.Println(somme(1, 2, 3, 4))
```

**Sortie :**

```bash
10
```

### 8.5 Closures (fonctions anonymes)

```go
ajouteur := func(x int) int {
    return x + 5
}
fmt.Println(ajouteur(10))
```

- **Définition :** Une fonction anonyme qui peut capturer des variables de son environnement.
- **Ce que cela résout :** Cela permet des patrons de programmation fonctionnelle (callbacks, goroutines, prédicats de tri personnalisés).
- **Quand l’utiliser :** Quand vous avez besoin d’une petite fonction ponctuelle, surtout à l’intérieur d’une autre fonction ou comme goroutine.

**Exemple d’utilisation :**

```go
mult := func(a, b int) int { return a * b }
fmt.Println(mult(3, 4))
```

**Sortie :**

```bash
12
```

[→ Chapitre 5.1 : Déclaration de fonction](/fr/chapter-5-functions-methods-and-error-handling/5-1-function-declaration)  
[→ Chapitre 5.2 : Valeurs de retour multiples](/fr/chapter-5-functions-methods-and-error-handling/5-2-multiple-return-values)  
[→ Chapitre 5.3 : Fonctions variadiques](/fr/chapter-5-functions-methods-and-error-handling/5-3-variadic-functions)  
[→ Chapitre 5.4 : Closures](/fr/chapter-5-functions-methods-and-error-handling/5-4-closures)

---

## 9. Méthodes et récepteurs – les quatre formes

### Syntaxe d’une méthode

```
func (récepteur Type) NomMéthode(paramètres) typeRetour {
    // corps
}
```

- **Définition :** Une méthode est une fonction avec un argument récepteur qui l’attache à un type.
- **Ce que cela résout :** Cela permet un comportement de style orienté objet (attacher des opérations aux données).
- **Quand l’utiliser :** Quand vous souhaitez associer un comportement à un type personnalisé.

### Les quatre formes de récepteur

| Forme              | Syntaxe  | Accès récepteur | Modifier l’original |
| ------------------ | -------- | --------------- | ------------------- |
| Valeur nommé       | `(c T)`  | Oui (copie)     | Non                 |
| Valeur non nommé   | `(T)`    | Non             | Non                 |
| Pointeur nommé     | `(c *T)` | Oui (original)  | Oui                 |
| Pointeur non nommé | `(*T)`   | Non             | Non (inutile)       |

### Exemple des quatre

```go
type Compteur struct {
    valeur int
}

// 1. Récepteur valeur nommé (getter)
func (c Compteur) Valeur() int {
    return c.valeur
}

// 2. Récepteur valeur non nommé (satisfaire une interface)
func (Compteur) Description() string {
    return "un compteur"
}

// 3. Récepteur pointeur nommé (setter)
func (c *Compteur) Inc() {
    c.valeur++
}

// 4. Récepteur pointeur non nommé – inutile, montré pour l’exhaustivité
func (*Compteur) NoOp() {}
```

- **Ce que chaque forme résout :**
  - Valeur nommée : accès en lecture seule, sûr pour la concurrence.
  - Valeur non nommée : satisfaire des interfaces sans avoir besoin du récepteur.
  - Pointeur nommé : modifier la structure originale, éviter de copier de grandes structures.
  - Pointeur non nommé : rarement utile.

**Exemple d’utilisation :**

```go
c := Compteur{valeur: 5}
fmt.Println(c.Valeur())  // 5
c.Inc()
fmt.Println(c.Valeur())  // 6
fmt.Println(c.Description())
```

**Sortie :**

```bash
5
6
un compteur
```

[→ Chapitre 5.5 : Méthodes](/fr/chapter-5-functions-methods-and-error-handling/5-5-methods)  
[→ Chapitre 5.5.1 : Syntaxe des récepteurs](/fr/chapter-5-functions-methods-and-error-handling/5-5-1-receiver-syntax)

---

## 10. Gestion des erreurs

### 10.1 Modèle standard

```go
resultat, err := faireQuelqueChose()
if err != nil {
    // gérer l’erreur
}
```

- **Définition :** Le modèle standard de gestion des erreurs retourne une valeur d’erreur à côté du résultat.
- **Ce que cela résout :** Cela rend les erreurs explicites et force l’appelant à les traiter (ou les ignorer délibérément).
- **Quand l’utiliser :** Chaque fonction qui peut échouer doit retourner une erreur.

**Exemple d’utilisation :**

```go
f, err := os.Open("fichier_inexistant.txt")
if err != nil {
    fmt.Println("Erreur :", err)
}
```

**Sortie :**

```bash
Erreur : open fichier_inexistant.txt: no such file or directory
```

### 10.2 Création d’erreurs simples

```go
err1 := errors.New("quelque chose s’est mal passé")
err2 := fmt.Errorf("valeur invalide : %d", val)
```

- **Définition :** Création simple d’erreur avec `errors.New` ou `fmt.Errorf`.
- **Ce que cela résout :** Cela fournit des valeurs d’erreur avec des messages personnalisés.
- **Quand l’utiliser :** Quand vous devez retourner une erreur simple depuis une fonction.

**Exemple d’utilisation :**

```go
err := errors.New("erreur personnalisée")
fmt.Println(err)
```

**Sortie :**

```bash
erreur personnalisée
```

### 10.3 Type d’erreur personnalisé

```go
type ErreurValidation struct {
    Champ string
    Valeur interface{}
}

func (e ErreurValidation) Error() string {
    return fmt.Sprintf("échec de validation sur %s : %v", e.Champ, e.Valeur)
}
```

- **Définition :** Un type personnalisé implémentant l’interface `error`.
- **Ce que cela résout :** Cela permet d’attacher des données supplémentaires et autorise les assertions de type.
- **Quand l’utiliser :** Quand les appelants ont besoin de distinguer programmatiquement les types d’erreurs.

**Exemple d’utilisation :**

```go
func validerAge(age int) error {
    if age < 0 {
        return ErreurValidation{Champ: "age", Valeur: age}
    }
    return nil
}
err := validerAge(-5)
fmt.Println(err)
```

**Sortie :**

```bash
échec de validation sur age : -5
```

[→ Chapitre 5.6 : Gestion des erreurs](/fr/chapter-5-functions-methods-and-error-handling/5-6-error-handling)  
[→ Chapitre 5.7 : Erreurs personnalisées](/fr/chapter-5-functions-methods-and-error-handling/5-7-custom-errors)

---

## 11. Structures – déclaration, littéraux, embarquement

### 11.1 Déclaration d’une structure

```go
type Personne struct {
    Nom string
    Age int
}
```

- **Définition :** Une structure est un type composite regroupant des champs.
- **Ce que cela résout :** Cela organise des données liées en une seule unité.
- **Quand l’utiliser :** Presque toujours pour des enregistrements de données (par ex., modèles de base de données, configuration).

**Exemple d’utilisation :**

```go
p := Personne{Nom: "Alice", Age: 30}
fmt.Println(p.Nom, p.Age)
```

**Sortie :**

```bash
Alice 30
```

### 11.2 Littéral de structure

```go
p1 := Personne{"Alice", 30}               // l’ordre compte
p2 := Personne{Nom: "Bob", Age: 25}       // champs nommés (préféré)
p3 := &Personne{Nom: "Charlie", Age: 35}  // pointeur vers structure
```

- **Définition :** Un littéral crée une instance de structure avec des valeurs initiales.
- **Ce que cela résout :** Cela fournit une initialisation concise.
- **Quand l’utiliser :** Préférez toujours les champs nommés pour la clarté et la sécurité ; utilisez les positions seulement quand l’ordre est évident.

**Exemple d’utilisation :**

```go
p := &Personne{Nom: "David", Age: 40}
fmt.Println(p.Nom)
```

**Sortie :**

```bash
David
```

### 11.3 Embarquement de structure (composition)

```go
type Employe struct {
    Personne   // embarqué (pas de nom de champ)
    Salaire int
}

e := Employe{Personne: Personne{Nom: "David", Age: 40}, Salaire: 50000}
fmt.Println(e.Nom) // champ promu
```

- **Définition :** Embarquer une structure sans nom de champ promeut ses champs et méthodes.
- **Ce que cela résout :** Cela fournit une composition (plutôt que l’héritage) pour la réutilisation de code.
- **Quand l’utiliser :** Quand vous voulez réutiliser des champs/méthodes d’une autre structure (par ex., extension de modèle).

**Exemple d’utilisation :**

```go
type Employe struct {
    Personne
    Salaire int
}
e := Employe{Personne: Personne{Nom: "Eve", Age: 28}, Salaire: 60000}
fmt.Println(e.Nom, e.Age, e.Salaire)
```

**Sortie :**

```bash
Eve 28 60000
```

[→ Chapitre 4.4 : Structures](/fr/chapter-4-composite-types-arrays-slices-maps-structs/4-4-structs)  
[→ Chapitre 4.5 : Embarquement de structures](/fr/chapter-4-composite-types-arrays-slices-maps-structs/4-5-struct-embedding)

---

## 12. Pointeurs

```go
x := 42
p := &x        // p pointe vers x
fmt.Println(*p) // déréférencement : 42
*p = 100       // change x via le pointeur
```

- **Définition :** Un pointeur contient l’adresse mémoire d’une autre variable.
- **Ce que cela résout :** Cela permet aux fonctions de modifier des variables originales et évite de copier de grandes données.
- **Quand l’utiliser :** Quand vous devez muter la variable de l’appelant, ou quand vous passez de grandes structures.

**Exemple d’utilisation :**

```go
x := 10
p := &x
*p = 20
fmt.Println(x)
```

**Sortie :**

```bash
20
```

[→ Chapitre 4.6 : Pointeurs](/fr/chapter-4-composite-types-arrays-slices-maps-structs/4-6-pointers)

---

## 13. Tableaux et tranches (slices)

### 13.1 Tableau

```go
b := [4]int{1, 2, 3, 4}
```

- **Définition :** Un tableau est une séquence de longueur fixe d’éléments de même type.
- **Ce que cela résout :** Il fournit un stockage contigu de taille fixe.
- **Quand l’utiliser :** Rarement ; préférez les tranches sauf si vous avez besoin que la longueur fasse partie du type (par ex., pour des sommes de contrôle).

**Exemple d’utilisation :**

```go
arr := [3]string{"a", "b", "c"}
fmt.Println(arr[1])
```

**Sortie :**

```bash
b
```

### 13.2 Tranche (slice)

```go
s := []int{1, 2, 3}
s = append(s, 4)
```

- **Définition :** Une tranche est une vue de taille dynamique sur un tableau.
- **Ce que cela résout :** Elle fournit des séquences flexibles et redimensionnables.
- **Quand l’utiliser :** Presque toujours à la place des tableaux pour les listes d’éléments.

**Exemple d’utilisation :**

```go
s := []int{1, 2, 3}
s = append(s, 4)
fmt.Println(s)
```

**Sortie :**

```bash
[1 2 3 4]
```

### 13.3 `make` pour tranches, map, canaux

```go
m := make(map[string]int, 10)
```

- **Définition :** `make` alloue et initialise les tranches, map ou canaux.
- **Ce que cela résout :** Cela initialise les structures de données internes (par ex., les buckets d’une map, le tableau d’une tranche).
- **Quand l’utiliser :** Quand vous devez spécifier une capacité initiale (pour la performance) ou créer un canal.

**Exemple d’utilisation :**

```go
m := make(map[string]int, 5)
m["cle"] = 42
fmt.Println(m["cle"])
```

**Sortie :**

```bash
42
```

[→ Chapitre 4.1 : Tableaux](/fr/chapter-4-composite-types-arrays-slices-maps-structs/4-1-arrays)  
[→ Chapitre 4.2 : Tranches (slices)](/fr/chapter-4-composite-types-arrays-slices-maps-structs/4-2-slices)

---

## 14. Map

```go
m := map[string]int{
    "a": 1,
    "b": 2,
}
valeur, ok := m["c"]   // ok est faux si la clé n’existe pas
delete(m, "a")
```

- **Définition :** Une map est une collection non ordonnée de paires clé‑valeur.
- **Ce que cela résout :** Elle permet des recherches, insertions et suppressions rapides par clé.
- **Quand l’utiliser :** Quand vous devez associer des valeurs à des clés uniques (par ex., cache, dictionnaire).

**Exemple d’utilisation :**

```go
m := map[string]int{"pomme": 5, "banane": 3}
if val, ok := m["pomme"]; ok {
    fmt.Println(val)
}
delete(m, "banane")
fmt.Println(m)
```

**Sortie :**

```bash
5
map[pomme:5]
```

[→ Chapitre 4.3 : Map](/fr/chapter-4-composite-types-arrays-slices-maps-structs/4-3-maps)

---

## 15. Interfaces

### 15.1 Déclaration d’interface

```go
type Salueur interface {
    Saluer() string
}
```

- **Définition :** Une interface définit un ensemble de signatures de méthodes.
- **Ce que cela résout :** Elle permet le polymorphisme : une fonction peut accepter tout type qui implémente les méthodes requises.
- **Quand l’utiliser :** Quand vous voulez découpler le code des types concrets (par ex., tests avec des mocks, designs enfichables).

### 15.2 Implémentation implicite d’interface

```go
type Chien struct{}

func (c Chien) Saluer() string {
    return "Wouf !"
}
```

- **Définition :** Un type implémente une interface simplement en ayant toutes les méthodes requises (pas de mot‑clé `implements`).
- **Ce que cela résout :** Cela permet une satisfaction d’interface rétroactive et réduit le couplage.
- **Quand l’utiliser :** Toujours ; c’est la manière idiomatique en Go.

**Exemple d’utilisation :**

```go
var s Salueur = Chien{}
fmt.Println(s.Saluer())
```

**Sortie :**

```bash
Wouf !
```

### 15.3 Interface vide (`any`)

```go
var nimporteQuoi interface{}  // ou 'any' (Go 1.18+)
nimporteQuoi = 42
nimporteQuoi = "bonjour"
```

- **Définition :** Une interface sans méthode ; tout type l’implémente.
- **Ce que cela résout :** Cela permet de stocker des valeurs de n’importe quel type (comme `void*` en C ou `Object` en Java).
- **Quand l’utiliser :** Pour des conteneurs qui doivent contenir des types arbitraires (par ex., `json.Unmarshal`, `fmt.Println`).

**Exemple d’utilisation :**

```go
var x any = 3.14
fmt.Println(x)
```

**Sortie :**

```bash
3.14
```

### 15.4 Assertion de type

```go
var i interface{} = "bonjour"
s := i.(string)        // assertion (panique si faux)
s, ok := i.(string)    // assertion sûre
```

- **Définition :** L’assertion de type extrait la valeur concrète d’une interface.
- **Ce que cela résout :** Cela permet de passer de l’interface au type concret.
- **Quand l’utiliser :** Quand vous devez effectuer des opérations spécifiques à un type sur une valeur d’interface.

**Exemple d’utilisation :**

```go
var i interface{} = 42
v, ok := i.(int)
fmt.Println(v, ok)
v2, ok := i.(string)
fmt.Println(v2, ok)
```

**Sortie :**

```bash
42 true
 false
```

### 15.5 Commutateur de type (type switch)

```go
switch v := i.(type) {
case int:
    fmt.Println("int :", v)
case string:
    fmt.Println("chaîne :", v)
default:
    fmt.Println("inconnu")
}
```

- **Définition :** Un commutateur de type branche selon le type concret d’une interface.
- **Ce que cela résout :** Il fournit une manière plus propre de gérer plusieurs types possibles.
- **Quand l’utiliser :** Quand vous avez une interface qui pourrait contenir plusieurs types concrets différents.

**Exemple d’utilisation :**

```go
func decrire(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Println("int :", v)
    case string:
        fmt.Println("chaîne :", v)
    default:
        fmt.Println("inconnu")
    }
}
decrire(42)
decrire("bonjour")
```

**Sortie :**

```bash
int : 42
chaîne : bonjour
```

[→ Chapitre 7.1 : Déclaration d’interface](/fr/chapter-7-interfaces-and-polymorphism/7-1-interface-declaration)  
[→ Chapitre 7.2 : L’interface vide](/fr/chapter-7-interfaces-and-polymorphism/7-2-the-empty-interface)

---

## 16. Génériques (Go 1.18+)

### 16.1 Fonction générique

```go
func Identite[T any](x T) T {
    return x
}
```

- **Définition :** Une fonction générique peut fonctionner avec n’importe quel type spécifié par un paramètre de type.
- **Ce que cela résout :** Cela élimine la duplication de code pour les algorithmes qui sont agnostiques au type.
- **Quand l’utiliser :** Quand vous écririez autrement des fonctions presque identiques pour différents types.

**Exemple d’utilisation :**

```go
fmt.Println(Identite(42))
fmt.Println(Identite("bonjour"))
```

**Sortie :**

```bash
42
bonjour
```

### 16.2 Type générique

```go
type Pile[T any] struct {
    elements []T
}

func (p *Pile[T]) Empiler(v T) {
    p.elements = append(p.elements, v)
}
```

- **Définition :** Un type générique peut avoir des paramètres de type pour ses champs et méthodes.
- **Ce que cela résout :** Cela permet de créer des structures de données qui fonctionnent avec n’importe quel type d’élément.
- **Quand l’utiliser :** Pour les collections comme les piles, files d’attente, ou tout conteneur qui devrait être sûr au niveau du type.

**Exemple d’utilisation :**

```go
p := Pile[int]{}
p.Empiler(10)
fmt.Println(p.elements)
```

**Sortie :**

```bash
[10]
```

[→ Chapitre 8.1 : Paramètres de type](/fr/chapter-8-generics/8-1-type-parameters)

---

## 17. Concurrence – Goroutines, canaux, contexte

### 17.1 Goroutine

```go
go func() {
    fmt.Println("exécuté concurremment")
}()
```

- **Définition :** Une goroutine est un fil d’exécution léger géré par le runtime Go.
- **Ce que cela résout :** Cela permet l’exécution concurrente sans fils d’exécution système lourds.
- **Quand l’utiliser :** Pour toute tâche concurrente (par ex., traitement de requêtes, travail en arrière‑plan).

**Exemple d’utilisation :**

```go
go func() {
    fmt.Println("goroutine")
}()
time.Sleep(10 * time.Millisecond) // laisser le temps à la goroutine de finir
```

**Sortie :**

```bash
goroutine
```

### 17.2 Canal non tamponné

```go
ch := make(chan int)
go func() { ch <- 42 }()
valeur := <-ch
```

- **Définition :** Un canal non tamponné synchronise les opérations d’envoi et de réception.
- **Ce que cela résout :** Il fournit un mécanisme de communication qui synchronise aussi les goroutines.
- **Quand l’utiliser :** Quand vous devez passer des données et aussi garantir le transfert (par ex., signalisation).

**Exemple d’utilisation :**

```go
ch := make(chan int)
go func() { ch <- 100 }()
fmt.Println(<-ch)
```

**Sortie :**

```bash
100
```

### 17.3 Canal tamponné

```go
ch := make(chan int, 2)
ch <- 1
ch <- 2
```

- **Définition :** Un canal tamponné a une capacité ; les envois bloquent seulement quand il est plein.
- **Ce que cela résout :** Il réduit les blocages et peut agir comme une file d’attente.
- **Quand l’utiliser :** Quand vous voulez découpler les taux de production et consommation (par ex., file de requêtes).

**Exemple d’utilisation :**

```go
ch := make(chan int, 2)
ch <- 1
ch <- 2
fmt.Println(<-ch)
fmt.Println(<-ch)
```

**Sortie :**

```bash
1
2
```

### 17.4 Directions de canal

```go
func envoyer(ch chan<- int) { ch <- 42 }   // envoi seulement
func recevoir(ch <-chan int) { <-ch }      // réception seulement
```

- **Définition :** Les directions de canal restreignent les opérations (envoi ou réception seulement).
- **Ce que cela résout :** Cela impose une utilisation correcte à la compilation (par ex., une fonction qui n’envoie que).
- **Quand l’utiliser :** Dans les signatures de fonction pour documenter et appliquer l’utilisation du canal.

### 17.5 Instruction `select`

```go
select {
case v := <-ch1:
    fmt.Println(v)
case ch2 <- 100:
    fmt.Println("envoyé")
default:
    fmt.Println("aucune activité")
}
```

- **Définition :** `select` attend sur plusieurs opérations de canal.
- **Ce que cela résout :** Cela permet de multiplexer des canaux (comme un `switch` sur canaux).
- **Quand l’utiliser :** Quand vous devez gérer plusieurs canaux simultanément (par ex., délais d’attente, annulations).

**Exemple d’utilisation :**

```go
ch1 := make(chan int)
ch2 := make(chan int)
go func() { ch1 <- 42 }()
select {
case v := <-ch1:
    fmt.Println("de ch1 :", v)
case <-ch2:
    fmt.Println("de ch2")
}
```

**Sortie :**

```bash
de ch1 : 42
```

### 17.6 Fermeture de canal et `range`

```go
close(ch)
for v := range ch {
    // lit jusqu’à la fermeture
}
```

- **Définition :** `close` indique qu’il n’y aura plus d’envois ; `range` lit jusqu’à la fermeture.
- **Ce que cela résout :** Cela signale la fin au récepteur.
- **Quand l’utiliser :** Pour indiquer à un récepteur qu’il n’y aura plus de valeurs (par ex., producteur‑consommateur).

**Exemple d’utilisation :**

```go
ch := make(chan int, 3)
ch <- 1
ch <- 2
close(ch)
for v := range ch {
    fmt.Println(v)
}
```

**Sortie :**

```bash
1
2
```

### 17.7 WaitGroup

```go
var wg sync.WaitGroup
wg.Add(1)
go func() {
    defer wg.Done()
    // travail
}()
wg.Wait()
```

- **Définition :** WaitGroup attend qu’une collection de goroutines se termine.
- **Ce que cela résout :** Cela fournit un compteur simple pour synchroniser la fin d’exécution.
- **Quand l’utiliser :** Quand vous avez plusieurs goroutines et devez attendre que toutes aient fini.

**Exemple d’utilisation :**

```go
var wg sync.WaitGroup
for i := 0; i < 3; i++ {
    wg.Add(1)
    go func(i int) {
        defer wg.Done()
        fmt.Println(i)
    }(i)
}
wg.Wait()
```

**Sortie (l’ordre peut varier) :**

```bash
2
0
1
```

### 17.8 Mutex

```go
var mu sync.Mutex
mu.Lock()
// section critique
mu.Unlock()
```

- **Définition :** Un mutex fournit une exclusion mutuelle pour protéger les données partagées.
- **Ce que cela résout :** Il évite les conditions de course quand plusieurs goroutines accèdent à la mémoire partagée.
- **Quand l’utiliser :** Quand vous avez des variables partagées écrites par plusieurs goroutines.

**Exemple d’utilisation :**

```go
var mu sync.Mutex
var compteur int
for i := 0; i < 1000; i++ {
    go func() {
        mu.Lock()
        compteur++
        mu.Unlock()
    }()
}
time.Sleep(100 * time.Millisecond)
fmt.Println(compteur)
```

**Sortie (environ 1000) :**

```bash
1000
```

[→ Chapitre 9.1 : Goroutines](/fr/chapter-9-concurrency-goroutines-channels-and-context/9-1-goroutines)  
[→ Chapitre 9.2 : Canaux](/fr/chapter-9-concurrency-goroutines-channels-and-context/9-2-channels)  
[→ Chapitre 9.14 : WaitGroups](/fr/chapter-9-concurrency-goroutines-channels-and-context/9-14-waitgroups)  
[→ Chapitre 9.17 : Mutex](/fr/chapter-9-concurrency-goroutines-channels-and-context/9-17-mutexes)

---

## 18. Éléments de syntaxe supplémentaires

### 18.1 `new` intégré

```go
p := new(int)   // p est *int, mis à zéro
*p = 42
```

- **Définition :** `new` alloue de la mémoire mise à zéro pour un type et retourne un pointeur.
- **Ce que cela résout :** Cela fournit un moyen de créer un pointeur vers une valeur zéro.
- **Quand l’utiliser :** Quand vous avez besoin d’un pointeur vers une valeur zéro, mais `&T{}` est plus courant.

**Exemple d’utilisation :**

```go
p := new(int)
fmt.Println(*p) // 0
*p = 100
fmt.Println(*p) // 100
```

**Sortie :**

```bash
0
100
```

### 18.2 `make` vs `new`

- `make` est seulement pour les tranches, map, canaux ; retourne une valeur initialisée (pas mise à zéro).
- `new` fonctionne pour tout type ; retourne un pointeur mis à zéro.

### 18.3 `len`, `cap`, `append`, `copy`

```go
s := []int{1, 2, 3}
l := len(s)      // 3
c := cap(s)      // 3
s = append(s, 4)
copy(s2, s)      // copie les éléments
```

- **Définition :** Fonctions intégrées pour les opérations sur tranches.
- **Ce qu’elles résolvent :** Elles fournissent une gestion efficace des tranches.
- **Quand les utiliser :** `len` et `cap` pour la longueur/capacité ; `append` pour agrandir ; `copy` pour dupliquer.

**Exemple d’utilisation :**

```go
s1 := []int{1, 2}
s2 := make([]int, 2)
copy(s2, s1)
fmt.Println(s2)
```

**Sortie :**

```bash
[1 2]
```

### 18.4 Ordre LIFO de `defer`

```go
defer fmt.Println("premier")
defer fmt.Println("second")
```

- **Définition :** Les appels différés sont exécutés dans l’ordre LIFO (dernier entré, premier sorti).
- **Ce que cela résout :** Cela garantit que les ressources sont nettoyées dans l’ordre inverse de leur acquisition.
- **Quand l’utiliser :** Naturel quand vous différez plusieurs appels close/unlock.

**Sortie :**

```bash
second
premier
```

### 18.5 Fallthrough dans `switch`

```go
switch 2 {
case 1:
    fmt.Println("1")
case 2:
    fmt.Println("2")
    fallthrough
case 3:
    fmt.Println("3")
}
```

- **Définition :** `fallthrough` force l’exécution du cas suivant.
- **Ce que cela résout :** Cela offre un comportement de style C quand nécessaire.
- **Quand l’utiliser :** Rarement ; seulement quand vous voulez explicitement exécuter plusieurs cas consécutifs.

**Sortie :**

```bash
2
3
```

### 18.6 Identifiant blanc dans les retours multiples

```go
_, err := os.Open("fichier.txt") // ignore le descripteur de fichier
```

- **Définition :** `_` ignore une valeur de retour.
- **Ce que cela résout :** Cela supprime les avertissements du compilateur sur les variables inutilisées.
- **Quand l’utiliser :** Quand vous n’avez besoin que de certaines valeurs de retour.

### 18.7 Étiquette et `goto`

```go
boucle:
for i := 0; i < 10; i++ {
    if i == 5 {
        break boucle
    }
}
```

- **Définition :** Une étiquette marque une instruction ; `goto` saute vers une étiquette.
- **Ce que cela résout :** Les étiquettes permettent de sortir/continuer des boucles externes ; `goto` peut simplifier la gestion des erreurs.
- **Quand l’utiliser :** Utilisez les étiquettes pour sortir de boucles imbriquées ; `goto` avec parcimonie (par ex., nettoyage centralisé).

**Exemple d’utilisation (goto) :**

```go
i := 0
debut:
if i < 3 {
    fmt.Println(i)
    i++
    goto debut
}
```

**Sortie :**

```bash
0
1
2
```

### 18.8 Conversion vs assertion

- **Conversion :** `int(3.14)` fonctionne entre types compatibles.
- **Assertion :** `i.(string)` fonctionne uniquement sur les valeurs d’interface.

### 18.9 Interfaces embarquées

```go
type Lecteur interface { Lire(p []byte) (n int, err error) }
type Ecrivain interface { Ecrire(p []byte) (n int, err error) }
type LecteurEcrivain interface {
    Lecteur
    Ecrivain
}
```

- **Définition :** Une interface peut embarquer d’autres interfaces.
- **Ce que cela résout :** Cela compose des interfaces sans répéter les signatures de méthodes.
- **Quand l’utiliser :** Quand vous construisez des interfaces plus grandes à partir de plus petites (par ex., `io.ReadWriter`).

---

## 19. Tableau récapitulatif de la syntaxe clé

| Concept                      | Exemple de syntaxe                                       |
| ---------------------------- | -------------------------------------------------------- |
| Paquetage                    | `package main`                                           |
| Importation                  | `import "fmt"`                                           |
| Variable (complète)          | `var x int = 42`                                         |
| Variable courte              | `y := 10`                                                |
| Constante                    | `const Pi = 3.14`                                        |
| Iota                         | `const ( A = iota )`                                     |
| Fonction                     | `func add(a, b int) int { return a+b }`                  |
| Retours multiples            | `func div(a,b int) (int, error) { ... }`                 |
| Variadique                   | `func sum(nums ...int) int { ... }`                      |
| Méthode (récepteur valeur)   | `func (c Compteur) Valeur() int { return c.valeur }`     |
| Méthode (récepteur pointeur) | `func (c *Compteur) Inc() { c.valeur++ }`                |
| Récepteur non nommé          | `func (Compteur) Desc() string { ... }`                  |
| Création d’erreur            | `errors.New("msg")` ou `fmt.Errorf("%s", msg)`           |
| Defer                        | `defer f.Close()`                                        |
| Panic/recover                | `defer func() { if r := recover(); r != nil { ... } }()` |
| Littéral de structure        | `p := Personne{Nom: "Alice", Age: 30}`                   |
| Pointeur                     | `p := &x`, `*p`                                          |
| Tableau                      | `arr := [3]int{1,2,3}`                                   |
| Tranche                      | `s := []int{1,2,3}`; `append(s, 4)`                      |
| Map                          | `m := map[string]int{"a":1}`                             |
| Interface                    | `type Salueur interface { Saluer() string }`             |
| Interface vide               | `var x interface{}` ou `var x any`                       |
| Assertion de type            | `v, ok := i.(string)`                                    |
| Commutateur de type          | `switch v := i.(type) { ... }`                           |
| Fonction générique           | `func Identite[T any](x T) T { return x }`               |
| Type générique               | `type Pile[T any] struct { items []T }`                  |
| Goroutine                    | `go maFonction()`                                        |
| Canal non tamponné           | `ch := make(chan int)`; `ch <- 42`; `v := <-ch`          |
| Canal tamponné               | `ch := make(chan int, 2)`                                |
| Direction de canal           | `func envoyer(ch chan<- int)`                            |
| Select                       | `select { case v := <-ch: ... }`                         |
| Fermeture de canal           | `close(ch)`                                              |
| Range sur canal              | `for v := range ch { ... }`                              |
| WaitGroup                    | `wg.Add(1); defer wg.Done(); wg.Wait()`                  |
| Mutex                        | `mu.Lock(); defer mu.Unlock()`                           |
| new                          | `p := new(int)`                                          |
| make                         | `m := make(map[string]int, 10)`                          |
| len/cap                      | `len(tranche)`, `cap(tranche)`                           |
| append/copy                  | `s = append(s, 1)`; `copy(dest, src)`                    |
| fallthrough                  | `case 2: fmt.Println("2"); fallthrough`                  |
| Identifiant blanc            | `_, err := faire()`                                      |
| goto / étiquette             | `debut: ... goto debut`                                  |

---

Ce document couvre la syntaxe essentielle que vous utiliserez quotidiennement en Go, avec des explications détaillées sur ce que chaque construction résout et quand l’utiliser. Pour des exemples plus approfondis et des projets, reportez‑vous aux fichiers de chapitre individuels liés tout au long du document. Si un chapitre n’est pas encore écrit, le lien sert d’espace réservé pour un contenu futur.
