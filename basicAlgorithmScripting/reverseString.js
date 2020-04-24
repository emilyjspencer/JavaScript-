// Reverse a string


function reverseString(str) {
    let split = str.split("").reverse()
    let reversed = split.join("")
    return reversed
    
  }
  
  reverseString("hello");
  