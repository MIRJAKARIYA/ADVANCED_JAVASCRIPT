//javascript engine jokhon kono ekta code tokenize kore thake(lexing) shei shomoi sha define kore dei kar(kon variable er) scope ki hobe.etakei lixical scope bole.

// nested function er vetor theke amra test fuction er scope er variable takee access korte parchi.eyje nested function ta test function er variable golote access nite parbe even sha global scope er variable golote access nite parbe ey concept takei lexical scoping bole ebong ey concept ta define hoiye jacche jokhon code ta tokenize ba lexing hocche orthat jokhon choto choto part akare (token akare) vag hoiye compiler er kacche ba engine er kase jacche tokhoni eta define hoiye jacche kar scope ki hobe,ke kotha theke kon value ta ke access nite parbe.That is called lexical scope.

{
    var x = 55;

    function test(){


        function nested(){
            console.log(x)
        }


        nested()
    }

    test()
}