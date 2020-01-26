// Arrow functions 

nyanCat = function() {
  return "nahnahnahnahnahnahanahanahahanha";
}


nyanCat = () => {
  return "nahnahnahnahnahnahanahanahahanha"
}

// Both have the same output
// Arrow function syntax is simply more concise 

// If the function has only one statement, 
// and the statement returns a value, you can remove the brackets
//  and the return keyword:

nyanCat = () => "nahnahnahnahnahnahanahanahahanha"

// Still produces the same output as above 

// Arrow functions with params

greet = (name) => "Hello " + name;

(name) => "Hello " + name

greet('Karla')

// "Hello Karla"