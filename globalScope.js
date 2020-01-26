

function attachPropertyToThis(){
    this.name = "Emily"
}


attachPropertyToThis()
// undefined
console.log(name)
// Emily

// By attaching a property to the global object(window), we are making our property
// a global variable - available everywhere - and which we can use outside of the function
// However - what have we learnt? Global variables are not a good thing - see 'Killing Global Variables'
// chapter in Battle 
// Use of Global Variables is BAD PRACTICE


