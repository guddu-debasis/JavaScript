// --- To String ---
String(123);          // "123"
String(true);         // "true"
String(null);         // "null"
(50).toString();      // "50"

// --- To Number ---
Number("42");         // 42
Number("42px");       // NaN (Strict parsing)
Number(true);         // 1
Number(false);        // 0
Number(null);         // 0
Number(undefined);    // NaN

// Loose Parsing alternatives
parseInt("42px");     // 42 (Extracts the leading number)
parseFloat("3.14rem");// 3.14

// --- To Boolean ---
Boolean(1);           // true
Boolean("hello");     // true
Boolean(0);           // false (Falsy value)
Boolean("");          // false (Falsy value)
