// define a function that console logs something
// call this function with node.js

// hoisting


function myFunction(name) {
    console.log("Hi", name);
}

const giveName = function(){
    return "Ioana";
}

// functions are first-class citizens in JS
// myFunction(giveName());

// arrow functions: yourName
const yourName = () => {
    return "Ioana";
}

console.log(yourName());




