// Define cat variable in the global scope
// This variable is available everywhere

var cat = "Ruby"

function feedCat(){
    var person = "Mag"
}

cat
// "Ruby"
person 
//VM216:1 Uncaught ReferenceError: person is not defined
    //at <anonymous>:1:1

// The person variable was not defined in the global scope - hence it cannot
// be accessed outside of the function


