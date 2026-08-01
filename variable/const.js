const x = 10;
// x = 20; // ERROR! Cannot reassign a constant.

// Note: Objects and arrays assigned to const can still change internally:
const arr = [1, 2];
arr.push(3); // Allowed! The array contents changed, but the variable still points to the same array.
