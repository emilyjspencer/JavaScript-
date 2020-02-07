var arr = [2,3,4,5, 20, 100]

function happyHippo(arr, item) {
  arr.push(item);
   arr.shift();
 return arr
}


happyHippo(arr, 5)

// [3, 4, 5, 20, 100, 5]