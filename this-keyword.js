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