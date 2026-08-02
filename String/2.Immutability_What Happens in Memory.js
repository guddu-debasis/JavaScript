let message = "Hello"; 
message = message + " World"; // Creates a brand new string "Hello World" in memory
                              // 'message' now points to the new string.
                              // The old "Hello" string is marked for Garbage Collection.

let score = "100";
score[0] = "5";               // Silently fails (or throws an error in strict mode)
console.log(score);           // Output: "100" (Unchanged)




//
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
