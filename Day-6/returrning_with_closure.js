
/**those functions which returns a  function is also called a higher order function,
,,for return function there is no special name it is also called anonymous function*/

/**CLosure is a concept through which the child function can access the parents variable even after completion of parent execution */

function outer(){
let a =1;
let b=2;
debugger
    function inner(){
        return a+b;
    }
return inner;


}


console.log(outer()());
