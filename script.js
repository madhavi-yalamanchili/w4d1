// var, let and const

// variables declared with `var` can be redeclared
var name = "John";
var name = "Jane";

/*
// variables declared with `let` or `const` cannot

let lastName = "Doe";
let lastName = "Doe"; ❌
// Uncaught SyntaxError: Identifier 'lastName' has already been declared

const age = 42;
const age = 21;
// Uncaught SyntaxError: Identifier 'age' has already been declared
*/

// variables declared with `var` or `let` can be reassigned
var city = "Paris";
city = "Berlin";

let country = "France";
country = "Germany";

// variables declared with `const` cannot be reassigned
const continent = "Europe";
// continent = "Europe"; ❌
// Uncaught TypeError: Assignment to constant variable.

// we can still mutate objects declared with `const`
const person = {
  name: "Jane"
};

person.name = "John";

// Hoisting

console.log(a);
var a = 42;

// console.log(b); ❌
// Uncaught ReferenceError: Cannot access 'b' before initialization
let b = 42;

// console.log(c); ❌
// Uncaught ReferenceError: Cannot access 'c' before initialization
const c = 42;

// `var`, `let` and `const` all hoist, but only `var` is initialized with a value of `undefined`, whereas `let` and `const` are also hoisted but not initialized and throw an error when trying to access them before they're defined

let foo = 1;

let foobar = function() {
  // console.log(foo); ❌ // Uncaught ReferenceError: Cannot access 'foo' before initialization
  // `foo` at line 56 refers to the `foo` at line `58` which is hoisted
  let foo = 2;
};

foobar();

// Scope

if (true) {
  let d = 0;
  d++;
  console.log(d);

  if (true) {
    console.log(d);
    let e;
  }

  // console.log(e); ❌ Uncaught ReferenceError: e is not defined
}

// console.log(d); ❌ Uncaught ReferenceError: d is not defined

for (let i = 0; i < 5; i++) {
  //
  console.log(i);
}

// console.log(i); ❌ Uncaught ReferenceError: i is not defined

if (true) {
  // `var` has global scope
  var f = 0;
}

console.log(f);

var g = "everything";

function bar() {
  console.log(g);

  if (true) {
    var g = "something";
    console.log(g);
  }

  console.log(g);
}

// function scope
// console.log(g); ❌ // Uncaught ReferenceError: g is not defined

bar();

console.log(g);

console.clear();

let h = 1;
console.log(h);

if (true) {
  h = 2;
  console.log(h);
  if (true) {
    let h = 3;
    console.log(h);
  }
}

console.log(h);
