// 1. Number & NaN
let price = 99.99;
let items = 5;
let calculationError = 0 / 0; // Results in NaN

console.log(typeof price);             // "number"
console.log(typeof calculationError);   // "number" (An ECMA standard quirk)

// 2. BigInt (Introduced in ES2020)
let safeIntMax = 9007199254740991n;    // Note the trailing 'n'
let hugeNumber = BigInt("9007199254740991");

// 3. String
let greeting = "Hello";
let templateLiteral = `${greeting} World`; // ES6 feature

// 4. Boolean
let IsActive = true;

// 5. Undefined vs Null
let nonInitialized;                     // Engine sets this automatically
let userSelectedEmpty = null;           // Developer intentionally sets this empty

console.log(typeof nonInitialized);     // "undefined"
console.log(typeof userSelectedEmpty);  // "object" (The famous legacy bug)
