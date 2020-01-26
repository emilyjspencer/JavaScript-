function counter(){
  let count = 0;
  return function inner(){
    count++
    return count;
  }
}

let counter2 = counter()
//undefined

counter2

/* ƒ inner(){
    count++
    return count;
} */
counter2()
// 1
counter2()
// 2
counter2()
// 3

// create new variable

var counter3 = counter()
// undefined

counter3
/* ƒ inner(){
    count++
    return count;
  } */

counter3()
1

// The counter3 variable doesn't modify the counter2 variable because 
// both of the functions have their own private count variable 

