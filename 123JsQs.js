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

// Question 2. For which value of x the results of the following statements are not the same ?
// //  if( x <= 100 ) {...}
// if (!(x > 100)) {... }
// Answer
// NaN <= 100 is false and NaN > 100 is also false, so if the value of x is NaN, the statements are not the same.

// The same holds true for any value of x that being converted to Number, returns NaN, e.g.: undefined, [1, 2, 5], { a: 22 }, etc.

// This is why you need to pay attention when you deal with numeric variables.NaN can’t be equal, less than or more than any other numeric value, so the only reliable way to check if the value is NaN, is to use isNaN() function.

// Question 3. What is the drawback of declaring methods directly in JavaScript objects ?
//   Answer
// One of the drawback of declaring methods directly in JavaScript objects is that they are very memory inefficient.When you do that, a new copy of the method is created for each instance of an object.Let's see it on example:

// var Employee = function (name, company, salary) {
//   this.name = name || "";
//   this.company = company || "";
//   this.salary = salary || 5000;

//   // We can create a method like this:
//   this.formatSalary = function () {
//     return "$ " + this.salary;
//   };
// };

// // we can also create method in Employee's prototype:
// Employee.prototype.formatSalary2 = function () {
//   return "$ " + this.salary;
// }

// //creating objects
// var emp1 = new Employee('Yuri Garagin', 'Company 1', 1000000);
// var emp2 = new Employee('Dinesh Gupta', 'Company 2', 1039999);
// var emp3 = new Employee('Erich Fromm', 'Company 3', 1299483);
// Here each instance variable emp1, emp2, emp3 has own copy of formatSalary method.However the formatSalary2 will only be added once to an object Employee.prototype.
// Question 4. What is “closure” in javascript ? Can you provide an example ?
//   Answer
// A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

// The closure has access to the variable in three scopes:

// Variable declared in his own scope
// Variable declared in parent function scope
// Variable declared in the global namespace
// var globalVar = "abc";

// // Parent self invoking function
// (function outerFunction(outerArg) { // begin of scope outerFunction
//   // Variable declared in outerFunction function scope
//   var outerFuncVar = 'x';
//   // Closure self-invoking function
//   (function innerFunction(innerArg) { // begin of scope innerFunction
//     // variable declared in innerFunction function scope
//     var innerFuncVar = "y";
//     console.log(
//       "outerArg = " + outerArg + "\n" +
//       "outerFuncVar = " + outerFuncVar + "\n" +
//       "innerArg = " + innerArg + "\n" +
//       "innerFuncVar = " + innerFuncVar + "\n" +
//       "globalVar = " + globalVar);
//     // end of scope innerFunction
//   })(5); // Pass 5 as parameter
//   // end of scope outerFunction
// })(7); // Pass 7 as parameter
// innerFunction is closure which is defined inside outerFunction and has access to all variable which is declared and defined in outerFunction scope.In addition to this function defined inside the function as closure has access to the variable which is declared in global namespace.

// Output of above code would be:

// outerArg = 7
// outerFuncVar = x
// innerArg = 5
// innerFuncVar = y
// globalVar = abc

// Question 5. Write a mul function which will work properly when invoked with following syntax.
//   console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48
// Answer
// Below is the code followed by the explanation of how it works:

// function mul(x) {
//   return function (y) { // anonymous function
//     return function (z) { // anonymous function
//       return x * y * z;
//     };
//   };
// }
// Here the mul function accepts the first argument and returns the anonymous function which takes the second parameter and returns the anonymous function which takes the third parameter and returns the multiplication of arguments which is being passed in successive

// In Javascript function defined inside has access to outer function variable and function is the first class object so it can be returned by the function as well and passed as an argument in another function.

// A function is an instance of the Object type
// A function can have properties and has a link back to its constructor method
// A function can be stored as variable
// A function can be pass as a parameter to another function
//   A function can be returned from another function

// Question 7. How to check if an object is an array or not?
// Answer
// The best way to find whether an object is instance of a particular class or not using toString method from Object.prototype

// var arrayList = [1, 2, 3];
// One of the best use cases of type checking of an object is when we do method overloading in JavaScript.To understand this, let's say we have a method called greet which can take a single string and also a list of strings. To make our greet method workable in both situation we need to know what kind of parameter is being passed: is it single value or list of values?

// function greet(param) {
//   if () {
//     // here have to check whether param is array or not
//   }
//   else {
//   }
// }
// However, in the above implementation it might not necessary to check the type of the array, we can check for single value string and put array logic code in else block, let see below code for the same.

//  function greet(param) {
//     if (typeof param === 'string') {
//     }
//     else {
//       // If param is of type array then this block of code would execute
//     }
//   }
// Now it's fine we can go with the previous two implementations, but when we have a situation like a parameter can be single value, array, and object type then we will be in trouble.

// Coming back to checking the type of an object, As we mentioned that we can use Object.prototype.toString

// if (Object.prototype.toString.call(arrayList) === '[object Array]') {
//   console.log('Array!');
// }
// If you are using jQuery then you can also used jQuery isArray method:

// if ($.isArray(arrayList)) {
//   console.log('Array');
// } else {
//   console.log('Not an array');
// }
// FYI jQuery uses Object.prototype.toString.call internally to check whether an object is an array or not.

// In modern browser, you can also use:

// Array.isArray(arrayList);
// Array.isArray is supported by Chrome 5, Firefox 4.0, IE 9, Opera 10.5 and Safari 5