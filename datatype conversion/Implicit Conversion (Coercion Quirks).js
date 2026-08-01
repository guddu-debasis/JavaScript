// --- The Addition operator (+) defaults to String Concatenation ---
let res1 = "5" + 2;     // "52" (Number 2 is coerced to string "2")
let res2 = "5" + true;  // "5true"

// --- Other math operators (-, *, /, %) coerce strictly to Numbers ---
let res3 = "5" - 2;     // 3 (String "5" is coerced to number 5)
let res4 = "5" * "2";    // 10
let res5 = "5" - "abc"; // NaN ("abc" cannot become a number)
let res6 = 4 + true;    // 5 (true becomes 1)

// --- Tricky Null and Undefined Coercions ---
let res7 = 5 + null;       // 5 (null becomes 0)
let res8 = 5 + undefined;  // NaN (undefined becomes NaN)
