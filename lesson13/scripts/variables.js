// @ts-check
'use strict';

var firstName = 'John';
let lastName = 'Doe';

console.log(lastName); // Outputs: Doe
lastName = 'Smith';
console.log(lastName); // Outputs: Smith
const age = 30;
// age = 31; // Error: Assignment to constant variable.
// console.log(age);

let someData;

console.log(someData); // Outputs: undefined
someData = 'Hello, World!';
console.log(someData);
