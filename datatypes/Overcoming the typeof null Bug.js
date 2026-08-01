function getTrueType(value) {
    // Uses the Object prototype to get the exact internal ECMA [[Class]] slot
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

console.log(getTrueType(null));      // "null"
console.log(getTrueType([]));        // "array"
console.log(getTrueType(45n));       // "bigint"
console.log(getTrueType(Symbol()));  // "symbol"
