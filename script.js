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

console.clear();

var human = {
  firstName: "Jane",
  lastName: "Doe"
};
// ES5
// var greeting = "Hello " + human.firstName + " " + human.lastName + "!";

// ES6
const greeting = `Hello ${human.firstName} ${human.lastName}!`;

// ES5
// var content = "<div>\
// <p>Hello World!</p>\
// </div>";

// ES6
const content = `<div>
<p>Hello World!</p>
</div>`;

[1, 2, 3].includes(1); // true
[1, 2, 3].includes(4); // false

// returns a boolean depending on if the given substring appears on a string `.includes()` was called on

"abc".includes("a"); // true
"abc".includes("ab"); // true
"abc".includes("xyz"); // false

// ES6 string methods

const str = "To be or not to be, that is the question.";

str.startsWith("To be"); // true
str.startsWith("T"); // true
str.startsWith("Tobe"); // false
str.startsWith("not to be"); // false
str.startsWith("to be"); // false

// the second parameter is the index at which the substring should be found
str.startsWith("be", 3); // true

str.endsWith("."); // true
str.endsWith("question."); // true
str.endsWith("to be"); // false
str.endsWith("to be", 18); // true
"To be or not to be".length; // 18

// console.log(str.repeat(5));

const cart = new Set(["🥕", "🍌", "🍏", "🍏", "🍐"]);

cart.size; // 4
cart.has("🍌"); // true
cart.has("🐈"); // false

// Destructuring
// ES5

var campus = {
  town: "Berlin",
  courses: ["UX/UI", "Data", "WebDev"]
};

// let courses = campus.courses;
// let town = campus.town;

// ES6
// let { courses } = campus;
// let { town } = campus;
let { courses, town, age } = campus;

// town = "Lisbon";
// campus.courses = ["WebDev"];

// const courses = campus.courses;

// campus.courses.push("Dance");
// campus.town = "Lisbon";

const baz = {
  x: {
    y: 1
  }
};

// const y = baz.x.y
const { y } = baz.x;

// const { 🔩, 🔨, 🛠 } = 🧰

const numbers = [1, 2, 3, 4, 5];
const [first, second, third, fourth, fifth, sixth] = numbers;
// const first = numbers[0]
// const second = numbers[1]
// ...
// const fifth = numbers[4]

const letters = ["a", "b", "c", "D"];
const [, , cLetter, dLetter = "d"] = letters;

const [j, k = 2, l, m = 1] = [3, 4];

j; // 3
k; // 4
l; // undefined
m; // 1

const arr = ["hello", "world", "!"];
// const arrCopy = arr.slice();
const arrCopy = [...arr];

const reptiles = ["lizard", "snake"];
const birds = ["eagle", "seagull", "pidgeon"];
const mammals = ["elephant", "dog"];

// const animals = reptiles.concat(birds).concat(mammals);
const animals = [...reptiles, ...birds, ...mammals];

const exclamation = "Gesundheit";
[...exclamation]; // ["G", "e", "s", "u", "n", "d", "h", "e", "i", "t"]

const obj = {
  a: 1,
  b: 2,
  c: 5
};

// shallow copy
const objCopy = {
  ...obj
};

const obj2 = {
  c: 3,
  d: 4
};

// merge
const obj3 = {
  a: 0,
  ...obj,
  ...obj2,
  c: 1
};

// const obj3 = {
//   a: 1,
//   b: 2,
//   c: 5,
//   c: 3,
//   d: 4
// };

// the rest ... operator will create an array with all the remaining parameters
// Rest parameter must be last formal parameter
function sum(a, b, ...numbers) {
  return (
    // a +
    numbers.reduce(function(acc, value) {
      return acc + value;
    })
  );
}

function maxOfArray(arr) {
  // return Math.max(1, 2, 3)
  return Math.max(...arr);
}
