let message = "Hello"; 
message = message + " World"; // Creates a brand new string "Hello World" in memory
                              // 'message' now points to the new string.
                              // The old "Hello" string is marked for Garbage Collection.

let score = "100";
score[0] = "5";               // Silently fails (or throws an error in strict mode)
console.log(score);           // Output: "100" (Unchanged)
