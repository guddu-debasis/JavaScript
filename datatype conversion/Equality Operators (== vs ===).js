console.log("5" == 5);   // true (String "5" is coerced to Number 5)
console.log("5" === 5);  // false (Types differ: String vs Number)

// The extreme quirk of loose equality
console.log([] == false); // true 
// Internal step 1: Array [] is coerced to primitive empty string ""
// Internal step 2: "" == false becomes 0 == 0, which is true.

// Best Practice: Always use === to avoid hidden coercion bugs.



/*

== (Loose Equality): Compares values by performing implicit conversion first if types differ.
=== (Strict Equality): Compares both value and type without conversion.

*/