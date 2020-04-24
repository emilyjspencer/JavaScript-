// Confirm the string ending.

// Check if a string ends with the given target string/

// Only checking for the last letter of string

function confirmEnding(str, target) {
  if(str[str.length-1] === target) {
    return true
  } else {
  return false
  }
}




confirmEnding("Bastian", "n");
//true
confirmEnding("Matilda", "a");
// true

