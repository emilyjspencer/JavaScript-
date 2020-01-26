NOTES

Closures

A closure only exists when an inner function makes use of variables defined
from an outer function that has returned. 
If the inner function does not make use of any of the external variables all we have is a nested function

Only variables used in the inner function are remembered

The debugger keyword when used in the console pauses execution of the code
on the line that it has been placed 

Inner functions don't remember everything fom outer functions that have returned 
they only remember the variables that they need.

Example

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

name
VM4047:1 Uncaught ReferenceError: name is not defined
    at eval (eval at Melania (7307106:5), <anonymous>:1:1)
    at Melania (<anonymous>:5:7)
    at <anonymous>:1:14

