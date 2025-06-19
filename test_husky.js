// ❌ unused variable
const unused = 123;

// ❌ unused import
import fs from "fs";

// ❌ loose equality
const a = "5";
if (a == 5) {
  console.log("loose equality");
}

// ❌ return assignment
function getValue() {
  return (x = 42);
}

// ❌ invalid `this` usage
function printThis(a) {
  console.log(this);
}
printThis();

// ❌ constant condition
if (true) {
  console.log("Always true");
}

// ❌ useless return
function doNothing() {
  return;
}

// ❌ duplicate functions (SonarJS)
function add(a, b) {
  return a + b;
}
function addAgain(x, y) {
  return x + y;
}

// ❌ duplicate strings (SonarJS)
console.log("Hello World");
console.log("Hello World");
alert("Hello World");

// ❌ unused collection (SonarJS)
const temp = [];
temp.push(1);

// ❌ Prettier formatting issues (spacing, semicolons, indentation)
function badFormat(name) {
  console.log("Hello, " + name);
}

// ❌ mixed operators
const result = a + b * c;

// ❌ confusing arrow function
const confusing = a => (a ? 1 : 2);

// ❌ duplicate imports
import path from "path";
import { join } from "path";

// ❌ prefer-const
let count = 1;
console.log(count);

// ❌ line too long
const longMessage = "This is a really long string that will trigger max-len rule if it goes beyond 200 characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio ipsum.";

// ✅ used variable
const used = "I am used";
console.log(used);
