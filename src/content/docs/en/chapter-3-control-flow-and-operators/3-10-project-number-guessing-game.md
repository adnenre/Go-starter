---
title: Project Number Guessing Game
sidebar:
  order: 10
  label: 3.10 Project Number Guessing Game
---

## Context

The program picks a random number between 1 and 100. The user must guess it, with hints "too high" or "too low". The game continues until the user guesses correctly.

This project combines:

- Random generation (`math/rand`)
- Loops (`for`)
- Conditionals (`if/else`)
- User input (`fmt.Scan`)

## Step‑by‑step code

```go
package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    // Seed the generator (Go 1.20+ does this automatically, but kept for example)
    rand.NewSource(time.Now().UnixNano())
    secret := rand.Intn(100) + 1 // number between 1 and 100
    var guess int
    attempts := 0

    fmt.Println("Guess the number between 1 and 100!")

    for {
        fmt.Print("Your guess: ")
        _, err := fmt.Scan(&guess)
        if err != nil {
            fmt.Println("Invalid input.")
            continue
        }
        attempts++

        if guess < secret {
            fmt.Println("Too low!")
        } else if guess > secret {
            fmt.Println("Too high!")
        } else {
            fmt.Printf("Congratulations! You found %d in %d attempts.\n", secret, attempts)
            break
        }
    }
}
```

## Example interaction

```bash
Guess the number between 1 and 100!
Your guess: 50
Too low!
Your guess: 75
Too high!
Your guess: 62
Too low!
Your guess: 68
Congratulations! You found 68 in 4 attempts.
```

## Possible extensions

- Limit the number of attempts.
- Add option to play again.
- Handle non‑numeric input more robustly.

## Useful links

- [math/rand package documentation](https://pkg.go.dev/math/rand)
- [fmt package documentation](https://pkg.go.dev/fmt)
- [Go by Example: Random Numbers](https://gobyexample.com/random-numbers)
