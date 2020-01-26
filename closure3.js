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

//counter()

/* ƒ inner(){
    count++
    return count;
  }

*/

