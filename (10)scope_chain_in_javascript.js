//kono function er ekdom vetor theke maximum baire kotodur ber howa jabe orthat global variables declaration porjonto kotodur jete parbo ey system takei bola hoi scope chain. 


//kon function er vetore kon kon variable er access ache sheta ekta chain akare kaj kore r ey chain e hocche scope chain.

var a =11;

function A(){
    var b = 12;
    function B(){
        var c = 23;
        console.log(c)
    }

    function C(){
        var d = 56;
        console.log(d)
    }

    console.log(b)
    D()
    B()
    C()
}

function D(n){
    return n+a
}

//###function golor scope=======>
// A() er scope er vetore ache => a,b,B(),C(),D()
// B() er scope er vetore ache => a,b,c,B(),C(),D()
// C() er scope er vetore ache => a,b,d,B(),C(),D()
// D() er scope er vetore ache => a,n,A()