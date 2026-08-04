const user = {
  name: "Alex",
  age: 28,
  isAdmin: true,
  greet: function() {
    console.log("Hello!");
  }
};


console.log(user.name);       // "Alex" (Dot notation)
console.log(user["age"]);     // 28 (Bracket notation)


user.age = 29;                // Updates existing property
user.country = "Canada";      // Adds a new property


delete user.isAdmin;          // Removes the isAdmin key


/*
Object.keys(obj): Returns an array of an object's keys.
Object.values(obj): Returns an array of an object's values.
Object.entries(obj): Returns an array of [key, value] pairs.
Object.assign(target, source): Merges properties from one object into another.
Object.freeze(JsUser) prevents modifications to an object (no adding, deleting, or changing properties).
*/

for (let key in user) {
  console.log(`${key}: ${user[key]}`);  // iterates over each key-value pair in the user object
}
