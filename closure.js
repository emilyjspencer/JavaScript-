function outer() {
var a = "I love"
  return function inner(){
    return a + " " + "cats"
    }
}

outer()
outer()() // "I love cats"