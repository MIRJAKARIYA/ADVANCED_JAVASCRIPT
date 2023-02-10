//context => container which holds codes.
//Execution Context

function a(){ //creational phase
    b()
    console.log("I am fuction A")
}

function b(){ //creational phase
    d()
    console.log("I am fuction B")
}

function c(){ //creational phase
    console.log("I am function C")
}

function d(){ //creational phase
    c()
    console.log("I am fuction D")
}

var x //creational phase
x = 100 //executional phase
a() //executional phase
console.log("I am global")


// creation of each execution context has two phases -->

//1. creational phase (declaration of functions, variables, scope chain maintain etc)
//2. executional phase (execution function calls, variable assigning, any executable logical code etc)