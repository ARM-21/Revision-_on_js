// to make code reusable we use module to break down our code

let a = "manoj";
// if i want to make use of this a variable in another file than i have to export it first
export {a}
// now this a variable is available in another file and can be access by using import{varibale name} from filename

//can export multiple value
// export{value,value}

/** we can set aliases for import function,variable */


/**there are two type while export from js file
 * export default name;-----> it is for single variable,function
 * export {}-----> mutliple varibale,function
 */


//attribute, type = "module","nomodule" for unsupported browser