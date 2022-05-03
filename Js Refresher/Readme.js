'use strict';


// use of "use strict"

// if we only witre 
// d = 90
// it will don't throw an error normally 
// but if we use "use strict" it will throw an error 
// "use strict" runs js in strict mode.


// d = 90;
// Readme.js:13 Uncaught ReferenceError: d is not defined


/* Js Refresser....


Data Types in Js
Numbers 
Objects
Booleans - true or false
String
undefined
null
 */


/* Functions */

function hello() {
	console.log('Hey Utkarsh');
}


/* Objects */
let a = {
	r: 34,
	d: 68
}


/* Functions inside objects */

let sample = {
	r: 34,
	d: 68,
	someFunction: function (number) {
		console.log('the number is : ', number);
	}
}


// to call someFunction we use: sample.someFunction(34) 
// Output:
// the number is : 34




// Events:

document.addEventListener('click', function click() {
	console.log('This is event listner');
	alert('Hello this is event listner');
	let conf = confirm('Are you sure?');
	// confirm to take user input
	console.log(conf);
	// if press ok returns true either false

})





// Strings methods :

// Slice
// substr
// lastIndexOf
// indexOf
// startswith
// endsWith
// etc.....




// Arrays :

let arr = [33,44,55,66];


// Methods for Array: 

// forEach
arr.forEach(ele => {
	console.log('The number is ', ele);
})

// map
// reverse

// for loop
/* for (let index = 0; index < array.length; index++) {
	const element = array[index];
	
} */






// functions:



// will reperesent window object:
// refer to the outer object
console.log('this is window obj')
console.log(this);



function myfunc(param) { 
	console.log('The param is : ', param);
	// will be deiaplayed as undefined in this type of functions.....
	console.log('The param is : ', this);
	
}
// calling the function
myfunc(34);



// Note if we use Arrow function then only "this" will be defined rest in other fnuctions it will be undefined
// arrow function
let numFunc = (number) => { 
	// will be deiaplayed as undefined in this type of functions.....
	console.log('The number is : ', this);
	
}
// calling the function
numFunc();


// creating obj and nest the arrow func

let myObj = {
	a: this,

	// in arrow func this keyword access a: this value means inside of the myObj this object
	myObjFunc : (number) => {
		console.log('The number is : ', this);
	},

	// this will be now thw window object
	myOFunc : function(number){
		console.log('The number is : ', this);
	}
}

// calling arrow func inside of object
console.log('The objects function is');
myObj.myObjFunc();
console.log(myObj.a);




// callback - is a function that invokes when one thing or particular code was executed

/* 
callback function definitation

() => {
	
}


 */

setTimeout(() => {
	//fires the callback function after 2 seconds without blocking the other statements being executed
	console.log("Yesa this invoked after 2 sec");
}, 2000);

console.log('this will execute first');



// Promises - when one thing or particular code executed it runs a function or one function
// Promises can be resolve or rejected