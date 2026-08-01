// The 8 Falsy values in JavaScript:
Boolean(false);
Boolean(0);
Boolean(-0);
Boolean(0n);          // BigInt zero
Boolean("");          // Empty string
Boolean(null);
Boolean(undefined);
Boolean(NaN);

// Everything else is Truthy, including empty structures:
Boolean([]);          // true
Boolean({});          // true
Boolean(" ");         // true (Contains a space character)
