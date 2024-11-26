# JavaScript DOM Manipulation Notes

`document.querySelector`, `.innerHTML`, and `.value` in JavaScript for DOM manipulation.

## 1. `document.querySelector`

### Purpose

Selects the first matching element from the DOM based on a CSS selector.

### Syntax

```javascript
const element = document.querySelector("selector");
```

### Example

```javascript
const buttonElement = document.querySelector(".js-button");
```

This selects the first element with the class `.js-button`.

---

## 2. `.innerHTML`

### Purpose

- **Get** or **Set** the HTML content inside an element.

### Syntax

- Get content:
  ```javascript
  const content = element.innerHTML;
  ```
- Set content:
  ```javascript
  element.innerHTML = "New Content Here!";
  ```

### Example

```javascript
buttonElement.innerHTML = "Clicked!";
```

This changes the button's text to `"Clicked!"`.

---

## 3. `.value`

### Purpose

- **Get** or **Set** the value of an input field or textarea.

### Syntax

- Get value:
  ```javascript
  const inputValue = inputElement.value;
  ```
- Set value:
  ```javascript
  inputElement.value = "Default Text";
  ```

### Example

```javascript
console.log(inputElement.value);
```

This logs the user input from the input field.

---

## Key Points to Remember

1. **Selectors in `querySelector`**:

   - Use `.` for class names.
   - Use `#` for IDs.
   - Use the tag name directly for elements (e.g., `<button>`, `<input>`).

2. **Difference Between `.innerHTML` and `.value`**:

   - `.innerHTML`: Works on any element; modifies or retrieves the HTML content.
   - `.value`: Works specifically with input-like elements and retrieves or modifies the user-entered values.

3. Always check if the element exists in the DOM before applying `.innerHTML` or `.value`.

---

## Quick Reference Example

```javascript
// Select a button and an input field
const button = document.querySelector(".js-button");
const input = document.querySelector(".js-input");

// Change the button text
button.innerHTML = "Clicked!";

// Log the value from the input field
console.log(input.value);
```
---
## Document and Window Objects

1. Document Object

- Represents the webpage.

```javascript
document.querySelector(".class-name"); // Selects an element by its class name
document.getElementById("id"); // Selects an element by its ID
```

2. Window Object

- Represents the browser environment.

```javascript
window.console.log("Hello!"); // Logs output to the console
window.alert("Alert box!"); // Shows an alert dialog
window.prompt("Enter value"); // Shows a prompt dialog for user input
```

Shortcut: The window. prefix is automatically assumed, so

```javascript
console.log("Hello!"); // Same as window.console.log('Hello!')
alert("Alert box!"); // Same as window.alert('Alert box!')
```
---