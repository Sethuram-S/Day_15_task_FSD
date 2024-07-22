# Calculator Application README

## Overview

This is a simple calculator application built using JavaScript, HTML, and CSS. The application provides a basic calculator interface with buttons for digits, operators, and functions.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Support for decimal points
- Clear and backspace functionality
- Keyboard input support for digits, Enter, and Backspace keys
- Error handling for invalid input

## Code Structure

The code is organized into the following sections:

### Initialization

- The code adds an event listener to the `DOMContentLoaded` event to ensure the calculator interface is initialized after the HTML document has loaded.

- The calculator container element is retrieved, and a screen element is created to display the current input or result.

### Button Creation

- An array of button symbols is defined, which includes digits, operators, and functions.

- The code loops through the array and creates a button element for each symbol, adding an event listener to handle button clicks.

### Event Listeners

- The `handleButtonClick` function is called when a button is clicked, updating the `currentInput` variable based on the button symbol clicked.

- The `handleKeyPress` function is called when a key is pressed on the keyboard, handling input for digits, Enter, and Backspace keys.

#### Variables

- `currentInput`: stores the current input or result displayed on the screen.

- `memory`: not used in the current implementation, but intended to store the result of a previous calculation.

## How to Use

1. Open the HTML file in a web browser.

2. Use the calculator buttons or keyboard to input numbers and perform arithmetic operations.

3. Press the `=` button or Enter key to evaluate the input and display the result.

4. Use the `C` button or Backspace key to clear the input or delete the last character.