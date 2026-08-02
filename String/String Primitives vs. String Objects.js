const primitiveStr = "hello";          // Stack allocation
const objectStr = new String("hello"); // Heap allocation (Object)

console.log(typeof primitiveStr); // "string"
console.log(typeof objectStr);    // "object"

console.log(primitiveStr == objectStr);  // true  (checks value)
console.log(primitiveStr === objectStr); // false (checks type and memory reference)
