# JavaScript Object Literals

## 1. Definition

An object literal is a way to define an object in JavaScript using a set of key-value pairs.
Keys can be either strings or symbols, and values can be any JavaScript data type.

## 2. Example Object

```javascript
const mySym = Symbol("key1");
const JsUser = {
  name: "Sambridi", // Simple key-value pair (string)
  "full name": "Sambridi Guragai", // Key with space (must be in quotes)
  [mySym]: "mykey1", // Symbol as a key
  age: 18, // Numeric value
  location: "gettysburg", // String value
  email: "adams@google.com", // String value
  isLoggedIn: false, // Boolean value
  lastLoginDays: ["Monday", "Saturday"], // Array value
};
```

### Key Features

- **Symbol**: Used to create unique keys.
- **Quoted Keys**: Required when keys contain spaces or special characters.

## 3. Accessing Object Properties

You can access object properties in two ways:

```javascript
console.log(JsUser.age); // Outputs: 18
console.log(JsUser["age"]); // Outputs: 18
```

## 4. Modifying Object Properties

You can modify properties directly:

```javascript
JsUser.email = "sambridi@google.com";
```

### Object.freeze()

The `Object.freeze()` method prevents new properties from being added to an object and marks all existing properties as read-only.

```javascript
Object.freeze(JsUser); // Makes JsUser immutable
JsUser.email = "sambridi@gettysburg.com"; // This will have no effect after freeze
console.log(JsUser); // Outputs the original object
```

## 5. Adding Methods to Objects

You can add methods (functions) to objects to define behavior:

```javascript
JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); // `this` refers to the JsUser object
};
```

## 6. Calling Object Methods

You can call the methods defined in the object:

```javascript
console.log(JsUser.greeting()); // Outputs: "Hello JS user" and undefined
console.log(JsUser.greetingTwo()); // Outputs: "Hello JS user, Sambridi" and undefined
```

### Notes on Method Calls

- When calling a method, using parentheses `()` executes the function.
- If the function doesn't explicitly return a value, it returns `undefined` after execution.

## 8. Adding and Removing Properties

- Adding: You can add properties dynamically to an object using dot or bracket notation.
- Deleting: Properties can be removed using the delete keyword.

```javascript
product.newProperty = true;
delete product.newProperty;
```

## 9. Nested Objects

- Objects can contain other objects, allowing for more complex data structures.

```javascript
const product2 = {
  name: "shirt",
  rating: {
    stars: 4.5,
    count: 87,
  },
};
```

## 10. Functions Inside Objects (Methods)

- Functions can be stored as values in objects, making them methods of that object.
- Syntax: functionName: function() { ... }

```javascript
const product2 = {
  func: function () {
    console.log("function inside object");
  },
};
```

## 11. Built in JavaScript Objects

## JSON

- JSON : Provides methods to convert objects to JSON strings and vice versa.
  - JSON.stringify(object) converts an object to a JSON string (functions are omitted).
  - JSON.parse(string) converts a JSON string back to an object.

## Local Storage

localStorage is a built-in JavaScript object that allows you to store data persistently in the browser, even if the user refreshes the page or closes the browser.

## Functions Used in localStorage

- setItem(key, value): Stores data. The value must be a string, so objects are typically converted to JSON using JSON.stringify.
- getItem(key): Retrieves data by key.
- removeItem(key): Removes data associated with a key.
- clear(): Clears all localStorage data for that domain.

## 12. Working with String Objects

- Length Property: Get the length of a string using .length.

```Javascript
console.log("hello".length); // Output: 5
```

- String Methods: Strings have built-in methods like .toUpperCase().

```Javascript
console.log("hello".toUpperCase()); // Output: HELLO
```

## 13. Object References and Equality

- Object References:
  - Objects are stored by reference, not by value.
  - When you assign one object to another, they share the same reference.

```JavaScript
const object1 = { message: "hello" };
const object2 = object1; // Shares the same reference as object1
object1.message = "Good job";
console.log(object1); // Output: { message: "Good job" }
console.log(object2); // Output: { message: "Good job" }
```

## Equality Comparison:

- Even if two objects have the same structure and properties, they are not equal unless they share the same reference.

```javascript
const object3 = { message: "Good job" };
console.log(object3 === object1); // Output: false
```

## 14. Object Destructuring

- Destructuring:
- A quick way to extract properties from objects into variables.
- Example:

```javascript
const object4 = { message: "Good job", price: 799 };
const { message, price } = object4;
console.log(message); // Output: Good job
console.log(price); // Output: 799
```

## 15. Shorthand Properties and Methods

## Shorthand Properties:
  - If the variable name matches the property name, you can use shorthand notation.
  ```javascript
  const message = "Good job";
  const object5 = { message }; // Equivalent to { message: message }
  console.log(object5); // Output: { message: "Good job" }
  ```

## Shorthand Methods
- When defining methods inside an object, you can omit the function keyword.
```javaScript
const object5 = {
  message: "Good job",
  method() {
    console.log("Method");
  },
};
object5.method(); // Output: Method
```