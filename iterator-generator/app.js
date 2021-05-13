// Iterator Example 
function nameIterator(names) {
  let nextIndex = 0;
  
  return {
    next: function() {
      return nextIndex < names.length ? {value: names[nextIndex++], done: false} : {done: true}
    }
  };
}

// Create an array of names
const namesArray = ['Fatih', 'Nesin', 'Razi'];
// Init iterator and pass in the names
const names = nameIterator(namesArr);

// We can iterate this array via next structure 
console.log(names.next().value); // Fatih
console.log(names.next().value); // Nesin
console.log(names.next().value); // Razi

// Generator Example 
// Same with the iterator example but we define values with "yield keyword"
function* sayNames() {
  yield 'Fatih'
  yield 'Nesin'
  yield 'Razi'
}

const name_it= sayNames();
console.log(name_it.next());

// ID Creator Example
function* CreateIds() {
  let index = 0;

  while(true) {
    yield index++;
  }
}

const gen = CreateIds();       // you can use md5 or sha
console.log(gen.next().value); // id => 0
console.log(gen.next().value); // id => 2
console.log(gen.next().value); // id => 3
