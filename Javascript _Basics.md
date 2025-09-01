# JavaScript Fundamentals - Complete Beginner's Guide

## Table of Contents
1. [What is JavaScript?](#1-what-is-javascript)
2. [Basic Syntax - Variables](#2-basic-syntax---variables)
3. [Data Types](#3-data-types)
4. [Basic Operations](#4-basic-operations)
5. [Functions](#5-functions)
6. [Conditional Statements](#6-conditional-statements)
7. [Loops](#7-loops)
8. [Your First Complete Example](#8-your-first-complete-example)
9. [Arrays - Working with Lists](#9-arrays---working-with-lists)
10. [Objects - Structured Data](#10-objects---structured-data)
11. [Practice Exercise](#practice-exercise)

---

## 1. What is JavaScript?

JavaScript is a powerful programming language that serves as the backbone of modern web development. Here's what makes it essential:

### Core Characteristics
- **🌐 Client-Side Execution:** Runs directly in web browsers
- **🖥️ Server-Side Capability:** Can run on servers using Node.js
- **⚡ Interactive Web Pages:** Makes websites dynamic and responsive
- **🚀 Modern Web Development:** Essential skill for frontend and fullstack development

### Why Learn JavaScript?
JavaScript is the only programming language that runs natively in web browsers, making it indispensable for web development. It powers everything from simple form validations to complex web applications.

---

## 2. Basic Syntax - Variables

Variables are containers that store data values. JavaScript offers three ways to declare variables, each with different behaviors:

### Variable Declaration Methods

```javascript
// ❌ Old way (avoid in modern JavaScript)
var oldVariable = "value";

// ✅ Modern ways (recommended)
let changeableValue = "can be changed";
const constantValue = "cannot be changed";
```

### Practical Example

```javascript
let name = "Alice";        // Can be reassigned
const age = 25;           // Cannot be reassigned
```

### Key Differences

| Declaration | Reassignable | Block Scoped | Best Use Case |
|-------------|--------------|--------------|---------------|
| `let` | ✅ Yes | ✅ Yes | Values that change |
| `const` | ❌ No | ✅ Yes | Constants and objects |
| `var` | ✅ Yes | ❌ No | **Avoid** (legacy) |

---

## 3. Data Types

JavaScript is a dynamically typed language with several fundamental data types:

### Primitive Data Types

```javascript
// String - text data
let message = "Hello World!";
let singleQuotes = 'Also valid';
let templateLiteral = `Hello ${name}!`; // Template strings

// Number - integers and decimals
let count = 10;
let price = 19.99;
let negative = -5;

// Boolean - true or false
let isActive = true;
let isComplete = false;

// Undefined - declared but not assigned
let notAssignedYet;
console.log(notAssignedYet); // undefined

// Null - intentionally empty value
let emptyValue = null;
```

### Complex Data Types

```javascript
// Object - key-value pairs
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Array - ordered list of values
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true, null];
```

### Type Checking

```javascript
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (known quirk!)
console.log(typeof []);         // "object"
console.log(typeof {});         // "object"
```

---

## 4. Basic Operations

### Arithmetic Operations

```javascript
// Basic arithmetic
let sum = 5 + 3;           // 8 - Addition
let difference = 10 - 4;   // 6 - Subtraction
let product = 2 * 6;       // 12 - Multiplication
let quotient = 20 / 4;     // 5 - Division
let remainder = 10 % 3;    // 1 - Modulo (remainder)
let power = 2 ** 3;        // 8 - Exponentiation

// Increment and decrement
let counter = 5;
counter++;                 // 6 - Post-increment
++counter;                 // 7 - Pre-increment
counter--;                 // 6 - Post-decrement
```

### String Operations

```javascript
// String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// Template literals (modern approach)
let greeting = `Hello, ${firstName} ${lastName}!`; // "Hello, John Doe!"

// String methods
let text = "JavaScript";
console.log(text.length);           // 10
console.log(text.toUpperCase());    // "JAVASCRIPT"
console.log(text.toLowerCase());    // "javascript"
console.log(text.substring(0, 4));  // "Java"
```

### Comparison Operations

```javascript
// Equality
let isEqual = 5 == "5";         // true (loose equality - converts types)
let isStrictEqual = 5 === "5";  // false (strict equality - no conversion)

// Inequality
let isNotEqual = 5 != "6";      // true
let isStrictNotEqual = 5 !== "5"; // true

// Relational
let isGreater = 10 > 5;         // true
let isLessOrEqual = 5 <= 5;     // true
```

### Logical Operations

```javascript
let andResult = true && false;   // false - AND (both must be true)
let orResult = true || false;    // true - OR (at least one must be true)
let notResult = !true;           // false - NOT (inverts the value)

// Practical example
let age = 25;
let hasLicense = true;
let canDrive = age >= 18 && hasLicense; // true
```

---

## 5. Functions

Functions are reusable blocks of code that perform specific tasks. They are fundamental to JavaScript programming.

### Function Declaration

```javascript
// Traditional function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function call
let message = greet("Alice"); // "Hello, Alice!"
console.log(message);
```

### Function Expression

```javascript
// Function stored in a variable
const sayGoodbye = function(name) {
    return "Goodbye, " + name + "!";
};

let farewell = sayGoodbye("Bob"); // "Goodbye, Bob!"
```

### Arrow Functions (Modern ES6+ Syntax)

```javascript
// Arrow function with block body
const multiply = (a, b) => {
    return a * b;
};

// Arrow function with implicit return (one line)
const multiplyShort = (a, b) => a * b;

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters
const getCurrentTime = () => new Date().toLocaleTimeString();
```

### Function Parameters and Default Values

```javascript
// Function with default parameters
function introduce(name = "Anonymous", age = 0) {
    return `Hi, I'm ${name} and I'm ${age} years old.`;
}

console.log(introduce());                    // "Hi, I'm Anonymous and I'm 0 years old."
console.log(introduce("Sarah"));             // "Hi, I'm Sarah and I'm 0 years old."
console.log(introduce("John", 30));          // "Hi, I'm John and I'm 30 years old."
```

---

## 6. Conditional Statements

Conditional statements allow your program to make decisions based on different conditions.

### If-Else Statement

```javascript
let age = 18;

// Basic if-else
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

### Multiple Conditions (else-if)

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
```

### Switch Statement

```javascript
let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Midweek grind!");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}
```

### Ternary Operator (Conditional Operator)

```javascript
// Shorthand for simple if-else
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Can be chained
let temperature = 75;
let weather = temperature > 80 ? "hot" : temperature > 60 ? "warm" : "cold";
```

---

## 7. Loops

Loops allow you to execute code repeatedly based on a condition.

### For Loop

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log("Count: " + i);
}
// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4

// Looping through an array
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
```

### While Loop

```javascript
let count = 0;
while (count < 3) {
    console.log("While count: " + count);
    count++; // Important: increment to avoid infinite loop
}
// Output: While count: 0, While count: 1, While count: 2
```

### Do-While Loop

```javascript
let number = 1;
do {
    console.log("Number: " + number);
    number++;
} while (number <= 3);
// Executes at least once, even if condition is initially false
```

### Modern Loop Methods (ES6+)

```javascript
let colors = ["red", "green", "blue"];

// For...of loop (for arrays)
for (let color of colors) {
    console.log("Color: " + color);
}

// For...in loop (for object properties)
let person = { name: "Alice", age: 30, city: "Boston" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Array.forEach method
colors.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});
```

---

## 8. Your First Complete Example

Let's combine everything we've learned into a practical example:

```javascript
/**
 * Rectangle Calculator
 * Demonstrates variables, functions, conditionals, and output
 */

// Function to calculate rectangle area
function calculateArea(width, height) {
    // Validate input
    if (width <= 0 || height <= 0) {
        return "Error: Width and height must be positive numbers";
    }
    
    return width * height;
}

// Function to calculate rectangle perimeter
function calculatePerimeter(width, height) {
    return 2 * (width + height);
}

// Function to categorize rectangle size
function categorizeSize(area) {
    if (area > 100) {
        return "large";
    } else if (area > 50) {
        return "medium";
    } else {
        return "small";
    }
}

// Main program
function analyzeRectangle(width, height) {
    console.log("=== Rectangle Analysis ===");
    console.log(`Dimensions: ${width} × ${height}`);
    
    // Calculate properties
    const area = calculateArea(width, height);
    const perimeter = calculatePerimeter(width, height);
    const size = categorizeSize(area);
    
    // Display results
    console.log(`Area: ${area} square units`);
    console.log(`Perimeter: ${perimeter} units`);
    console.log(`Size category: ${size}`);
    
    // Conditional message
    if (area > 50) {
        console.log("💡 Tip: This is a spacious rectangle!");
    } else {
        console.log("💡 Tip: This is a compact rectangle.");
    }
}

// Example usage
analyzeRectangle(10, 5);
analyzeRectangle(3, 4);
analyzeRectangle(15, 8);
```

**Expected Output:**
```
=== Rectangle Analysis ===
Dimensions: 10 × 5
Area: 50 square units
Perimeter: 30 units
Size category: small
💡 Tip: This is a compact rectangle.
```

---

## 9. Arrays - Working with Lists

Arrays are ordered collections that store multiple values in a single variable. They're perfect for managing lists of related data like shopping items, user names, or numerical datasets.

### Creating Arrays

```javascript
// Different ways to create arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixedArray = ["text", 42, true, null];
let emptyArray = [];

// Using Array constructor
let anotherArray = new Array("red", "green", "blue");
```

### Accessing Array Elements

```javascript
let fruits = ["apple", "banana", "orange", "grape"];

// Arrays are zero-indexed (first element is at index 0)
console.log(fruits[0]);    // "apple"
console.log(fruits[1]);    // "banana"
console.log(fruits[2]);    // "orange"
console.log(fruits[-1]);   // undefined (negative indices don't work)

// Get the last element
console.log(fruits[fruits.length - 1]); // "grape"

// Array length
console.log(fruits.length); // 4
```

### Essential Array Methods

#### Adding and Removing Elements

```javascript
let fruits = ["apple", "banana", "orange"];

// Add to the end
fruits.push("grape");           // ["apple", "banana", "orange", "grape"]
fruits.push("kiwi", "mango");   // Can add multiple items

// Remove from the end
let removedFruit = fruits.pop(); // Returns "mango", array becomes shorter

// Add to the beginning
fruits.unshift("strawberry");   // ["strawberry", "apple", "banana", "orange", "grape", "kiwi"]

// Remove from the beginning
let firstFruit = fruits.shift(); // Returns "strawberry"

console.log(fruits); // ["apple", "banana", "orange", "grape", "kiwi"]
```

#### Finding Elements

```javascript
let fruits = ["apple", "banana", "orange", "banana"];

// Check if element exists
let hasApple = fruits.includes("apple");     // true
let hasGrape = fruits.includes("grape");     // false

// Find index of element
let bananaIndex = fruits.indexOf("banana");  // 1 (first occurrence)
let lastBanana = fruits.lastIndexOf("banana"); // 3 (last occurrence)

// Find element that matches condition
let longFruit = fruits.find(fruit => fruit.length > 5);  // "banana"
let longFruitIndex = fruits.findIndex(fruit => fruit.length > 5); // 1
```

### Looping Through Arrays

```javascript
let colors = ["red", "green", "blue"];

// Traditional for loop
for (let i = 0; i < colors.length; i++) {
    console.log(`Color ${i + 1}: ${colors[i]}`);
}

// For...of loop (modern and clean)
for (let color of colors) {
    console.log(`I like ${color}`);
}

// forEach method (functional approach)
colors.forEach(function(color, index) {
    console.log(`${index}: ${color}`);
});

// Arrow function version (most modern)
colors.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});
```

### Advanced Array Methods

```javascript
let numbers = [1, 2, 3, 4, 5];

// Transform each element (map)
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter elements based on condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Reduce array to single value
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// Check if any/all elements meet condition
let hasEven = numbers.some(num => num % 2 === 0);     // true
let allPositive = numbers.every(num => num > 0);      // true
```

### Array Manipulation

```javascript
let fruits = ["apple", "banana", "orange", "grape"];

// Slice (extract portion without modifying original)
let citrus = fruits.slice(1, 3);  // ["banana", "orange"]
console.log(fruits); // Original unchanged

// Splice (modify original array)
fruits.splice(1, 2, "kiwi", "mango"); // Remove 2 items at index 1, add "kiwi", "mango"
console.log(fruits); // ["apple", "kiwi", "mango", "grape"]

// Join array into string
let fruitString = fruits.join(", "); // "apple, kiwi, mango, grape"

// Sort array
let sortedFruits = fruits.sort(); // Alphabetical order
let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort((a, b) => a - b);    // Numerical order: [1, 1, 3, 4, 5, 9]
```

---

## 10. Objects - Structured Data

Objects are collections of key-value pairs that represent real-world entities. They're perfect for modeling complex data like users, products, or configurations.

### Creating Objects

```javascript
// Object literal syntax (most common)
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "swimming", "coding"]
};

// Empty object
let emptyObj = {};

// Using Object constructor
let anotherPerson = new Object();
anotherPerson.name = "Alice";
anotherPerson.age = 25;
```

### Accessing Object Properties

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    "favorite-color": "blue"  // Note: property name with dash
};

// Dot notation (preferred for simple property names)
console.log(person.firstName); // "John"
console.log(person.age);       // 30

// Bracket notation (required for complex property names or variables)
console.log(person["lastName"]);        // "Doe"
console.log(person["favorite-color"]);  // "blue"

// Using variables
let property = "firstName";
console.log(person[property]); // "John"
```

### Object Methods

```javascript
let calculator = {
    // Properties
    brand: "Scientific Calculator",
    model: "SC-2000",
    
    // Methods (functions inside objects)
    add: function(a, b) {
        return a + b;
    },
    
    // Modern method syntax (ES6+)
    subtract(a, b) {
        return a - b;
    },
    
    // Arrow functions as methods
    multiply: (a, b) => a * b,
    
    // Method using 'this' keyword
    getInfo: function() {
        return `${this.brand} - ${this.model}`;
    }
};

// Calling methods
console.log(calculator.add(5, 3));        // 8
console.log(calculator.subtract(10, 4));  // 6
console.log(calculator.getInfo());        // "Scientific Calculator - SC-2000"
```

### The 'this' Keyword

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    
    // Method using 'this' to access object properties
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    
    introduce: function() {
        return `Hi, I'm ${this.firstName} and I'm ${this.age} years old.`;
    },
    
    haveBirthday: function() {
        this.age++;  // Modify object property
        return `Happy birthday! Now I'm ${this.age}.`;
    }
};

console.log(person.getFullName()); // "John Doe"
console.log(person.introduce());   // "Hi, I'm John and I'm 30 years old."
console.log(person.haveBirthday()); // "Happy birthday! Now I'm 31."
```

### Adding, Modifying, and Deleting Properties

```javascript
let person = {
    firstName: "John",
    lastName: "Doe"
};

// Adding new properties
person.email = "john@example.com";
person["phone"] = "555-1234";
person.address = {
    street: "123 Main St",
    city: "Boston",
    state: "MA"
};

// Modifying existing properties
person.firstName = "Jonathan";
person.age = 31;

// Deleting properties
delete person.phone;

console.log(person);
```

### Object Destructuring (Modern ES6+ Feature)

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    address: {
        city: "Boston",
        state: "MA"
    }
};

// Extract properties into variables
const { firstName, age, email } = person;
console.log(firstName); // "John"
console.log(age);      // 30

// Rename while destructuring
const { firstName: name, age: years } = person;
console.log(name);     // "John"
console.log(years);    // 30

// Default values
const { firstName, country = "USA" } = person;
console.log(country);  // "USA" (default value)

// Nested destructuring
const { address: { city, state } } = person;
console.log(city);     // "Boston"
```

### Object.keys(), Object.values(), and Object.entries()

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Get all property names
let keys = Object.keys(person);
console.log(keys); // ["firstName", "lastName", "age"]

// Get all property values
let values = Object.values(person);
console.log(values); // ["John", "Doe", 30]

// Get key-value pairs
let entries = Object.entries(person);
console.log(entries); // [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]

// Useful for looping through objects
for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
```

### Nested Objects and Arrays

```javascript
let company = {
    name: "Tech Solutions Inc.",
    founded: 2010,
    employees: [
        {
            name: "Alice Johnson",
            position: "Developer",
            skills: ["JavaScript", "Python", "Reacte";
    } else if (area > 50) {
        return "medium";
    } else {
        return "small";
    }
}

// Main program
function analyzeRectangle(width, height) {
    console.log("=== Rectangle Analysis ===");
    console.log(`Dimensions: ${width} × ${height}`);
    
    // Calculate properties
    const area = calculateArea(width, height);
    const perimeter = calculatePerimeter(width, height);
    const size = categorizeSize(area);
    
    // Display results
    console.log(`Area: ${area} square units`);
    console.log(`Perimeter: ${perimeter} units`);
    console.log(`Size category: ${size}`);
    
    // Conditional message
    if (area > 50) {
        console.log("💡 Tip: This is a spacious rectangle!");
    } else {
        console.log("💡 Tip: This is a compact rectangle.");
    }
}

// Example usage
analyzeRectangle(10, 5);
analyzeRectangle(3, 4);
analyzeRectangle(15, 8);
```

**Expected Output:**
```
=== Rectangle Analysis ===
Dimensions: 10 × 5
Area: 50 square units
Perimeter: 30 units
Size category: small
💡 Tip: This is a compact rectangle.
```

---

## Practice Exercise

Now it's your turn! Here's a coding challenge to reinforce what you've learned:

### 🎯 Temperature Converter Challenge

**Task:** Write a function that converts temperatures between Celsius and Fahrenheit.

**Requirements:**
1. Create a function that takes a temperature in Celsius
2. Convert it to Fahrenheit using the formula: `F = C × 9/5 + 32`
3. Return a formatted message like "25°C is 77°F"
4. Add conditional messages for temperature ranges

### Solution Template

```javascript
function convertTemperature(celsius) {
    // Your code here
    // 1. Convert celsius to fahrenheit
    // 2. Create a formatted message
    // 3. Add conditional temperature descriptions
    // 4. Return the complete message
}

// Test your function
console.log(convertTemperature(0));    // Should show freezing point
console.log(convertTemperature(25));   // Should show room temperature
console.log(convertTemperature(100));  // Should show boiling point
```

### Bonus Challenges
1. **Reverse Converter:** Create a function that converts Fahrenheit to Celsius
2. **Temperature Classifier:** Add descriptions like "freezing", "cold", "warm", "hot"
3. **Input Validation:** Handle invalid inputs gracefully
4. **Multiple Scales:** Add Kelvin conversion support

### Expected Behavior
```javascript
// Example output
"0°C is 32°F - Freezing point of water!"
"25°C is 77°F - Perfect room temperature"
"100°C is 212°F - Boiling point of water!"
```

---

## Next Steps

Congratulations! You've learned the fundamental building blocks of JavaScript. Here's what to explore next:

### Immediate Next Topics
- **DOM Manipulation:** Interacting with HTML elements
- **Event Handling:** Responding to user interactions
- **Arrays & Objects:** Advanced data manipulation
- **Asynchronous Programming:** Promises and async/await

### Learning Path
1. Practice these fundamentals daily
2. Build small projects (calculator, to-do list, etc.)
3. Learn about the Document Object Model (DOM)
4. Explore modern JavaScript features (ES6+)
5. Start building interactive web pages

### Resources for Continued Learning
- **Practice:** Build small projects regularly
- **Documentation:** MDN Web Docs (Mozilla Developer Network)
- **Online Platforms:** FreeCodeCamp, Codecademy, JavaScript.info
- **Projects:** Start with simple calculators, then move to interactive games

Remember: The best way to learn programming is by doing. Start coding today! 🚀- **🖥️ Server-Side Capability:** Can run on servers using Node.js
- **⚡ Interactive Web Pages:** Makes websites dynamic and responsive
- **🚀 Modern Web Development:** Essential skill for frontend and fullstack development

### Why Learn JavaScript?
JavaScript is the only programming language that runs natively in web browsers, making it indispensable for web development. It powers everything from simple form validations to complex web applications.

---

## 2. Basic Syntax - Variables

Variables are containers that store data values. JavaScript offers three ways to declare variables, each with different behaviors:

### Variable Declaration Methods

```javascript
// ❌ Old way (avoid in modern JavaScript)
var oldVariable = "value";

// ✅ Modern ways (recommended)
let changeableValue = "can be changed";
const constantValue = "cannot be changed";
```

### Practical Example

```javascript
let name = "Alice";        // Can be reassigned
const age = 25;           // Cannot be reassigned
```

### Key Differences

| Declaration | Reassignable | Block Scoped | Best Use Case |
|-------------|--------------|--------------|---------------|
| `let` | ✅ Yes | ✅ Yes | Values that change |
| `const` | ❌ No | ✅ Yes | Constants and objects |
| `var` | ✅ Yes | ❌ No | **Avoid** (legacy) |

---

## 3. Data Types

JavaScript is a dynamically typed language with several fundamental data types:

### Primitive Data Types

```javascript
// String - text data
let message = "Hello World!";
let singleQuotes = 'Also valid';
let templateLiteral = `Hello ${name}!`; // Template strings

// Number - integers and decimals
let count = 10;
let price = 19.99;
let negative = -5;

// Boolean - true or false
let isActive = true;
let isComplete = false;

// Undefined - declared but not assigned
let notAssignedYet;
console.log(notAssignedYet); // undefined

// Null - intentionally empty value
let emptyValue = null;
```

### Complex Data Types

```javascript
// Object - key-value pairs
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Array - ordered list of values
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true, null];
```

### Type Checking

```javascript
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (known quirk!)
console.log(typeof []);         // "object"
console.log(typeof {});         // "object"
```

---

## 4. Basic Operations

### Arithmetic Operations

```javascript
// Basic arithmetic
let sum = 5 + 3;           // 8 - Addition
let difference = 10 - 4;   // 6 - Subtraction
let product = 2 * 6;       // 12 - Multiplication
let quotient = 20 / 4;     // 5 - Division
let remainder = 10 % 3;    // 1 - Modulo (remainder)
let power = 2 ** 3;        // 8 - Exponentiation

// Increment and decrement
let counter = 5;
counter++;                 // 6 - Post-increment
++counter;                 // 7 - Pre-increment
counter--;                 // 6 - Post-decrement
```

### String Operations

```javascript
// String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// Template literals (modern approach)
let greeting = `Hello, ${firstName} ${lastName}!`; // "Hello, John Doe!"

// String methods
let text = "JavaScript";
console.log(text.length);           // 10
console.log(text.toUpperCase());    // "JAVASCRIPT"
console.log(text.toLowerCase());    // "javascript"
console.log(text.substring(0, 4));  // "Java"
```

### Comparison Operations

```javascript
// Equality
let isEqual = 5 == "5";         // true (loose equality - converts types)
let isStrictEqual = 5 === "5";  // false (strict equality - no conversion)

// Inequality
let isNotEqual = 5 != "6";      // true
let isStrictNotEqual = 5 !== "5"; // true

// Relational
let isGreater = 10 > 5;         // true
let isLessOrEqual = 5 <= 5;     // true
```

### Logical Operations

```javascript
let andResult = true && false;   // false - AND (both must be true)
let orResult = true || false;    // true - OR (at least one must be true)
let notResult = !true;           // false - NOT (inverts the value)

// Practical example
let age = 25;
let hasLicense = true;
let canDrive = age >= 18 && hasLicense; // true
```

---

## 5. Functions

Functions are reusable blocks of code that perform specific tasks. They are fundamental to JavaScript programming.

### Function Declaration

```javascript
// Traditional function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function call
let message = greet("Alice"); // "Hello, Alice!"
console.log(message);
```

### Function Expression

```javascript
// Function stored in a variable
const sayGoodbye = function(name) {
    return "Goodbye, " + name + "!";
};

let farewell = sayGoodbye("Bob"); // "Goodbye, Bob!"
```

### Arrow Functions (Modern ES6+ Syntax)

```javascript
// Arrow function with block body
const multiply = (a, b) => {
    return a * b;
};

// Arrow function with implicit return (one line)
const multiplyShort = (a, b) => a * b;

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters
const getCurrentTime = () => new Date().toLocaleTimeString();
```

### Function Parameters and Default Values

```javascript
// Function with default parameters
function introduce(name = "Anonymous", age = 0) {
    return `Hi, I'm ${name} and I'm ${age} years old.`;
}

console.log(introduce());                    // "Hi, I'm Anonymous and I'm 0 years old."
console.log(introduce("Sarah"));             // "Hi, I'm Sarah and I'm 0 years old."
console.log(introduce("John", 30));          // "Hi, I'm John and I'm 30 years old."
```

---

## 6. Conditional Statements

Conditional statements allow your program to make decisions based on different conditions.

### If-Else Statement

```javascript
let age = 18;

// Basic if-else
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
```

### Multiple Conditions (else-if)

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
```

### Switch Statement

```javascript
let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Midweek grind!");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}
```

### Ternary Operator (Conditional Operator)

```javascript
// Shorthand for simple if-else
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Can be chained
let temperature = 75;
let weather = temperature > 80 ? "hot" : temperature > 60 ? "warm" : "cold";
```

---

## 7. Loops

Loops allow you to execute code repeatedly based on a condition.

### For Loop

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log("Count: " + i);
}
// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4

// Looping through an array
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
```

### While Loop

```javascript
let count = 0;
while (count < 3) {
    console.log("While count: " + count);
    count++; // Important: increment to avoid infinite loop
}
// Output: While count: 0, While count: 1, While count: 2
```

### Do-While Loop

```javascript
let number = 1;
do {
    console.log("Number: " + number);
    number++;
} while (number <= 3);
// Executes at least once, even if condition is initially false
```

### Modern Loop Methods (ES6+)

```javascript
let colors = ["red", "green", "blue"];

// For...of loop (for arrays)
for (let color of colors) {
    console.log("Color: " + color);
}

// For...in loop (for object properties)
let person = { name: "Alice", age: 30, city: "Boston" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Array.forEach method
colors.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});
```

---

## 8. Your First Complete Example

Let's combine everything we've learned into a practical example:

```javascript
/**
 * Rectangle Calculator
 * Demonstrates variables, functions, conditionals, and output
 */

// Function to calculate rectangle area
function calculateArea(width, height) {
    // Validate input
    if (width <= 0 || height <= 0) {
        return "Error: Width and height must be positive numbers";
    }
    
    return width * height;
}

// Function to calculate rectangle perimeter
function calculatePerimeter(width, height) {
    return 2 * (width + height);
}

// Function to categorize rectangle size
function categorizeSize(area) {
    if (area > 100) {
        return "large";
    } else if (area > 50) {
        return "medium";
    } else {
        return "small";
    }
}

// Main program
function analyzeRectangle(width, height) {
    console.log("=== Rectangle Analysis ===");
    console.log(`Dimensions: ${width} × ${height}`);
    
    // Calculate properties
    const area = calculateArea(width, height);
    const perimeter = calculatePerimeter(width, height);
    const size = categorizeSize(area);
    
    // Display results
    console.log(`Area: ${area} square units`);
    console.log(`Perimeter: ${perimeter} units`);
    console.log(`Size category: ${size}`);
    
    // Conditional message
    if (area > 50) {
        console.log("💡 Tip: This is a spacious rectangle!");
    } else {
        console.log("💡 Tip: This is a compact rectangle.");
    }
}

// Example usage
analyzeRectangle(10, 5);
analyzeRectangle(3, 4);
analyzeRectangle(15, 8);
```

**Expected Output:**
```
=== Rectangle Analysis ===
Dimensions: 10 × 5
Area: 50 square units
Perimeter: 30 units
Size category: small
💡 Tip: This is a compact rectangle.
```

---

## Practice Exercise

Now it's your turn! Here's a coding challenge to reinforce what you've learned:

### 🎯 Temperature Converter Challenge

**Task:** Write a function that converts temperatures between Celsius and Fahrenheit.

**Requirements:**
1. Create a function that takes a temperature in Celsius
2. Convert it to Fahrenheit using the formula: `F = C × 9/5 + 32`
3. Return a formatted message like "25°C is 77°F"
4. Add conditional messages for temperature ranges

### Solution Template

```javascript
function convertTemperature(celsius) {
    // Your code here
    // 1. Convert celsius to fahrenheit
    // 2. Create a formatted message
    // 3. Add conditional temperature descriptions
    // 4. Return the complete message
}

// Test your function
console.log(convertTemperature(0));    // Should show freezing point
console.log(convertTemperature(25));   // Should show room temperature
console.log(convertTemperature(100));  // Should show boiling point
```

### Bonus Challenges
1. **Reverse Converter:** Create a function that converts Fahrenheit to Celsius
2. **Temperature Classifier:** Add descriptions like "freezing", "cold", "warm", "hot"
3. **Input Validation:** Handle invalid inputs gracefully
4. **Multiple Scales:** Add Kelvin conversion support

### Expected Behavior
```javascript
// Example output
"0°C is 32°F - Freezing point of water!"
"25°C is 77°F - Perfect room temperature"
"100°C is 212°F - Boiling point of water!"
```

---

## Next Steps

Congratulations! You've learned the fundamental building blocks of JavaScript. Here's what to explore next:

### Immediate Next Topics
- **DOM Manipulation:** Interacting with HTML elements
- **Event Handling:** Responding to user interactions
- **Arrays & Objects:** Advanced data manipulation
- **Asynchronous Programming:** Promises and async/await

### Learning Path
1. Practice these fundamentals daily
2. Build small projects (calculator, to-do list, etc.)
3. Learn about the Document Object Model (DOM)
4. Explore modern JavaScript features (ES6+)
5. Start building interactive web pages

### Resources for Continued Learning
- **Practice:** Build small projects regularly
- **Documentation:** MDN Web Docs (Mozilla Developer Network)
- **Online Platforms:** FreeCodeCamp, Codecademy, JavaScript.info
- **Projects:** Start with simple calculators, then move to interactive games

Remember: The best way to learn programming is by doing. Start coding today! 🚀
