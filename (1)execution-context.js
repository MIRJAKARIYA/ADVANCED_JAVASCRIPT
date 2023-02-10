//context => container which holds codes.
//Execution Context

function a(){
    b()
    console.log("I am fuction A")
}

function b(){
    d()
    console.log("I am fuction B")
}

function c(){
    console.log("I am function C")
}

function d(){
    c()
    console.log("I am fuction D")
}

var x = 100
a()
console.log("I am global")



//---- context stack(LIFO) -------//

//Execution of c() function context
//Execution of d() function context
//Execution of b() function context
//Execution of a() function context
//Execution of global context



