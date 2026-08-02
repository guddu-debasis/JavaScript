// 1. Primitive allocation (Stack) {String ,number,boolean ...}
let age = 25; 
let newAge = age; // A separate, independent copy is created in the stack
newAge = 30;      // Changing newAge does NOT affect age

console.log(age);    // Output: 25
console.log(newAge); // Output: 30

// 2. Reference allocation (Heap){function,array,object}
let user = {
    name: "Alice",
    role: "Admin"
}; 

// user2 gets a copy of the pointer address from the stack, pointing to the same heap object
let user2 = user; 
user2.role = "Editor"; // Modifying the heap object impacts both variables

console.log(user.role);  // Output: "Editor"
console.log(user2.role); // Output: "Editor"


//Primitive stores in Stack memory and when they assign = to anathor then its a copy But Non-Primitive stores in Heap Memory so when assign = they assign a pointer.
