// array is a data structure where we can arrange different type of data in contigous memory


/** these there doesn't modify the original arrray creates new array */
// slice()
// concat()
// join()
// fill()

/*these method modifyies the original array*/
// pop()
// push()
// shift()
// unshift()
// delete element
// reverse()


let arr = [1,2,"hello"];
console.log(arr.slice(1))
console.log(arr.splice(1,1,"hel"))
arr


arr.fill("hello",2)
arr


/**desctructing and spread operator in js imppppp */
// destructing
//    with the help of destructring we can extract and assign the value at once for array and object

// without destructuring
let value = arr[0]
let value2 = arr[1]

// with destructuring

let [value1,valu3,defaultValue="haha"] = arr;///default value is same as pyhton we if not default then undefined
value1
valu3
defaultValue


/**SPread operator is used to spread the all values inside an array */

let hello = [...arr] //elements are spreaded in hello
hello

let [justValue,defaultValueee="hell",...spreador] = arr
justValue
defaultValueee
spreador  //gives value inside aa array