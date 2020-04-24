# README

**Callbacks**

* A callback function is a function that is passed into another function as a parameter and then invoked by that other function

**Uses of callbacks:**

* Callbacks are used in various situations, such as:
* **React development**
* **AJAX requests**
* **Browser event**
* **Advanced array methods**

**Callback example:**

```html
function callback() {
    console.log("Hello from the callback function :)");
}

function higherOrderFunction(callback) {
    console.log("1");
    callback()
    console.log("Callback function has been called");
}

higherOrderFunction(callback);

// 
1
Hello from the callback function :)
Callback function has been called


``` 

**Using callback functions to reduce duplication:**

```html
function  greet(greeting) {
    console.log(greeting);
}

function greetAlert(greeting) {
    alert(greeting);
}

function greetConfirm(greeting) {
    return confirm(greeting);
}

greetConfirm("--------");

// pop-up alert "--------"

* We can use callbacks to limit this duplication:

```html
function sendMessage(message, callback) {
    return callback(message);
}

sendMessage("Message for console", console.log);
sendMessage("Message for alert", alert);

let answer = sendMessage("Are you sure??", confirm);
```

```html
function greet(name, capitalizeName) {
    return "Hello " + capitalizeName(name);
}

function capitalizeName(name) {
    return name.toUpperCase();
}

greet("Emily", capitalizeName);

// "Hello EMILY"
``` 

**Higher order functions** - a higher order function is a function that takes another function as a parameter and/or returns another function.

This parameter might be a callback 


**forEach() function**
* Take an array and a callback function
* For each element in the array, the callback function will be called
* forEach() can be used with three parameters (although not obligatory to do so)

```html

let words = ["It", "is", "sunny"];

let result = "";

forEach(words, function(string, index, array) {
    if(array.length -1 !== index) {
        result += string + " ";
    } else {
        result += string + "!!!";
    }
});


```

**findIndex**

* findIndex returns the index of the first element in an array for which the callback returns
a truthy value
* If findIndex() doesn't find an element that returns a truthy value  -1 is returned 
* findIndex() takes an array and a callback 
* findIndex() can take three parameters - element, index, array

**Arrow functions**

**setTimeout**

**setInterval**

**Regular Expressions**


**JavaScript Stack**

* It keeps track of the functions that have been called
* When a function is called, invocation information is added to top of the stack
* When the execution of the function ends, invocation information is removed from the stack

**Event Loop**

**Global Scope**

**Module Pattern** 

**Promises**



**Closures**

A closure only exists when an inner function makes use of variables defined
from an outer function that has returned. 
If the inner function does not make use of any of the external variables all we have is a nested function

Only variables used in the inner function are remembered

The debugger keyword when used in the console pauses execution of the code
on the line that it has been placed 

Inner functions don't remember everything fom outer functions that have returned 
they only remember the variables that they need.

**Example**

```

function donaldTrump(){
    var name = "Donald"
    var iq = 10;
    return function Melania(){
      debugger
        return "My IQ is certainly not " + iq;
    }
}

donaldTrump()()

```

Execution is halted and we can try to access variables in the console.

iq = will return 10
iq // 10

However, if we try to access name - an error is thrown because it wasn't remembered
If the inner function does not use the outer variables then it doesn't have access
to them.

name

VM4047:1 Uncaught ReferenceError: name is not defined
    at eval (eval at Melania (7307106:5), <anonymous>:1:1)
    at Melania (<anonymous>:5:7)
    at <anonymous>:1:14


**Abstraction**

**The call stack**


**AJAX requests**


**JavaScript popup boxes** - three types:

**Confirm** - if you want the user to confirm or check something
* Box returns true if the user clicks 'OK'
* Box returns false if the user clicks 'Cancel'

**Alert** - a warning

**Prompt** - if you want the user to enter a value 
* Box returns true if the user clicks 'OK'
* Box returns false if the user clicks 'Cancel'

**parseInt() function** -  parses a string and returns an integer
```html
var parseIt = parseInt("115");
console.log(parseIt); // 115
```

**Math.random() function:** -  generates a **random decimal number** between 0 (inclusive) and 1 (exclusive) (never reaches 1)

* Math.random()) can be combined with Math.floor and another integer to generate **random WHOLE numbers**
```html
Math.floor(Math.random() * 65); // 17 - although this changes each time
```

* Math.floor() round decimal numbers down to the nearest whole number 

* This function will return a random whole number between 0 and 9:

```html

function randomWholeNum() {
 return Math.floor(Math.random() * 10)
}
```
* Math.random() and Math.floor() can be combined with max and min to generate random whole numbers in a range:


**Delete** keyword - used to delete properties from a JavaScript object:

```html
let Barbie = {
  "sibling": ["Shelley", "Skipper", "Stacey"]
  "hairColor": "blonde";
  "boyfriend": "Ken";
  "manufacturer": "Mattel";
  "inventor": "Ruth Handler"
};

// Only change code below this line

delete Barbie.boyfriend;
```

**var vs. let**

* Var was used to declare variables until the advent of ES6.
* It was problematic because variables declared using var could be overwritten without generating an error
* Let was introducted with ES6 and an error will be thrown if a variable declared using the let keyword is attempted to be overwritten




