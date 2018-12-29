// // // Question 1. What's the difference between undefined and not defined in JavaScript
// // // Answer
// // // In JavaScript if you try to use a variable that doesn't exist and has not been declared, then JavaScript will throw an error var name is not defined and the script will stop executing thereafter. But If you use typeof undeclared_variable then it will return undefined.

// // // Before starting further discussion let's understand the difference between declaration and definition.

// // // var x is a declaration because you are not defining what value it holds yet, but you are declaring its existence and the need for memory allocation.

// // // var x; // declaring x
// // // console.log(x); // output: undefined
// // // var x = 1 is both declaration and definition (also we can say we are doing initialisation), Here declaration and assignment of value happen inline for variable x, In JavaScript every variable declaration and function declaration brings to the top of its current scope in which it's declared then assignment happen in order this term is called hoisting.

// // // A variable can be declared but not defined.When we try to access it, It will result undefined.

// // // var x; // Declaration
// // // typeof x === 'undefined'; // Will return true
// // // A variable can be neither declared nor defined.When we try to reference such variable then the result will be not defined.

// // //   console.log(y);  // Output: ReferenceError: y is not defined
// // // Ref Link:
// // // http://stackoverflow.com/questions/20822022/javascript-variable-definition-declaration

// // // Question 2. For which value of x the results of the following statements are not the same ?
// // // //  if( x <= 100 ) {...}
// // // if (!(x > 100)) {... }
// // // Answer
// // // NaN <= 100 is false and NaN > 100 is also false, so if the value of x is NaN, the statements are not the same.

// // // The same holds true for any value of x that being converted to Number, returns NaN, e.g.: undefined, [1, 2, 5], { a: 22 }, etc.

// // // This is why you need to pay attention when you deal with numeric variables.NaN can’t be equal, less than or more than any other numeric value, so the only reliable way to check if the value is NaN, is to use isNaN() function.

// // // Question 3. What is the drawback of declaring methods directly in JavaScript objects ?
// // //   Answer
// // // One of the drawback of declaring methods directly in JavaScript objects is that they are very memory inefficient.When you do that, a new copy of the method is created for each instance of an object.Let's see it on example:

// // // var Employee = function (name, company, salary) {
// // //   this.name = name || "";
// // //   this.company = company || "";
// // //   this.salary = salary || 5000;

// // //   // We can create a method like this:
// // //   this.formatSalary = function () {
// // //     return "$ " + this.salary;
// // //   };
// // // };

// // // // we can also create method in Employee's prototype:
// // // Employee.prototype.formatSalary2 = function () {
// // //   return "$ " + this.salary;
// // // }

// // // //creating objects
// // // var emp1 = new Employee('Yuri Garagin', 'Company 1', 1000000);
// // // var emp2 = new Employee('Dinesh Gupta', 'Company 2', 1039999);
// // // var emp3 = new Employee('Erich Fromm', 'Company 3', 1299483);
// // // Here each instance variable emp1, emp2, emp3 has own copy of formatSalary method.However the formatSalary2 will only be added once to an object Employee.prototype.
// // // Question 4. What is “closure” in javascript ? Can you provide an example ?
// // //   Answer
// // // A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

// // // The closure has access to the variable in three scopes:

// // // Variable declared in his own scope
// // // Variable declared in parent function scope
// // // Variable declared in the global namespace
// // // var globalVar = "abc";

// // // // Parent self invoking function
// // // (function outerFunction(outerArg) { // begin of scope outerFunction
// // //   // Variable declared in outerFunction function scope
// // //   var outerFuncVar = 'x';
// // //   // Closure self-invoking function
// // //   (function innerFunction(innerArg) { // begin of scope innerFunction
// // //     // variable declared in innerFunction function scope
// // //     var innerFuncVar = "y";
// // //     console.log(
// // //       "outerArg = " + outerArg + "\n" +
// // //       "outerFuncVar = " + outerFuncVar + "\n" +
// // //       "innerArg = " + innerArg + "\n" +
// // //       "innerFuncVar = " + innerFuncVar + "\n" +
// // //       "globalVar = " + globalVar);
// // //     // end of scope innerFunction
// // //   })(5); // Pass 5 as parameter
// // //   // end of scope outerFunction
// // // })(7); // Pass 7 as parameter
// // // innerFunction is closure which is defined inside outerFunction and has access to all variable which is declared and defined in outerFunction scope.In addition to this function defined inside the function as closure has access to the variable which is declared in global namespace.

// // // Output of above code would be:

// // // outerArg = 7
// // // outerFuncVar = x
// // // innerArg = 5
// // // innerFuncVar = y
// // // globalVar = abc

// // // Question 5. Write a mul function which will work properly when invoked with following syntax.
// // //   console.log(mul(2)(3)(4)); // output : 24
// // // console.log(mul(4)(3)(4)); // output : 48
// // // Answer
// // // Below is the code followed by the explanation of how it works:

// // // function mul(x) {
// // //   return function (y) { // anonymous function
// // //     return function (z) { // anonymous function
// // //       return x * y * z;
// // //     };
// // //   };
// // // }
// // // Here the mul function accepts the first argument and returns the anonymous function which takes the second parameter and returns the anonymous function which takes the third parameter and returns the multiplication of arguments which is being passed in successive

// // // In Javascript function defined inside has access to outer function variable and function is the first class object so it can be returned by the function as well and passed as an argument in another function.

// // // A function is an instance of the Object type
// // // A function can have properties and has a link back to its constructor method
// // // A function can be stored as variable
// // // A function can be pass as a parameter to another function
// // //   A function can be returned from another function

// // // Question 7. How to check if an object is an array or not?
// // // Answer
// // // The best way to find whether an object is instance of a particular class or not using toString method from Object.prototype

// // // var arrayList = [1, 2, 3];
// // // One of the best use cases of type checking of an object is when we do method overloading in JavaScript.To understand this, let's say we have a method called greet which can take a single string and also a list of strings. To make our greet method workable in both situation we need to know what kind of parameter is being passed: is it single value or list of values?

// // // function greet(param) {
// // //   if () {
// // //     // here have to check whether param is array or not
// // //   }
// // //   else {
// // //   }
// // // }
// // // However, in the above implementation it might not necessary to check the type of the array, we can check for single value string and put array logic code in else block, let see below code for the same.

// // //  function greet(param) {
// // //     if (typeof param === 'string') {
// // //     }
// // //     else {
// // //       // If param is of type array then this block of code would execute
// // //     }
// // //   }
// // // Now it's fine we can go with the previous two implementations, but when we have a situation like a parameter can be single value, array, and object type then we will be in trouble.

// // // Coming back to checking the type of an object, As we mentioned that we can use Object.prototype.toString

// // // if (Object.prototype.toString.call(arrayList) === '[object Array]') {
// // //   console.log('Array!');
// // // }
// // // If you are using jQuery then you can also used jQuery isArray method:

// // // if ($.isArray(arrayList)) {
// // //   console.log('Array');
// // // } else {
// // //   console.log('Not an array');
// // // }
// // // FYI jQuery uses Object.prototype.toString.call internally to check whether an object is an array or not.

// // // In modern browser, you can also use:

// // // Array.isArray(arrayList);
// // // Array.isArray is supported by Chrome 5, Firefox 4.0, IE 9, Opera 10.5 and Safari 5

// // // Question 8. What will be the output of the following code ?
// // // var output = (function (x) {
// // //   delete x;
// // //   return x;
// // // })(0);

// // // console.log(output);
// // // Answer
// // // The code above will output 0 as output.delete operator is used to delete a property from an object.Here x is not an object it's local variable. delete operator doesn't affect local variables.
// // // Question 9. What will be the output of the following code ?
// // // var x = 1;
// // // var output = (function () {
// // //   delete x;
// // //   return x;
// // // })();

// // // console.log(output);
// // // Answer
// // // The code above will output 1 as output.delete operator is used to delete a property from an object.Here x is not an object it's global variable of type number.

// // // Question 10. What will be the output of the following code ?
// // // var x = { foo: 1 };
// // // var output = (function () {
// // //   delete x.foo;
// // //   return x.foo;
// // // })();

// // // console.log(output);
// // // Answer
// // // The code above will output undefined as output.delete operator is used to delete a property from an object.Here x is an object which has foo as a property and from a self - invoking function, we are deleting the foo property of object x and after deletion, we are trying to reference deleted property foo which result undefined.

// // // Question 11. What will be the output of the following code?
// // // var Employee = {
// // //   company: 'xyz'
// // // }
// // // var emp1 = Object.create(Employee);
// // // delete emp1.company
// // // console.log(emp1.company);
// // // Answer
// // // The code above will output xyz as output. Here emp1 object got company as prototype property. delete operator doesn't delete prototype property.

// // // emp1 object doesn't have company as its own property. you can test it console.log(emp1.hasOwnProperty('company')); //output : false However, we can delete company property directly from Employee object using delete Employee.company or we can also delete from emp1 object using __proto__ property delete emp1.__proto__.company.

// // // Question 12. What is undefined x 1 in JavaScript
// // // var trees = ["redwood", "bay", "cedar", "oak", "maple"];
// // // delete trees[3];
// // // Answer
// // // When you run the code above and do console.log(trees); in chrome developer console then you will get["redwood", "bay", "cedar", undefined × 1, "maple"].
// // // In the recent versions of Chrome you will see the word empty of undefined x 1.
// // // When you run the same code in Firefox browser console then you will get["redwood", "bay", "cedar", undefined, "maple"]
// // // Clearly we can see that Chrome has its own way of displaying uninitialized index in arrays.However when you check trees[3] === undefined in any browser you will get similar output as true.

// // // Note: Please remember that you need not check for the uninitialized index of the array in trees[3] === 'undefined × 1' it will give an error because 'undefined × 1' this is just way of displaying an uninitialized index of an array in chrome.

// // Question 13. What will be the output of the following code ?
// // var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
// // delete trees[3];
// // console.log(trees.length);
// // Answer
// // The code above will output 5 as output.When we used delete operator for deleting an array element then, the array length is not affected by this.This holds even if you deleted all elements of an array using delete operator.

// // So when delete operator removes an array element that deleted element is no longer present in the array.In place of value at deleted index undefined x 1 in chrome and undefined is placed at the index.If you do console.log(trees) output["xyz", "xxxx", "test", undefined × 1, "apple"] in Chrome and in Firefox["xyz", "xxxx", "test", undefined, "apple"].

// //   Question 14. What will be the output of the following code ?
// // var bar = true;
// // console.log(bar + 0);
// // console.log(bar + "xyz");
// // console.log(bar + true);
// // console.log(bar + false);
// // Answer
// // The code above will output 1, "truexyz", 2, 1 as output.Here's a general guideline for the plus operator:

// // Number + Number -> Addition
// // Boolean + Number -> Addition
// // Boolean + Boolean -> Addition
// // Number + String -> Concatenation
// // String + Boolean -> Concatenation
// // String + String -> Concatenation
// // Question 15. What will be the output of the following code ?
// // var z = 1, y = z = typeof y;
// // console.log(y);
// // Answer
// // The code above will print string "undefined" as output.According to associativity rule operator with the same precedence are processed based on their associativity property of operator.Here associativity of the assignment operator is Right to Left so first typeof y will evaluate first which is string "undefined" and assigned to z and then y would be assigned the value of z.The overall sequence will look like that:

// // var z;
// // z = 1;
// // var y;
// // z = typeof y;
// // y = z;

// // Question 16. What will be the output of the following code ?
// // // NFE (Named Function Expression)
// // var foo = function bar() { return 12; };
// // typeof bar();
// // Answer
// // The output will be Reference Error.To fix the bug we can try to rewrite the code a little bit:

// // Sample 1

// // var bar = function () { return 12; };
// // typeof bar();
// // or

// // Sample 2

// // function bar() { return 12; };
// // typeof bar();
// // The function definition can have only one reference variable as a function name, In sample 1 bar is reference variable which is pointing to anonymous function and in sample 2 we have function statement and bar is the function name.

// // var foo = function bar() {
// //   // foo is visible here
// //   // bar is visible here
// //   console.log(typeof bar()); // Works here :)
// // };
// // // foo is visible here
// // // bar is undefined here

// Question 18. In which case the function definition is not hoisted in JavaScript ?
//   Answer
// Let's take the following function expression

// var foo = function foo() {
//   return 12;
// }
// In JavaScript var-declared variables and functions are hoisted.Let's take function hoisting first. Basically, the JavaScript interpreter looks ahead to find all the variable declaration and hoists them to the top of the function where it's declared.For example:

// foo(); // Here foo is still undefined
// var foo = function foo() {
//   return 12;
// };
// The code above behind the scene look something like this:

// var foo = undefined;
// foo(); // Here foo is undefined
// foo = function foo() {
//   // Some code stuff
// }
// var foo = undefined;
// foo = function foo() {
//   // Some code stuff
// }
// foo(); // Now foo is defined here
// Question 19. What will be the output of the following code ?
// var salary = "1000$";

// (function () {
//   console.log("Original salary was " + salary);

//   var salary = "5000$";

//   console.log("My New Salary " + salary);
// })();
// Answer
// The code above will output: undefined, 5000$ because of hoisting.In the code presented above, you might be expecting salary to retain it values from outer scope until the point that salary was re - declared in the inner scope.But due to hoisting salary value was undefined instead.To understand it better have a look of the following code, here salary variable is hoisted and declared at the top in function scope.When we print its value using console.log the result is undefined.Afterwards the variable is redeclared and the new value "5000$" is assigned to it.

// var salary = "1000$";

// (function () {
//   var salary = undefined;
//   console.log("Original salary was " + salary);

//   salary = "5000$";

//   console.log("My New Salary " + salary);
// })();
// Question 20. What’s the difference between typeof and instanceof?
//   Answer
// typeof is an operator that returns a string with the type of whatever you pass.

// The typeof operator checks if a value belongs to one of the seven basic types: number, string, boolean, object, function, undefined or Symbol.

//   typeof(null) will return object.

//     instanceof is much more intelligent: it works on the level of prototypes.In particular, it tests to see if the right operand appears anywhere in the prototype chain of the left.instanceof doesn’t work with primitive types.It instanceof operator checks the current object and returns true if the object is of the specified type, for example:

//       var dog = new Animal();
// dog instanceof Animal; // Output : true
// Here dog instanceof Animal is true since dog inherits from Animal.prototype

// var name = new String("xyz");
// name instanceof String; // Output : true
// Ref Link: http://stackoverflow.com/questions/2449254/what-is-the-instanceof-operator-in-javascript

// Question 21. Calculate the length of the associative array
// var counterArray = {
//   A: 3,
//   B: 4
// };
// counterArray["C"] = 1;
// Answer
// First of all, in case of JavaScript an associative array is the same as an object.Secondly, even though is no built -in function or property available to calculate the length / size an object, we can write such function ourselves.

// Method 1
// Object has keys method which can we used to calculate the length of object.

//   Object.keys(counterArray).length; // Output 3
// Method 2
// We can also calculate the length of object by iterating through the object and by doing a count of own property of object.This way we will ignoge the properties that came from the object's prototype chain:

// function getLength(object) {
//   var count = 0;
//   for (key in object) {
//     // hasOwnProperty method check own property of object
//     if (object.hasOwnProperty(key)) count++;
//   }
//   return count;
// }
// Method 3
// All modern browsers(including IE9 +) support the getOwnPropertyNames method, so we can calculate the length using the following code:

// Object.getOwnPropertyNames(counterArray).length; // Output 3
// Method 4
// Underscore and lodash libraries have the method size dedicated to calculate the object length.We don't recommend to include one of these libraries just to use the size method, but if it's already used in your project - why not ?

//   _.size({ one: 1, two: 2, three: 3 });
// => 3