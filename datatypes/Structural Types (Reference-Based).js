// Objects, Arrays, and Functions are all structural types
let originalUser = { name: "Sam", age: 25 };
let copiedUser = originalUser; // Copies the REFERENCE, not the actual values

// Modifying the copy changes the original object
copiedUser.age = 26;
console.log(originalUser.age); // 26

// Arrays are structurally objects
let numbers = [1, 2, 3];
console.log(typeof numbers); // "object"

// Functions are also objects
function greet() { return "Hi"; }
console.log(typeof greet); // "function" (An ECMA convenience fallback)
