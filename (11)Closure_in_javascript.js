//Closure is when a function is able to remember and access it's lexical scope even that function executing outside it's lexical scope.

//able to remember and access it's lexical scope
//when that fuction executing outside it's lexical scope


// function test(){
//     var msg = "I am learning lexical scope and closure"

//     function sayMsg(){
//         console.log(msg)
//     }
//     sayMsg()
// }


function test(){
    var msg = "I am learning lexical scope and closure"

    return function (){
        console.log(msg)
    }
    


}

var sayMsg = test()

sayMsg()


