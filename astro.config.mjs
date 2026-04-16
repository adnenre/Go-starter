// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeGalaxy from "starlight-theme-galaxy";

// https://astro.build/config
export default defineConfig({
  site: "https://adnenre.github.io/dotnet-book",
  base: ".",

  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      title: { en: "Go Fundamentals", fr: "les fondamentaux de Go" },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/adnenre/dotnet-book/" }],
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
          lang: "en",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
      },
      sidebar: [
        {
          label: "1 - Introduction",
          translations: {
            fr: "1 - Introduction",
          },
          items: [
            {
              label: "1.1 What is Go",
              translations: {
                fr: "1.1 Qu'est-ce que Go",
              },
              slug: "chapter-1-introduction/1-1-what-is-go",
            },
            {
              label: "1.2 Installing Go",
              translations: {
                fr: "1.2 Installer Go",
              },
              slug: "chapter-1-introduction/1-2-installing-go",
            },
            {
              label: "1.3 Go modules",
              translations: {
                fr: "1.3 Les modules Go",
              },
              slug: "chapter-1-introduction/1-3-go-modules",
            },
            {
              label: "1.4 Project layout",
              translations: {
                fr: "1.4 Organisation d'un projet",
              },
              slug: "chapter-1-introduction/1-4-project-layout",
            },
            {
              label: "1.5 Essential commands",
              translations: {
                fr: "1.5 Commandes essentielles",
              },
              slug: "chapter-1-introduction/1-5-essential-commands",
            },
            {
              label: "1.6 Your first program",
              translations: {
                fr: "1.6 Votre premier programme",
              },
              slug: "chapter-1-introduction/1-6-your-first-program",
            },
            {
              label: "1.7 Environment variables",
              translations: {
                fr: "1.7 Variables d'environnement",
              },
              slug: "chapter-1-introduction/1-7-environment-variables",
            },
            {
              label: "1.8 Command line arguments",
              translations: {
                fr: "1.8 Arguments en ligne de commande",
              },
              slug: "chapter-1-introduction/1-8-command-line-arguments",
            },
            {
              label: "1.9 Project CLI Greeting Tool",
              translations: {
                fr: "1.9 Projet : Outil de salutation en CLI",
              },
              slug: "chapter-1-introduction/1-9-project-cli-greeting-tool",
            },
          ],
        },
        {
          label: "2 - Primitive Types Variables and Basic Syntax",
          translations: {
            fr: "2 - Types Primitifs, Variables et Syntaxe de Base",
          },
          items: [
            {
              label: "2.1 Built in types",
              translations: {
                fr: "2.1 Types natifs",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-1-built-in-types",
            },
            {
              label: "2.2 Zero values",
              translations: {
                fr: "2.2 Valeurs zéro",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-2-zero-values",
            },
            {
              label: "2.3 Variables and constants",
              translations: {
                fr: "2.3 Variables et constantes",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-3-variables-and-constants",
            },
            {
              label: "2.4 Constants and iota enums",
              translations: {
                fr: "2.4 Constantes et énumérations avec iota",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-4-constants-and-iota-enums",
            },
            {
              label: "2.5 Basic I O",
              translations: {
                fr: "2.5 Entrées/Sorties basiques",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-5-basic-i-o",
            },
            {
              label: "2.6 Type conversions",
              translations: {
                fr: "2.6 Conversions de types",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-6-type-conversions",
            },
            {
              label: "2.7 Number parsing",
              translations: {
                fr: "2.7 Analyse de nombres",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-7-number-parsing",
            },
            {
              label: "2.8 Strings and runes",
              translations: {
                fr: "2.8 Chaînes et runes",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-8-strings-and-runes",
            },
            {
              label: "2.9 String functions",
              translations: {
                fr: "2.9 Fonctions sur les chaînes",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-9-string-functions",
            },
            {
              label: "2.10 String formatting",
              translations: {
                fr: "2.10 Formatage de chaînes",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-10-string-formatting",
            },
            {
              label: "2.11 Random numbers",
              translations: {
                fr: "2.11 Nombres aléatoires",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-11-random-numbers",
            },
            {
              label: "2.12 Project Simple Calculator",
              translations: {
                fr: "2.12 Projet : Calculatrice simple",
              },
              slug: "chapter-2-primitive-types-variables-and-basic-syntax/2-12-project-simple-calculator",
            },
          ],
        },
        {
          label: "3 - Control Flow and Operators",
          translations: {
            fr: "3 - Flux de Contrôle et Opérateurs",
          },
          items: [
            {
              label: "3.1 Conditionals if else",
              translations: {
                fr: "3.1 Conditions if else",
              },
              slug: "chapter-3-control-flow-and-operators/3-1-conditionals-if-else",
            },
            {
              label: "3.2 Loops for",
              translations: {
                fr: "3.2 Boucles for",
              },
              slug: "chapter-3-control-flow-and-operators/3-2-loops-for",
            },
            {
              label: "3.3 Loop control break continue",
              translations: {
                fr: "3.3 Contrôle de boucle break continue",
              },
              slug: "chapter-3-control-flow-and-operators/3-3-loop-control-break-continue",
            },
            {
              label: "3.4 Range over built in types",
              translations: {
                fr: "3.4 Parcours avec range sur les types natifs",
              },
              slug: "chapter-3-control-flow-and-operators/3-4-range-over-built-in-types",
            },
            {
              label: "3.5 Switch",
              translations: {
                fr: "3.5 Switch",
              },
              slug: "chapter-3-control-flow-and-operators/3-5-switch",
            },
            {
              label: "3.6 Operators",
              translations: {
                fr: "3.6 Opérateurs",
              },
              slug: "chapter-3-control-flow-and-operators/3-6-operators",
            },
            {
              label: "3.7 Recursion",
              translations: {
                fr: "3.7 Récursivité",
              },
              slug: "chapter-3-control-flow-and-operators/3-7-recursion",
            },
            {
              label: "3.8 Defer",
              translations: {
                fr: "3.8 Defer",
              },
              slug: "chapter-3-control-flow-and-operators/3-8-defer",
            },
            {
              label: "3.9 Panic and recover",
              translations: {
                fr: "3.9 Panic et recover",
              },
              slug: "chapter-3-control-flow-and-operators/3-9-panic-and-recover",
            },
            {
              label: "3.10 Project Number Guessing Game",
              translations: {
                fr: "3.10 Projet : Jeu de devinette de nombre",
              },
              slug: "chapter-3-control-flow-and-operators/3-10-project-number-guessing-game",
            },
          ],
        },
        {
          label: "4 - Composite Types Arrays Slices Maps Structs",
          translations: {
            fr: "4 - Types Composites – Tableaux, Slices, Maps, Structs",
          },
          items: [
            {
              label: "4.1 Arrays",
              translations: {
                fr: "4.1 Tableaux",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-1-arrays",
            },
            {
              label: "4.2 Slices",
              translations: {
                fr: "4.2 Slices",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-2-slices",
            },
            {
              label: "4.3 Maps",
              translations: {
                fr: "4.3 Maps",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-3-maps",
            },
            {
              label: "4.4 Structs",
              translations: {
                fr: "4.4 Structs",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-4-structs",
            },
            {
              label: "4.5 Struct embedding",
              translations: {
                fr: "4.5 Embedding de structs",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-5-struct-embedding",
            },
            {
              label: "4.6 Pointers",
              translations: {
                fr: "4.6 Pointeurs",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-6-pointers",
            },
            {
              label: "4.7 Sorting",
              translations: {
                fr: "4.7 Tri",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-7-sorting",
            },
            {
              label: "4.8 Sorting by functions",
              translations: {
                fr: "4.8 Tri avec fonctions personnalisées",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-8-sorting-by-functions",
            },
            {
              label: "4.9 Text templates",
              translations: {
                fr: "4.9 Templates de texte",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-9-text-templates",
            },
            {
              label: "4.10 Regular expressions",
              translations: {
                fr: "4.10 Expressions régulières",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-10-regular-expressions",
            },
            {
              label: "4.11 JSON",
              translations: {
                fr: "4.11 JSON",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-11-json",
            },
            {
              label: "4.12 XML",
              translations: {
                fr: "4.12 XML",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-12-xml",
            },
            {
              label: "4.13 Time",
              translations: {
                fr: "4.13 Temps",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-13-time",
            },
            {
              label: "4.14 Epoch",
              translations: {
                fr: "4.14 Epoch",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-14-epoch",
            },
            {
              label: "4.15 Time formatting and parsing",
              translations: {
                fr: "4.15 Formatage et analyse de temps",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-15-time-formatting-and-parsing",
            },
            {
              label: "4.16 Random numbers",
              translations: {
                fr: "4.16 Nombres aléatoires",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-16-random-numbers",
            },
            {
              label: "4.17 URL parsing",
              translations: {
                fr: "4.17 Analyse d'URL",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-17-url-parsing",
            },
            {
              label: "4.18 SHA256 hashes",
              translations: {
                fr: "4.18 Hashage SHA256",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-18-sha256-hashes",
            },
            {
              label: "4.19 Base64 encoding",
              translations: {
                fr: "4.19 Encodage Base64",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-19-base64-encoding",
            },
            {
              label: "4.20 Project Student Grades Database",
              translations: {
                fr: "4.20 Projet : Base de données de notes d'étudiants",
              },
              slug: "chapter-4-composite-types-arrays-slices-maps-structs/4-20-project-student-grades-database",
            },
          ],
        },
        {
          label: "5 - Functions Methods and Error Handling",
          translations: {
            fr: "5 - Fonctions, Méthodes et Gestion d'Erreurs",
          },
          items: [
            {
              label: "5.1 Function declaration",
              translations: {
                fr: "5.1 Déclaration de fonction",
              },
              slug: "chapter-5-functions-methods-and-error-handling/5-1-function-declaration",
            },
            {
              label: "5.2 Multiple return values",
              translations: {
                fr: "5.2 Valeurs de retour multiples",
              },
              slug: "chapter-5-functions-methods-and-error-handling/5-2-multiple-return-values",
            },
            {
              label: "5.3 Variadic functions",
              translations: {
                fr: "5.3 Fonctions variadiques",
              },
              slug: "chapter-5-functions-methods-and-error-handling/5-3-variadic-functions",
            },
            {
              label: "5.4 Closures",
              translations: {
                fr: "5.4 Closures",
              },
              slug: "chapter-5-functions-methods-and-error-handling/5-4-closures",
            },
            {
              label: "5.5 Methods",
              translations: {
                fr: "5.5 Méthodes",
              },
              slug: "chapter-5-functions-methods-and-error-handling/5-5-methods",
            },
            {
              label: "5.6 Error handling",
              translations: {
                fr: "5.6 Gestion d'erreurs",
              },
              slug: "chapter-5-functions-methods-and-error-handling/5-6-error-handling",
            },
            {
              label: "5.7 Custom errors",
              translations: {
                fr: "5.7 Erreurs personnalisées",
              },
              slug: "chapter-5-functions-methods-and-error-handling/5-7-custom-errors",
            },
            {
              label: "5.8 Defer",
              translations: {
                fr: "5.8 Defer",
              },
              slug: "chapter-5-functions-methods-and-error-handling/5-8-defer",
            },
            {
              label: "5.9 Panic and recover",
              translations: {
                fr: "5.9 Panic et recover",
              },
              slug: "chapter-5-functions-methods-and-error-handling/5-9-panic-and-recover",
            },
            {
              label: "5.10 Project Geometry Calculator",
              translations: {
                fr: "5.10 Projet : Calculateur de géométrie",
              },
              slug: "chapter-5-functions-methods-and-error-handling/5-10-project-geometry-calculator",
            },
          ],
        },
        {
          label: "6 - Packages Modules and Visibility",
          translations: {
            fr: "6 - Paquets, Modules et Visibilité",
          },
          items: [
            {
              label: "6.1 Package basics",
              translations: {
                fr: "6.1 Bases des paquets",
              },
              slug: "chapter-6-packages-modules-and-visibility/6-1-package-basics",
            },
            {
              label: "6.2 Visibility",
              translations: {
                fr: "6.2 Visibilité",
              },
              slug: "chapter-6-packages-modules-and-visibility/6-2-visibility",
            },
            {
              label: "6.3 Importing",
              translations: {
                fr: "6.3 Importer",
              },
              slug: "chapter-6-packages-modules-and-visibility/6-3-importing",
            },
            {
              label: "6.4 Internal packages",
              translations: {
                fr: "6.4 Paquets internes",
              },
              slug: "chapter-6-packages-modules-and-visibility/6-4-internal-packages",
            },
            {
              label: "6.5 Managing dependencies",
              translations: {
                fr: "6.5 Gestion des dépendances",
              },
              slug: "chapter-6-packages-modules-and-visibility/6-5-managing-dependencies",
            },
            {
              label: "6.6 Embed directive",
              translations: {
                fr: "6.6 Directive embed",
              },
              slug: "chapter-6-packages-modules-and-visibility/6-6-embed-directive",
            },
            {
              label: "6.7 Project Reusable stringutil package",
              translations: {
                fr: "6.7 Projet : Paquet réutilisable stringutil",
              },
              slug: "chapter-6-packages-modules-and-visibility/6-7-project-reusable-stringutil-package",
            },
          ],
        },
        {
          label: "7 - Interfaces and Polymorphism",
          translations: {
            fr: "7 - Interfaces et Polymorphisme",
          },
          items: [
            {
              label: "7.1 Interface declaration",
              translations: {
                fr: "7.1 Déclaration d'interface",
              },
              slug: "chapter-7-interfaces-and-polymorphism/7-1-interface-declaration",
            },
            {
              label: "7.2 The empty interface",
              translations: {
                fr: "7.2 L'interface vide",
              },
              slug: "chapter-7-interfaces-and-polymorphism/7-2-the-empty-interface",
            },
            {
              label: "7.3 Interface embedding",
              translations: {
                fr: "7.3 Embedding d'interfaces",
              },
              slug: "chapter-7-interfaces-and-polymorphism/7-3-interface-embedding",
            },
            {
              label: "7.4 Common standard interfaces",
              translations: {
                fr: "7.4 Interfaces standard courantes",
              },
              slug: "chapter-7-interfaces-and-polymorphism/7-4-common-standard-interfaces",
            },
            {
              label: "7.5 Nil interfaces vs nil concrete values",
              translations: {
                fr: "7.5 Interfaces nil vs valeurs concrètes nil",
              },
              slug: "chapter-7-interfaces-and-polymorphism/7-5-nil-interfaces-vs-nil-concrete-values",
            },
            {
              label: "7.6 Project Shape interface",
              translations: {
                fr: "7.6 Projet : Interface Shape",
              },
              slug: "chapter-7-interfaces-and-polymorphism/7-6-project-shape-interface",
            },
          ],
        },
        {
          label: "8 - Generics",
          translations: {
            fr: "8 - Génériques",
          },
          items: [
            {
              label: "8.1 Type parameters",
              translations: {
                fr: "8.1 Paramètres de type",
              },
              slug: "chapter-8-generics/8-1-type-parameters",
            },
            {
              label: "8.2 Type constraints",
              translations: {
                fr: "8.2 Contraintes de type",
              },
              slug: "chapter-8-generics/8-2-type-constraints",
            },
            {
              label: "8.3 Generic types",
              translations: {
                fr: "8.3 Types génériques",
              },
              slug: "chapter-8-generics/8-3-generic-types",
            },
            {
              label: "8.4 When to use generics",
              translations: {
                fr: "8.4 Quand utiliser les génériques",
              },
              slug: "chapter-8-generics/8-4-when-to-use-generics",
            },
            {
              label: "8.5 Project Generic Filter Map Reduce",
              translations: {
                fr: "8.5 Projet : Fonctions génériques Filter Map Reduce",
              },
              slug: "chapter-8-generics/8-5-project-generic-filter-map-reduce",
            },
          ],
        },
        {
          label: "9 - Concurrency Goroutines Channels and Context",
          translations: {
            fr: "9 - Concurrence – Goroutines, Canaux et Context",
          },
          items: [
            {
              label: "9.1 Goroutines",
              translations: {
                fr: "9.1 Goroutines",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-1-goroutines",
            },
            {
              label: "9.2 Channels",
              translations: {
                fr: "9.2 Canaux",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-2-channels",
            },
            {
              label: "9.3 Channel buffering",
              translations: {
                fr: "9.3 Tampon de canaux",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-3-channel-buffering",
            },
            {
              label: "9.4 Channel synchronization",
              translations: {
                fr: "9.4 Synchronisation par canaux",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-4-channel-synchronization",
            },
            {
              label: "9.5 Channel directions",
              translations: {
                fr: "9.5 Directions de canaux",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-5-channel-directions",
            },
            {
              label: "9.6 Select statement",
              translations: {
                fr: "9.6 Instruction select",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-6-select-statement",
            },
            {
              label: "9.7 Timeouts",
              translations: {
                fr: "9.7 Timeouts",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-7-timeouts",
            },
            {
              label: "9.8 Non blocking channel operations",
              translations: {
                fr: "9.8 Opérations non bloquantes sur canaux",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-8-non-blocking-channel-operations",
            },
            {
              label: "9.9 Closing channels",
              translations: {
                fr: "9.9 Fermeture de canaux",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-9-closing-channels",
            },
            {
              label: "9.10 Range over channels",
              translations: {
                fr: "9.10 Parcours de canaux avec range",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-10-range-over-channels",
            },
            {
              label: "9.11 Timers",
              translations: {
                fr: "9.11 Timers",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-11-timers",
            },
            {
              label: "9.12 Tickers",
              translations: {
                fr: "9.12 Tickers",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-12-tickers",
            },
            {
              label: "9.13 Worker pools",
              translations: {
                fr: "9.13 Pools de workers",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-13-worker-pools",
            },
            {
              label: "9.14 WaitGroups",
              translations: {
                fr: "9.14 WaitGroups",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-14-waitgroups",
            },
            {
              label: "9.15 Rate limiting",
              translations: {
                fr: "9.15 Limitation de débit",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-15-rate-limiting",
            },
            {
              label: "9.16 Atomic counters",
              translations: {
                fr: "9.16 Compteurs atomiques",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-16-atomic-counters",
            },
            {
              label: "9.17 Mutexes",
              translations: {
                fr: "9.17 Mutexes",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-17-mutexes",
            },
            {
              label: "9.18 Stateful goroutines",
              translations: {
                fr: "9.18 Goroutines avec état",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-18-stateful-goroutines",
            },
            {
              label: "9.19 Context package",
              translations: {
                fr: "9.19 Paquet context",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-19-context-package",
            },
            {
              label: "9.20 Signals",
              translations: {
                fr: "9.20 Signaux",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-20-signals",
            },
            {
              label: "9.21 Spawning processes",
              translations: {
                fr: "9.21 Lancement de processus",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-21-spawning-processes",
            },
            {
              label: "9.22 Execing processes",
              translations: {
                fr: "9.22 Remplacement de processus par exec",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-22-execing-processes",
            },
            {
              label: "9.23 Project Concurrent URL fetcher",
              translations: {
                fr: "9.23 Projet : Récupérateur d'URL concurrent",
              },
              slug: "chapter-9-concurrency-goroutines-channels-and-context/9-23-project-concurrent-url-fetcher",
            },
          ],
        },
        {
          label: "10 - CLI Mastery Build a Publishable Task Manager",
          translations: {
            fr: "10 - Maîtrise du CLI – Construire un Gestionnaire de Tâches Publiable",
          },
          items: [
            {
              label: "10.1 Why CLI tools in Go",
              translations: {
                fr: "10.1 Pourquoi les outils CLI en Go",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-1-why-cli-tools-in-go",
            },
            {
              label: "10.2 Basic CLI with os.Args and flag",
              translations: {
                fr: "10.2 CLI basique avec os.Args et flag",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-2-basic-cli-with-osargs-and-flag",
            },
            {
              label: "10.3 Command line flags",
              translations: {
                fr: "10.3 Drapeaux en ligne de commande",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-3-command-line-flags",
            },
            {
              label: "10.4 Command line subcommands",
              translations: {
                fr: "10.4 Sous-commandes en ligne de commande",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-4-command-line-subcommands",
            },
            {
              label: "10.5 Environment variables",
              translations: {
                fr: "10.5 Variables d'environnement",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-5-environment-variables",
            },
            {
              label: "10.6 Logging",
              translations: {
                fr: "10.6 Journalisation",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-6-logging",
            },
            {
              label: "10.7 Advanced CLI with cobra and viper",
              translations: {
                fr: "10.7 CLI avancé avec cobra et viper",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-7-advanced-cli-with-cobra-and-viper",
            },
            {
              label: "10.8 Reading files",
              translations: {
                fr: "10.8 Lecture de fichiers",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-8-reading-files",
            },
            {
              label: "10.9 Writing files",
              translations: {
                fr: "10.9 ÉCriture de fichiers",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-9-writing-files",
            },
            {
              label: "10.10 Line filters",
              translations: {
                fr: "10.10 Filtres ligne par ligne",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-10-line-filters",
            },
            {
              label: "10.11 File paths",
              translations: {
                fr: "10.11 Chemins de fichiers",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-11-file-paths",
            },
            {
              label: "10.12 Directories",
              translations: {
                fr: "10.12 Dossiers",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-12-directories",
            },
            {
              label: "10.13 Temporary files and directories",
              translations: {
                fr: "10.13 Fichiers et dossiers temporaires",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-13-temporary-files-and-directories",
            },
            {
              label: "10.14 Testing and benchmarking",
              translations: {
                fr: "10.14 Tests et benchmarks",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-14-testing-and-benchmarking",
            },
            {
              label: "10.15 HTTP client",
              translations: {
                fr: "10.15 Client HTTP",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-15-http-client",
            },
            {
              label: "10.16 HTTP server",
              translations: {
                fr: "10.16 Serveur HTTP",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-16-http-server",
            },
            {
              label: "10.17 TCP server",
              translations: {
                fr: "10.17 Serveur TCP",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-17-tcp-server",
            },
            {
              label: "10.18 CLI best practices",
              translations: {
                fr: "10.18 Bonnes pratiques CLI",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-18-cli-best-practices",
            },
            {
              label: "10.19 Project CLI Task Manager publishable",
              translations: {
                fr: "10.19 Projet : Gestionnaire de tâches en CLI publiable",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-19-project-cli-task-manager-publishable",
            },
            {
              label: "10.20 Deliverables",
              translations: {
                fr: "10.20 Livrables",
              },
              slug: "chapter-10-cli-mastery-build-a-publishable-task-manager/10-20-deliverables",
            },
          ],
        },
      ],
    }),
  ],
});
