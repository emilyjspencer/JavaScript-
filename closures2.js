function outer(a){
    return function inner(b){
        return a + b;
    }
}

outer(5)(5);
10

var storeOuter = outer(5);
undefined

storeOuter(10);
15


//The inner function is making use of the variable "a" which was defined in 
// the outer function called "outer" and by the time inner() is called the outer() 
// function has returned