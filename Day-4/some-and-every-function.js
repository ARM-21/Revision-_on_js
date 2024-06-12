


let arr = [1,2,3,4,5];

//in case of some and every,should evaluate in ---------> true,,,,




//some method in js
//it will return true if any of the element in the array satisfies the condition

console.log(arr.some((num)=>{
    return num%2==0;//true (2%2==0 true s0, got terminated from there)
}))

//every method in js
//it will return true if all the elements in the array satisfies the condition
console.log(arr.every((num)=>{
    return num%2==0;//false
}))

/**conclusion */
//////some
//like some of them is true ----> returns true
/////every
//each of them is true ---> returns true