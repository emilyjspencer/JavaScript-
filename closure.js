function outer() {
var a = "I love"
  return function inner(){ // inner() is a closure - because it makes use of variables defined in other functions
    return a + " " + "cats" // that have previously returned 
    }
}

outer() // [ƒ inner(){ return a + " " + "cats"}      just gives us the method definiton - no output
outer()() // "I love cats"

function a() {
  var b = "I love Makers"
    return function c() {
        return b + " Obvs it's the best bootcamp"
    }
}

a() //   method definition             f c() {  return b + "Obvs it's the best bootcamp" }
a()()
"I love Makers Obvs it's the best bootcamp"