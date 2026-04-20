---
title: Summry
sidebar:
  order: 21
  label: 10.21 Summry
---

# Complete Go Syntax Reference

This document explains the syntax of every major Go construct. Each example includes a **definition**, **what problem it solves**, **when to use it**, a **usage demonstration**, and its **output** (where applicable). After each section, you will find a link to the corresponding detailed chapter file (or a placeholder). Use this as your ultimate Go syntax guide.

---

## 1. Package and Import

### 1.1 Package declaration

```go
package main
```

- **Definition:** A package is a collection of Go source files. `package main` declares the program’s entry point.
- **What it solves:** Packages provide code organisation, namespace separation, and compilation units.
- **When to use:** Every Go file must start with a package declaration. Use `main` for executables, any other name for reusable libraries.

**Usage example:**  
Create a file `main.go` with the line above. Run `go run main.go` – it compiles without error (even if empty).

### 1.2 Import statement

```go
import "fmt"
import "os"

// Grouped import
import (
    "fmt"
    "os"
)

// Alias
import f "fmt"

// Blank import (side‑effect only)
import _ "image/png"
```

- **Definition:** An import statement makes exported identifiers of another package available.
- **What it solves:** It allows code reuse across packages without copying.
- **When to use:** Whenever you need functionality from the standard library or third‑party packages.

**Usage example:**

```go
package main

import f "fmt"

func main() {
    f.Println("Hello")
}
```

**Output:**

```bash
Hello
```

[→ Chapter 6.3: Importing](/en/chapter-6-packages-modules-and-visibility/6-3-importing)

---

## 2. Variables and Constants

### 2.1 Variable declaration (full form)

```go
var x int = 42
```

- **Definition:** `var` declares one or more variables. The type and initial value are optional if the other is present.
- **What it solves:** Variables store data that can change during program execution.
- **When to use:** When you need mutable storage; use full form when type is not obvious or you want to declare without initialisation.

**Usage example:**

```go
var x int = 42
fmt.Println(x)
```

**Output:**

```bash
42
```

### 2.2 Short variable declaration (type inference)

```go
y := 10
```

- **Definition:** `:=` declares and initialises a variable, inferring the type from the right‑hand side.
- **What it solves:** It reduces verbosity and makes code cleaner when the type is obvious.
- **When to use:** Inside functions (not at package level) for local variables.

**Usage example:**

```go
y := 10
fmt.Printf("%T %v", y, y)
```

**Output:**

```bash
int 10
```

### 2.3 Multiple variables

```go
var a, b int = 1, 2
c, d := 3, "hello"
```

- **Definition:** You can declare multiple variables in a single line, optionally with different types.
- **What it solves:** It allows concise initialisation of several variables at once.
- **When to use:** When you need several variables that are related or initialised together.

**Usage example:**

```go
var a, b int = 1, 2
c, d := 3, "hello"
fmt.Println(a, b, c, d)
```

**Output:**

```bash
1 2 3 hello
```

### 2.4 Constants

```go
const Pi = 3.14
const (
    StatusOK = 200
    StatusNotFound = 404
)
```

- **Definition:** Constants are immutable values known at compile time.
- **What it solves:** They prevent accidental modification and enable compiler optimisations.
- **When to use:** For mathematical constants, status codes, configuration values that never change.

**Usage example:**

```go
const Pi = 3.14
fmt.Println(Pi)
```

**Output:**

```bash
3.14
```

### 2.5 Iota enumerations

```go
const (
    Sunday = iota   // 0
    Monday          // 1
    Tuesday         // 2
)
```

- **Definition:** `iota` is a predeclared identifier that generates sequential integer constants.
- **What it solves:** It simplifies creating enumerations without manual numbering.
- **When to use:** When you need a set of related constants that should have sequential values (days, states, flags).

**Usage example:**

```go
const (
    Sunday = iota
    Monday
    Tuesday
)
fmt.Println(Sunday, Monday, Tuesday)
```

**Output:**

```bash
0 1 2
```

[→ Chapter 2.3: Variables and constants](/en/chapter-2-primitive-types-variables-and-basic-syntax/2-3-variables-and-constants)  
[→ Chapter 2.4: Constants and iota enums](/en/chapter-2-primitive-types-variables-and-basic-syntax/2-4-constants-and-iota-enums)

---

## 3. Basic I/O

```go
var name string
fmt.Print("Enter name: ")
fmt.Scan(&name)
fmt.Printf("Hello, %s\n", name)
```

- **Definition:** Basic input/output functions from the `fmt` package for printing and scanning.
- **What it solves:** It provides simple ways to interact with the user or log data.
- **When to use:** For command‑line tools, debugging, or simple user interaction.

**Usage example:**

```go
package main

import "fmt"

func main() {
    var name string
    fmt.Print("Enter name: ")
    fmt.Scan(&name)
    fmt.Printf("Hello, %s\n", name)
}
```

**Input:**  
`Alice`  
**Output:**

```bash
Enter name: Hello, Alice
```

[→ Chapter 2.5: Basic I/O](/en/chapter-2-primitive-types-variables-and-basic-syntax/2-5-basic-i-o)

---

## 4. Strings and Runes

```go
s := "Go"
r := 'G'               // rune literal
for i, ch := range s {
    fmt.Printf("%d: %c\n", i, ch)
}
```

- **Definition:** A string is a read‑only slice of bytes; a rune represents a Unicode code point.
- **What it solves:** Strings handle UTF‑8 text; runes allow character‑level manipulation.
- **When to use:** Strings for text, runes when you need to process individual characters (e.g., iterating over Unicode).

**Usage example:**

```go
s := "Go"
for i, ch := range s {
    fmt.Printf("%d: %c\n", i, ch)
}
```

**Output:**

```bash
0: G
1: o
```

[→ Chapter 2.8: Strings and runes](/en/chapter-2-primitive-types-variables-and-basic-syntax/2-8-strings-and-runes)

---

## 5. Type Conversions and Number Parsing

```go
var f float64 = 3.14
var i int = int(f)           // explicit conversion
num, err := strconv.Atoi("42")
```

- **Definition:** Type conversions change a value from one type to another; parsing converts strings to numbers.
- **What it solves:** They allow operations between different numeric types and interpret user input.
- **When to use:** When you need to mix types (e.g., int to float) or read numbers from strings.

**Usage example:**

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

**Output:**

```bash
3
42
```

[→ Chapter 2.6: Type conversions](/en/chapter-2-primitive-types-variables-and-basic-syntax/2-6-type-conversions)  
[→ Chapter 2.7: Number parsing](/en/chapter-2-primitive-types-variables-and-basic-syntax/2-7-number-parsing)

---

## 6. Control Flow

### 6.1 `if` statement

```go
if x := 10; x > 5 {
    fmt.Println("large")
} else {
    fmt.Println("small")
}
```

- **Definition:** `if` executes a block conditionally, optionally with a short statement before the condition.
- **What it solves:** It provides branching logic based on boolean conditions.
- **When to use:** Whenever you need to make decisions in your code.

**Usage example:**

```go
if x := 10; x > 5 {
    fmt.Println("large")
} else {
    fmt.Println("small")
}
```

**Output:**

```bash
large
```

[→ Chapter 3.1: Conditionals if else](/en/chapter-3-control-flow-and-operators/3-1-conditionals-if-else)

### 6.2 `for` loop – three forms

**Classic C‑style**

```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```

- **Definition:** `for` with init, condition, and post.
- **What it solves:** It executes a block a fixed number of times with a counter.
- **When to use:** When you know the number of iterations in advance.

**Usage example:**

```go
for i := 0; i < 5; i++ {
    fmt.Print(i, " ")
}
```

**Output:**

```bash
0 1 2 3 4
```

**While‑style**

```go
n := 0
for n < 3 {
    fmt.Println(n)
    n++
}
```

- **Definition:** `for` with only the condition (like `while` in other languages).
- **What it solves:** It loops until a condition becomes false.
- **When to use:** When the number of iterations depends on a dynamic condition.

**Usage example:**

```go
n := 0
for n < 3 {
    fmt.Print(n, " ")
    n++
}
```

**Output:**

```bash
0 1 2
```

**Infinite loop**

```go
for {
    // break or return to exit
}
```

- **Definition:** `for` with no condition loops forever.
- **What it solves:** It creates a loop that runs until explicitly broken.
- **When to use:** For servers, event loops, or when exit condition is complex.

**Usage example (break after 3 iterations):**

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

**Output:**

```bash
0 1 2
```

[→ Chapter 3.2: Loops for](/en/chapter-3-control-flow-and-operators/3-2-loops-for)

### 6.3 `range` – with underscore explanation

```go
nums := []int{10, 20, 30}
for i, v := range nums {
    fmt.Println(i, v)
}

// Ignoring index
for _, v := range nums {
    fmt.Println(v)
}
```

- **Definition:** `range` iterates over elements of slices, arrays, strings, maps, or channels.
- **What it solves:** It provides a safe, convenient way to loop over collections without managing indices.
- **When to use:** Whenever you need to iterate over any collection type.

**Usage example:**

```go
nums := []int{10, 20, 30}
for i, v := range nums {
    fmt.Printf("index=%d value=%d\n", i, v)
}
```

**Output:**

```bash
index=0 value=10
index=1 value=20
index=2 value=30
```

[→ Chapter 3.4: Range over built in types](/en/chapter-3-control-flow-and-operators/3-4-range-over-built-in-types)

### 6.4 `switch`

```go
switch day := 2; day {
case 1:
    fmt.Println("Monday")
case 2:
    fmt.Println("Tuesday")
default:
    fmt.Println("Other")
}

// Tagless switch
switch {
case x > 0:
    fmt.Println("positive")
case x < 0:
    fmt.Println("negative")
}
```

- **Definition:** `switch` evaluates a value (or no value) and executes the first matching case.
- **What it solves:** It simplifies long `if‑else` chains and provides multi‑way branching.
- **When to use:** When comparing a single value against many possibilities, or for boolean conditions with multiple branches.

**Usage example:**

```go
day := 2
switch day {
case 1:
    fmt.Println("Monday")
case 2:
    fmt.Println("Tuesday")
default:
    fmt.Println("Other")
}
```

**Output:**

```bash
Tuesday
```

[→ Chapter 3.5: Switch](/en/chapter-3-control-flow-and-operators/3-5-switch)

---

## 7. Defer, Panic, Recover

### 7.1 `defer`

```go
func readFile() error {
    f, err := os.Open("data.txt")
    if err != nil {
        return err
    }
    defer f.Close()   // runs when function returns
    // ... process file ...
    return nil
}
```

- **Definition:** `defer` schedules a function call to run after the surrounding function returns.
- **What it solves:** It ensures cleanup (closing files, unlocking mutexes) even if the function returns early or panics.
- **When to use:** Any time you acquire a resource that must be released.

**Usage example:**

```go
func main() {
    defer fmt.Println("world")
    fmt.Println("hello")
}
```

**Output:**

```bash
hello
world
```

### 7.2 `panic` and `recover`

```go
defer func() {
    if r := recover(); r != nil {
        fmt.Println("Recovered:", r)
    }
}()
panic("something went wrong")
```

- **Definition:** `panic` stops normal execution; `recover` regains control inside a deferred function.
- **What it solves:** They handle truly exceptional situations (bugs, impossible states) that cannot be recovered normally.
- **When to use:** Only for unrecoverable errors; do not use as regular error handling.

**Usage example:**

```go
package main

import "fmt"

func main() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered:", r)
        }
    }()
    panic("boom")
    fmt.Println("never printed")
}
```

**Output:**

```bash
Recovered: boom
```

[→ Chapter 3.8: Defer](/en/chapter-3-control-flow-and-operators/3-8-defer)  
[→ Chapter 3.9: Panic and recover](/en/chapter-3-control-flow-and-operators/3-9-panic-and-recover)

---

## 8. Functions – Complete Syntax

### 8.1 Basic function

```
func add(a int, b int) int {
    return a + b
}
```

- **Definition:** A function is a reusable block of code with parameters and return values.
- **What it solves:** It organises code, avoids duplication, and encapsulates logic.
- **When to use:** Any time you need to perform a specific task that may be called multiple times.

**Usage example:**

```go
func add(a, b int) int {
    return a + b
}
fmt.Println(add(3, 5))
```

**Output:**

```bash
8
```

### 8.2 Multiple return values

```go
func div(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}
```

- **Definition:** Functions can return any number of values.
- **What it solves:** It enables returning both a result and an error, or multiple related values.
- **When to use:** Idiomatic error handling (result, error) or when a function naturally produces multiple outputs.

**Usage example:**

```go
result, err := div(10, 2)
if err == nil {
    fmt.Println(result)
}
```

**Output:**

```bash
5
```

### 8.3 Named return values

```go
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return   // naked return (returns x, y)
}
```

- **Definition:** Return parameters can be named and used as local variables.
- **What it solves:** It documents the meaning of returns and allows naked returns.
- **When to use:** For short functions where names clarify intent; use sparingly.

**Usage example:**

```go
a, b := split(17)
fmt.Println(a, b)
```

**Output:**

```bash
7 10
```

### 8.4 Variadic functions

```go
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}
```

- **Definition:** Variadic parameters accept zero or more arguments of the same type.
- **What it solves:** It allows functions to work with an arbitrary number of arguments.
- **When to use:** For functions like `fmt.Println` or when you don't know the number of inputs.

**Usage example:**

```go
fmt.Println(sum(1, 2, 3, 4))
```

**Output:**

```bash
10
```

### 8.5 Closures (anonymous functions)

```go
adder := func(x int) int {
    return x + 5
}
fmt.Println(adder(10))
```

- **Definition:** An anonymous function that can capture variables from its surrounding scope.
- **What it solves:** It enables functional programming patterns (callbacks, goroutines, custom sort predicates).
- **When to use:** When you need a small, one‑off function, especially inside another function or as a goroutine.

**Usage example:**

```go
mult := func(a, b int) int { return a * b }
fmt.Println(mult(3, 4))
```

**Output:**

```bash
12
```

[→ Chapter 5.1: Function declaration](/en/chapter-5-functions-methods-and-error-handling/5-1-function-declaration)  
[→ Chapter 5.2: Multiple return values](/en/chapter-5-functions-methods-and-error-handling/5-2-multiple-return-values)  
[→ Chapter 5.3: Variadic functions](/en/chapter-5-functions-methods-and-error-handling/5-3-variadic-functions)  
[→ Chapter 5.4: Closures](/en/chapter-5-functions-methods-and-error-handling/5-4-closures)

---

## 9. Methods and Receivers – All Four Forms

### Method syntax

```
func (receiver Type) MethodName(params) returnType {
    // body
}
```

- **Definition:** A method is a function with a receiver argument that attaches it to a type.
- **What it solves:** It allows object‑oriented style behaviour (attaching operations to data).
- **When to use:** When you want to associate behaviour with a custom type.

### The four receiver forms

| Form            | Syntax   | Access receiver | Modify original |
| --------------- | -------- | --------------- | --------------- |
| Named value     | `(c T)`  | Yes (copy)      | No              |
| Unnamed value   | `(T)`    | No              | No              |
| Named pointer   | `(c *T)` | Yes (original)  | Yes             |
| Unnamed pointer | `(*T)`   | No              | No (useless)    |

### Example of all four

```go
type Counter struct {
    value int
}

// 1. Named value receiver (getter)
func (c Counter) Value() int {
    return c.value
}

// 2. Unnamed value receiver (only to satisfy interface)
func (Counter) Description() string {
    return "a counter"
}

// 3. Named pointer receiver (setter)
func (c *Counter) Inc() {
    c.value++
}

// 4. Unnamed pointer receiver – pointless, shown for completeness
func (*Counter) NoOp() {}
```

- **What each solves:**
  - Named value: read‑only access, safe for concurrency.
  - Unnamed value: satisfy interfaces without needing the receiver.
  - Named pointer: modify the original struct, avoid copying large structs.
  - Unnamed pointer: rarely useful.

**Usage example:**

```go
c := Counter{value: 5}
fmt.Println(c.Value())  // 5
c.Inc()
fmt.Println(c.Value())  // 6
fmt.Println(c.Description())
```

**Output:**

```bash
5
6
a counter
```

[→ Chapter 5.5: Methods](/en/chapter-5-functions-methods-and-error-handling/5-5-methods)  
[→ Chapter 5.5.1: Receiver syntax](/en/chapter-5-functions-methods-and-error-handling/5-5-1-receiver-syntax)

---

## 10. Error Handling

### 10.1 Standard pattern

```go
result, err := doSomething()
if err != nil {
    // handle error
}
```

- **Definition:** The standard error handling pattern returns an error value alongside the result.
- **What it solves:** It makes errors explicit and forces the caller to handle them (or ignore them deliberately).
- **When to use:** Every function that can fail should return an error.

**Usage example:**

```go
f, err := os.Open("nonexistent.txt")
if err != nil {
    fmt.Println("Error:", err)
}
```

**Output:**

```bash
Error: open nonexistent.txt: no such file or directory
```

### 10.2 Creating errors

```go
err1 := errors.New("something went wrong")
err2 := fmt.Errorf("invalid value: %d", val)
```

- **Definition:** Simple error creation using `errors.New` or `fmt.Errorf`.
- **What it solves:** It provides error values with custom messages.
- **When to use:** When you need to return a simple error from a function.

**Usage example:**

```go
err := errors.New("custom error")
fmt.Println(err)
```

**Output:**

```bash
custom error
```

### 10.3 Custom error type

```go
type ValidationError struct {
    Field string
    Value interface{}
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("validation failed on %s: %v", e.Field, e.Value)
}
```

- **Definition:** A custom type implementing the `error` interface.
- **What it solves:** It allows attaching additional data and enables type assertions.
- **When to use:** When callers need to distinguish error types programmatically.

**Usage example:**

```go
func validate(age int) error {
    if age < 0 {
        return ValidationError{Field: "age", Value: age}
    }
    return nil
}
err := validate(-5)
fmt.Println(err)
```

**Output:**

```bash
validation failed on age: -5
```

[→ Chapter 5.6: Error handling](/en/chapter-5-functions-methods-and-error-handling/5-6-error-handling)  
[→ Chapter 5.7: Custom errors](/en/chapter-5-functions-methods-and-error-handling/5-7-custom-errors)

---

## 11. Structs – Declaration, Literals, Embedding

### 11.1 Struct declaration

```go
type Person struct {
    Name string
    Age  int
}
```

- **Definition:** A struct is a composite type grouping fields together.
- **What it solves:** It organises related data into a single unit.
- **When to use:** Almost always for data records (e.g., database models, configuration).

**Usage example:**

```go
p := Person{Name: "Alice", Age: 30}
fmt.Println(p.Name, p.Age)
```

**Output:**

```bash
Alice 30
```

### 11.2 Struct literal

```go
p1 := Person{"Alice", 30}               // order matters
p2 := Person{Name: "Bob", Age: 25}      // named fields (preferred)
p3 := &Person{Name: "Charlie", Age: 35} // pointer to struct
```

- **Definition:** A literal creates a struct instance with initial field values.
- **What it solves:** It provides concise initialisation.
- **When to use:** Always prefer named fields for clarity and safety; use positional only when order is obvious.

**Usage example:**

```go
p := &Person{Name: "David", Age: 40}
fmt.Println(p.Name)
```

**Output:**

```bash
David
```

### 11.3 Struct embedding (composition)

```go
type Employee struct {
    Person   // embedded (no field name)
    Salary int
}

e := Employee{Person: Person{Name: "David", Age: 40}, Salary: 50000}
fmt.Println(e.Name) // promoted field
```

- **Definition:** Embedding a struct without a field name promotes its fields and methods.
- **What it solves:** It provides composition (instead of inheritance) for code reuse.
- **When to use:** When you want to reuse fields/methods from another struct (e.g., model extension).

**Usage example:**

```go
type Employee struct {
    Person
    Salary int
}
e := Employee{Person: Person{Name: "Eve", Age: 28}, Salary: 60000}
fmt.Println(e.Name, e.Age, e.Salary)
```

**Output:**

```bash
Eve 28 60000
```

[→ Chapter 4.4: Structs](/en/chapter-4-composite-types-arrays-slices-maps-structs/4-4-structs)  
[→ Chapter 4.5: Struct embedding](/en/chapter-4-composite-types-arrays-slices-maps-structs/4-5-struct-embedding)

---

## 12. Pointers

```go
x := 42
p := &x        // p points to x
fmt.Println(*p) // dereference: 42
*p = 100       // change x through pointer
```

- **Definition:** A pointer holds the memory address of another variable.
- **What it solves:** It allows functions to modify original variables and avoids copying large data.
- **When to use:** When you need to mutate the caller’s variable, or when passing large structs.

**Usage example:**

```go
x := 10
p := &x
*p = 20
fmt.Println(x)
```

**Output:**

```bash
20
```

[→ Chapter 4.6: Pointers](/en/chapter-4-composite-types-arrays-slices-maps-structs/4-6-pointers)

---

## 13. Arrays and Slices

### 13.1 Array

```go
b := [4]int{1, 2, 3, 4}
```

- **Definition:** An array is a fixed‑length sequence of elements of the same type.
- **What it solves:** It provides contiguous, fixed‑size storage.
- **When to use:** Rarely; prefer slices unless you need the length to be part of the type (e.g., for checksums).

**Usage example:**

```go
arr := [3]string{"a", "b", "c"}
fmt.Println(arr[1])
```

**Output:**

```bash
b
```

### 13.2 Slice

```go
s := []int{1, 2, 3}
s = append(s, 4)
```

- **Definition:** A slice is a dynamically‑sized view into an array.
- **What it solves:** It provides flexible, resizable sequences.
- **When to use:** Almost always instead of arrays for lists of elements.

**Usage example:**

```go
s := []int{1, 2, 3}
s = append(s, 4)
fmt.Println(s)
```

**Output:**

```bash
[1 2 3 4]
```

### 13.3 Make for slices, maps, channels

```go
m := make(map[string]int, 10)
```

- **Definition:** `make` allocates and initialises slices, maps, or channels.
- **What it solves:** It initialises the internal data structures (e.g., map buckets, slice array).
- **When to use:** When you need to specify initial capacity (for performance) or create a channel.

**Usage example:**

```go
m := make(map[string]int, 5)
m["key"] = 42
fmt.Println(m["key"])
```

**Output:**

```bash
42
```

[→ Chapter 4.1: Arrays](/en/chapter-4-composite-types-arrays-slices-maps-structs/4-1-arrays)  
[→ Chapter 4.2: Slices](/en/chapter-4-composite-types-arrays-slices-maps-structs/4-2-slices)

---

## 14. Maps

```go
m := map[string]int{
    "a": 1,
    "b": 2,
}
value, ok := m["c"]   // ok is false if key not present
delete(m, "a")
```

- **Definition:** A map is an unordered collection of key‑value pairs.
- **What it solves:** It provides fast lookups, insertions, and deletions by key.
- **When to use:** When you need to associate values with unique keys (e.g., cache, dictionary).

**Usage example:**

```go
m := map[string]int{"apple": 5, "banana": 3}
if val, ok := m["apple"]; ok {
    fmt.Println(val)
}
delete(m, "banana")
fmt.Println(m)
```

**Output:**

```bash
5
map[apple:5]
```

[→ Chapter 4.3: Maps](/en/chapter-4-composite-types-arrays-slices-maps-structs/4-3-maps)

---

## 15. Interfaces

### 15.1 Interface declaration

```go
type Greeter interface {
    Greet() string
}
```

- **Definition:** An interface defines a set of method signatures.
- **What it solves:** It enables polymorphism: a function can accept any type that implements the required methods.
- **When to use:** When you want to decouple code from concrete types (e.g., testing with mocks, pluggable designs).

### 15.2 Implementing an interface (implicit)

```go
type Dog struct{}

func (d Dog) Greet() string {
    return "Woof!"
}
```

- **Definition:** A type implements an interface simply by having all the required methods (no `implements` keyword).
- **What it solves:** It allows retroactive interface satisfaction and reduces coupling.
- **When to use:** Always; it's the idiomatic Go way.

**Usage example:**

```go
var g Greeter = Dog{}
fmt.Println(g.Greet())
```

**Output:**

```bash
Woof!
```

### 15.3 Empty interface (`any`)

```go
var anything interface{}  // or 'any' (Go 1.18+)
anything = 42
anything = "hello"
```

- **Definition:** An interface with zero methods; every type implements it.
- **What it solves:** It allows storing values of any type (like `void*` in C or `Object` in Java).
- **When to use:** For containers that must hold arbitrary types (e.g., `json.Unmarshal`, `fmt.Println`).

**Usage example:**

```go
var x any = 3.14
fmt.Println(x)
```

**Output:**

```bash
3.14
```

### 15.4 Type assertion

```go
var i interface{} = "hello"
s := i.(string)        // assertion (panics if wrong)
s, ok := i.(string)    // safe assertion
```

- **Definition:** Type assertion extracts the concrete value from an interface.
- **What it solves:** It allows switching from interface back to concrete type.
- **When to use:** When you need to perform type‑specific operations on an interface value.

**Usage example:**

```go
var i interface{} = 42
v, ok := i.(int)
fmt.Println(v, ok)
v2, ok := i.(string)
fmt.Println(v2, ok)
```

**Output:**

```bash
42 true
 false
```

### 15.5 Type switch

```go
switch v := i.(type) {
case int:
    fmt.Println("int:", v)
case string:
    fmt.Println("string:", v)
default:
    fmt.Println("unknown")
}
```

- **Definition:** A type switch branches based on the concrete type of an interface.
- **What it solves:** It provides a cleaner way to handle multiple possible types.
- **When to use:** When you have an interface that could hold several different concrete types.

**Usage example:**

```go
func describe(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Println("int:", v)
    case string:
        fmt.Println("string:", v)
    default:
        fmt.Println("unknown")
    }
}
describe(42)
describe("hello")
```

**Output:**

```bash
int: 42
string: hello
```

[→ Chapter 7.1: Interface declaration](/en/chapter-7-interfaces-and-polymorphism/7-1-interface-declaration)  
[→ Chapter 7.2: The empty interface](/en/chapter-7-interfaces-and-polymorphism/7-2-the-empty-interface)

---

## 16. Generics (Go 1.18+)

### 16.1 Generic function

```go
func Identity[T any](x T) T {
    return x
}
```

- **Definition:** A generic function can work with any type specified by a type parameter.
- **What it solves:** It eliminates code duplication for algorithms that are type‑agnostic.
- **When to use:** When you would otherwise write nearly identical functions for different types.

**Usage example:**

```go
fmt.Println(Identity(42))
fmt.Println(Identity("hello"))
```

**Output:**

```bash
42
hello
```

### 16.2 Generic type

```go
type Stack[T any] struct {
    items []T
}

func (s *Stack[T]) Push(v T) {
    s.items = append(s.items, v)
}
```

- **Definition:** A generic type can have type parameters for its fields and methods.
- **What it solves:** It allows creating data structures that work with any element type.
- **When to use:** For collections like stacks, queues, or any container that should be type‑safe.

**Usage example:**

```go
s := Stack[int]{}
s.Push(10)
fmt.Println(s.items)
```

**Output:**

```bash
[10]
```

[→ Chapter 8.1: Type parameters](/en/chapter-8-generics/8-1-type-parameters)

---

## 17. Concurrency – Goroutines and Channels

### 17.1 Goroutine

```go
go func() {
    fmt.Println("running concurrently")
}()
```

- **Definition:** A goroutine is a lightweight thread managed by the Go runtime.
- **What it solves:** It enables concurrent execution without heavy OS threads.
- **When to use:** For any concurrent task (e.g., handling requests, background work).

**Usage example:**

```go
go func() {
    fmt.Println("goroutine")
}()
time.Sleep(10 * time.Millisecond) // allow goroutine to finish
```

**Output:**

```bash
goroutine
```

### 17.2 Unbuffered channel

```go
ch := make(chan int)
go func() { ch <- 42 }()
value := <-ch
```

- **Definition:** An unbuffered channel synchronises send and receive operations.
- **What it solves:** It provides a communication mechanism that also synchronises goroutines.
- **When to use:** When you need to pass data and also ensure hand‑off (e.g., signalling).

**Usage example:**

```go
ch := make(chan int)
go func() { ch <- 100 }()
fmt.Println(<-ch)
```

**Output:**

```bash
100
```

### 17.3 Buffered channel

```go
ch := make(chan int, 2)
ch <- 1
ch <- 2
```

- **Definition:** A buffered channel has a capacity; sends block only when full.
- **What it solves:** It reduces blocking and can act as a queue.
- **When to use:** When you want to decouple producer and consumer rates (e.g., request queue).

**Usage example:**

```go
ch := make(chan int, 2)
ch <- 1
ch <- 2
fmt.Println(<-ch)
fmt.Println(<-ch)
```

**Output:**

```bash
1
2
```

### 17.4 Channel directions

```go
func send(ch chan<- int) { ch <- 42 }   // send‑only
func receive(ch <-chan int) { <-ch }    // receive‑only
```

- **Definition:** Channel directions restrict operations (send or receive only).
- **What it solves:** It enforces correct usage at compile time (e.g., a function that only sends).
- **When to use:** In function signatures to document and enforce channel usage.

### 17.5 Select statement

```go
select {
case v := <-ch1:
    fmt.Println(v)
case ch2 <- 100:
    fmt.Println("sent")
default:
    fmt.Println("no activity")
}
```

- **Definition:** `select` waits on multiple channel operations.
- **What it solves:** It allows multiplexing channels (like a channel‑based `switch`).
- **When to use:** When you need to handle multiple channels simultaneously (e.g., timeouts, cancellations).

**Usage example:**

```go
ch1 := make(chan int)
ch2 := make(chan int)
go func() { ch1 <- 42 }()
select {
case v := <-ch1:
    fmt.Println("from ch1:", v)
case <-ch2:
    fmt.Println("from ch2")
}
```

**Output:**

```bash
from ch1: 42
```

### 17.6 Closing channels and range

```go
close(ch)
for v := range ch {
    // reads until channel closed
}
```

- **Definition:** `close` indicates no more sends; `range` reads until close.
- **What it solves:** It signals completion to receivers.
- **When to use:** To tell a receiver that no more values are coming (e.g., producer‑consumer).

**Usage example:**

```go
ch := make(chan int, 3)
ch <- 1
ch <- 2
close(ch)
for v := range ch {
    fmt.Println(v)
}
```

**Output:**

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
    // work
}()
wg.Wait()
```

- **Definition:** WaitGroup waits for a collection of goroutines to finish.
- **What it solves:** It provides a simple counter to synchronise completion.
- **When to use:** When you have multiple goroutines and need to wait for all to finish.

**Usage example:**

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

**Output (order may vary):**

```bash
2
0
1
```

### 17.8 Mutex

```go
var mu sync.Mutex
mu.Lock()
// critical section
mu.Unlock()
```

- **Definition:** A mutex provides mutual exclusion to protect shared data.
- **What it solves:** It prevents data races when multiple goroutines access shared memory.
- **When to use:** When you have shared variables that are written by multiple goroutines.

**Usage example:**

```go
var mu sync.Mutex
var counter int
for i := 0; i < 1000; i++ {
    go func() {
        mu.Lock()
        counter++
        mu.Unlock()
    }()
}
time.Sleep(100 * time.Millisecond)
fmt.Println(counter)
```

**Output (approximately 1000):**

```bash
1000
```

[→ Chapter 9.1: Goroutines](/en/chapter-9-concurrency-goroutines-channels-and-context/9-1-goroutines)  
[→ Chapter 9.2: Channels](/en/chapter-9-concurrency-goroutines-channels-and-context/9-2-channels)  
[→ Chapter 9.14: WaitGroups](/en/chapter-9-concurrency-goroutines-channels-and-context/9-14-waitgroups)  
[→ Chapter 9.17: Mutexes](/en/chapter-9-concurrency-goroutines-channels-and-context/9-17-mutexes)

---

## 18. Additional Syntax Elements

### 18.1 `new` built‑in

```go
p := new(int)   // p is *int, zeroed
*p = 42
```

- **Definition:** `new` allocates zeroed memory for a type and returns a pointer.
- **What it solves:** It provides a way to create a pointer to a zeroed value.
- **When to use:** When you need a pointer to a zero value, but `&T{}` is more common.

**Usage example:**

```go
p := new(int)
fmt.Println(*p) // 0
*p = 100
fmt.Println(*p) // 100
```

**Output:**

```bash
0
100
```

### 18.2 `make` vs `new`

- `make` is only for slices, maps, channels; returns initialised (not zeroed) value.
- `new` works for any type; returns zeroed pointer.

### 18.3 `len`, `cap`, `append`, `copy`

```go
s := []int{1, 2, 3}
l := len(s)      // 3
c := cap(s)      // 3
s = append(s, 4)
copy(s2, s)      // copies elements
```

- **Definition:** Built‑ins for slice operations.
- **What they solve:** They provide efficient slice management.
- **When to use:** `len` and `cap` for length/capacity; `append` to grow; `copy` to duplicate.

**Usage example:**

```go
s1 := []int{1, 2}
s2 := make([]int, 2)
copy(s2, s1)
fmt.Println(s2)
```

**Output:**

```bash
[1 2]
```

### 18.4 `defer` order (LIFO)

```go
defer fmt.Println("first")
defer fmt.Println("second")
```

- **Definition:** Deferred calls are executed in LIFO (last‑in‑first‑out) order.
- **What it solves:** It ensures resources are cleaned up in reverse order of acquisition.
- **When to use:** Natural when you defer multiple close/unlock calls.

**Output:**

```bash
second
first
```

### 18.5 Fallthrough in switch

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

- **Definition:** `fallthrough` forces execution into the next case.
- **What it solves:** It provides C‑style switch behaviour when needed.
- **When to use:** Rarely; only when you explicitly want to execute multiple consecutive cases.

**Output:**

```bash
2
3
```

### 18.6 Blank identifier in multiple returns

```go
_, err := os.Open("file.txt") // ignore the file handle
```

- **Definition:** `_` discards a return value.
- **What it solves:** It silences compiler warnings about unused variables.
- **When to use:** When you need only some of the return values.

### 18.7 Label and `goto`

```go
loop:
for i := 0; i < 10; i++ {
    if i == 5 {
        break loop
    }
}
```

- **Definition:** Labels mark a statement; `goto` jumps to a label.
- **What it solves:** Labels allow breaking/continuing outer loops; `goto` can simplify error handling.
- **When to use:** Use labels for breaking nested loops; `goto` sparingly (e.g., centralised cleanup).

**Usage example (goto):**

```go
i := 0
start:
if i < 3 {
    fmt.Println(i)
    i++
    goto start
}
```

**Output:**

```bash
0
1
2
```

### 18.8 Type conversion vs assertion

- **Conversion:** `int(3.14)` works between compatible types.
- **Assertion:** `i.(string)` works only on interface values.

### 18.9 Embedded interfaces

```go
type Reader interface { Read(p []byte) (n int, err error) }
type Writer interface { Write(p []byte) (n int, err error) }
type ReadWriter interface {
    Reader
    Writer
}
```

- **Definition:** An interface can embed other interfaces.
- **What it solves:** It composes interfaces without repeating method signatures.
- **When to use:** When building larger interfaces from smaller ones (e.g., `io.ReadWriter`).

---

## 19. Summary Table of Key Syntax

| Concept               | Syntax example                                           |
| --------------------- | -------------------------------------------------------- |
| Package               | `package main`                                           |
| Import                | `import "fmt"`                                           |
| Variable (full)       | `var x int = 42`                                         |
| Short variable        | `y := 10`                                                |
| Constant              | `const Pi = 3.14`                                        |
| Iota                  | `const ( A = iota )`                                     |
| Function              | `func add(a, b int) int { return a+b }`                  |
| Multiple returns      | `func div(a,b int) (int, error) { ... }`                 |
| Variadic              | `func sum(nums ...int) int { ... }`                      |
| Method (value recv)   | `func (c Counter) Value() int { return c.value }`        |
| Method (pointer recv) | `func (c *Counter) Inc() { c.value++ }`                  |
| Unnamed receiver      | `func (Counter) Desc() string { ... }`                   |
| Error creation        | `errors.New("msg")` or `fmt.Errorf("%s", msg)`           |
| Defer                 | `defer f.Close()`                                        |
| Panic/recover         | `defer func() { if r := recover(); r != nil { ... } }()` |
| Struct literal        | `p := Person{Name: "Alice", Age: 30}`                    |
| Pointer               | `p := &x`, `*p`                                          |
| Array                 | `arr := [3]int{1,2,3}`                                   |
| Slice                 | `s := []int{1,2,3}`; `append(s, 4)`                      |
| Map                   | `m := map[string]int{"a":1}`                             |
| Interface             | `type Greeter interface { Greet() string }`              |
| Empty interface       | `var x interface{}` or `var x any`                       |
| Type assertion        | `v, ok := i.(string)`                                    |
| Type switch           | `switch v := i.(type) { ... }`                           |
| Generic function      | `func Identity[T any](x T) T { return x }`               |
| Generic type          | `type Stack[T any] struct { items []T }`                 |
| Goroutine             | `go myFunc()`                                            |
| Unbuffered channel    | `ch := make(chan int)`; `ch <- 42`; `v := <-ch`          |
| Buffered channel      | `ch := make(chan int, 2)`                                |
| Channel direction     | `func send(ch chan<- int)`                               |
| Select                | `select { case v := <-ch: ... }`                         |
| Close channel         | `close(ch)`                                              |
| Range over channel    | `for v := range ch { ... }`                              |
| WaitGroup             | `wg.Add(1); defer wg.Done(); wg.Wait()`                  |
| Mutex                 | `mu.Lock(); defer mu.Unlock()`                           |
| new                   | `p := new(int)`                                          |
| make                  | `m := make(map[string]int, 10)`                          |
| len/cap               | `len(slice)`, `cap(slice)`                               |
| append/copy           | `s = append(s, 1)`; `copy(dst, src)`                     |
| fallthrough           | `case 2: fmt.Println("2"); fallthrough`                  |
| Blank identifier      | `_, err := do()`                                         |
| goto / label          | `start: ... goto start`                                  |

---

This document covers the essential syntax you will use daily in Go, including detailed explanations of what each construct solves and when to use it. For deeper examples and projects, refer to the individual chapter files linked throughout. If a chapter is not yet written, the link serves as a placeholder for future content.
