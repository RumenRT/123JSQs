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