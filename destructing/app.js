// Destructuring Assignment 

let a,b;
// Rest pattern
[a,b] = [100, 200];

console.log(a); //output: 100
console.log(b); //output: 200

// Using with spread operator
[a,b, ...rest] = [100, 200, 300, 400, 500];
// a => 100 b=> 200, rest of items => 300,400,500 (Array) rest is an array.

({a, b, ...rest} = {a: 100, b:200, c:300, d:400, e:500});
console.log(rest); // output: {c: 300, d:400, e: 500}

const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1); // John
console.log(person2); // Beth
console.log(person3); // Mike

// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let p1, p2, p3;
[p1, p2, p3] = getPeople();

/************* OBJECT DESTRUCTURING *************/
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Boston',
  gender: 'Male',
  sayHello: function() {
    console.log('Hello');
  }
}

// Old Es5 -> No Destructing Method
/*
    const name = person.name;
    const age  = person.age;
    const city = person.city;
    const gender = person.gender;
*/

// ES6+ Object Destructing Method
const {name, age, city, gender, sayHello} = person;
console.log(name,age,city);
sayHello(); 
