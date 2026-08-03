/*
Adding / Removing Elements
push(...) — Adds elements to the end of the array
pop() — Removes the last element and returns it
unshift(...) — Adds elements to the beginning
shift() — Removes the first element and returns it

*/

const todo = ['buy milk'];
todo.push('clean room'); // ['buy milk', 'clean room']
todo.pop();             // ['buy milk']

/*
Searching and Checking
indexOf(element) — Returns the index of an item, or -1 if not found.
includes(element) — Returns true or false if the item exists.
find(callback) — Returns the first element that matches a condition.
findIndex(callback) — Returns the index of the first element that matches a condition.
*/