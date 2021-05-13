// SETS - Store unique values of any type

// Initialization 
const set0 = new Set([1, true, 'string']);
console.log(set0);


// Add values to set
const set1 = new Set();

set1.add(100);
set1.add('A string');
set1.add({name: 'Fatih'});
set1.add(true);

console.log(set1);

// Get count 
console.log(set1.size);

// Check for values
console.log(set1.has(100));

// Important note about reference types
console.log({name: 'Fatih'} === {name: 'Fatih'}); // false (objects have different pointers)

// Delete from set
set1.delete(100);

// Iterating through sets
for(let item of set1) {
  console.log(item);
}

// For..of
for(let item of set1) {
  console.log(item);
}

// forEach() loop
set1.forEach(value => {
  console.log(value);
});

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);




















