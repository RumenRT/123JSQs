// Question 1. What's the difference between undefined and not defined in JavaScript
// Answer
// In JavaScript if you try to use a variable that doesn't exist and has not been declared, then JavaScript will throw an error var name is not defined and the script will stop executing thereafter. But If you use typeof undeclared_variable then it will return undefined.

// Before starting further discussion let's understand the difference between declaration and definition.

// var x is a declaration because you are not defining what value it holds yet, but you are declaring its existence and the need for memory allocation.

// var x; // declaring x
// console.log(x); // output: undefined
// var x = 1 is both declaration and definition (also we can say we are doing initialisation), Here declaration and assignment of value happen inline for variable x, In JavaScript every variable declaration and function declaration brings to the top of its current scope in which it's declared then assignment happen in order this term is called hoisting.

// A variable can be declared but not defined.When we try to access it, It will result undefined.

// var x; // Declaration
// typeof x === 'undefined'; // Will return true
// A variable can be neither declared nor defined.When we try to reference such variable then the result will be not defined.

//   console.log(y);  // Output: ReferenceError: y is not defined
// Ref Link:
// http://stackoverflow.com/questions/20822022/javascript-variable-definition-declaration