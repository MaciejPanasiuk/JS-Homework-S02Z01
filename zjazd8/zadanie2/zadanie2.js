// Create a math module
// Use Module Pattern with IIFE, Revealing Module Pattern or ES Modules
// The module should have 4 functions - add, subtract, multiply, divide.	
// Add another method - repeat
// This function should repeat the last operation on he result of that operation
// ie. last operation: 2 + 2 = 4
// repeat should do 4 + 2 = 6
// or last operation 4 * 5 = 20
// repeat should do 20 * 5 = 100
// another repeat should do 100 * 5 = 500

import math from './math.js'
const first=100;
const second=2;

console.log(math.add(first,second));
console.log(math.repeat());
console.log(math.repeat());
console.log(math.repeat());
console.log(math.repeat());
console.log(math.multiply(first,second));
console.log(math.repeat());
console.log(math.divide(first,second));
console.log(math.repeat());
console.log(math.repeat());
console.log(math.repeat());
console.log(math.repeat());