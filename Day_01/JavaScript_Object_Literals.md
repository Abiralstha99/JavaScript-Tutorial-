
# JavaScript Object Literals

## 1. Definition
An object literal is a way to define an object in JavaScript using a set of key-value pairs. 
Keys can be either strings or symbols, and values can be any JavaScript data type.

## 2. Example Object
```javascript
const mySym = Symbol("key1");
const JsUser = {
    name: "Sambridi",                      // Simple key-value pair (string)
    "full name": "Sambridi Guragai",      // Key with space (must be in quotes)
    [mySym]: "mykey1",                     // Symbol as a key
    age: 18,                                // Numeric value
    location: "gettysburg",                // String value
    email: "adams@google.com",             // String value
    isLoggedIn: false,                     // Boolean value
    lastLoginDays: ["Monday", "Saturday"]  // Array value
};
```

### Key Features
- **Symbol**: Used to create unique keys.
- **Quoted Keys**: Required when keys contain spaces or special characters.

## 3. Accessing Object Properties
You can access object properties in two ways:
```javascript
console.log(JsUser.age);           // Outputs: 18
console.log(JsUser["age"]);        // Outputs: 18
```

## 4. Modifying Object Properties
You can modify properties directly:
```javascript
JsUser.email = "sambridi@google.com";
```

### Object.freeze()
The `Object.freeze()` method prevents new properties from being added to an object and marks all existing properties as read-only.
```javascript
Object.freeze(JsUser);  // Makes JsUser immutable
JsUser.email = "sambridi@gettysburg.com";  // This will have no effect after freeze
console.log(JsUser);    // Outputs the original object
```

## 5. Adding Methods to Objects
You can add methods (functions) to objects to define behavior:
```javascript
JsUser.greeting = function() {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);  // `this` refers to the JsUser object
};
```

## 6. Calling Object Methods
You can call the methods defined in the object:
```javascript
console.log(JsUser.greeting());       // Outputs: "Hello JS user" and undefined
console.log(JsUser.greetingTwo());    // Outputs: "Hello JS user, Sambridi" and undefined
```

### Notes on Method Calls
- When calling a method, using parentheses `()` executes the function.
- If the function doesn't explicitly return a value, it returns `undefined` after execution.

## 7. Summary
- Object literals allow you to create and manage structured data.
- You can define properties and methods, access them in multiple ways, and modify them.
