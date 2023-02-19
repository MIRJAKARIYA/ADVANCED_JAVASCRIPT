// kothai ekta variable ba function declare hocche ebong kothai ekta value assign hocche variable er vetore eytakei hoisting bole.

//hoisting er mane hocche kon variable kothai declare hobe ebong kokhon tar value assign hobe,creational phase a tar value ki thakbe ebong executional phase a tar value kivabe assign hobe ba ekta fuction kivabe kothai value ta access pabe eyshob kichui moloto hoisting er kaj.

var a = 100
// newPrint(a)

print(10)

var newPrint = print

newPrint(45)

function print(a){
    console.log(a)
}

print(a)



//Creational phase
// a = undefined
// newPrint = undefined
// print = refference


//Executional phase
// a = 100
// function call ==> print(10) ==> 10
// newPrint = ref
// function call ==> newPrint(45) ==> 45
//function call ==> print(a) ==> 100


