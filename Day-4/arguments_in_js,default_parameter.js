//arguments are 
//1. It is an array like object
//2. it is not an actual array because we cannot use all array methods except length

function add(a,b){
    console.log(arguments);
    console.log(a+b);
    let arr = []
    for(let i=0;i<arguments.length;i++){
        arr[i] = arguments[i];
    }
    console.log(arr.reduce((a,b)=>{return a+b}))
}
add(1,2,3);

//default paraeter in js
//1. we can assign default value to the parameter
//2. if we don't pass the value to the parameter then it will take the default value
//3. we can also pass the value to the parameter


function add2(a,b=2){
    console.log(a+b);
}