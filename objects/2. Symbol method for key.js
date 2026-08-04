const mySym = Symbol("key1");

const user = {
  name: "Alex",
  [mySym]: "secretValue" // Bracket syntax is required here
};

// Accessing the symbol property
console.log(user[mySym]); // Output: "secretValue"
console.log(user.mySym);  // Output: undefined (Dot notation checks for a literal string key "mySym")
