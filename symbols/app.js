// Symbols are unique.
// Create a Symbol
// Fact: Symbol is primitive so we don't use "new" keyword
// sym1 is the identifier
const sym1 = Symbol('sym1');

console.log(Symbol() === Symbol());  // false 
console.log(Symbol('123') === Symbol('123')); // false
// every symbol unique so a symbol does not equal another symbol.

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('symbl');

const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';

console.log(myObj[KEY1]); // Prop1
console.log(myObj[KEY2]); // Prop2

// Symbols are not enumarable in for...in
// Symbols are ignored by JSON.stringify() => not parsed. 