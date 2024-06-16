

//<p>hello <span>world</span></p>
//textContent will give the text content of the element with spaces and new lines like (<pre> tag in html)
//innerText but it will give the text content only without \n of the element



// <-------------------------------------------------------------------------------------------->
/**
 * how to apply style for elements using javascript like same as in css
 * 
 * element.style.cssText = `
 * color="blue";
 * background-color = "red";
 * `
 * 
 * //this one is also not good way 
 * instead we can write all the property in css file with a class selector ,
 * and 
 * assign the element.className = "same classname as in css file"
 * 
 * .className-----> overwrites all the class and add the one that u have added
 * 
 * so should .classList.add
 */