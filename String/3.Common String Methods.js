const text = "  JavaScript  ";

// 1. Changing case
console.log(text.toUpperCase()); // "  JAVASCRIPT  "

// 2. Removing whitespace
const cleanText = text.trim();
console.log(cleanText);          // "JavaScript"

// 3. Extracting parts (start index, end index non-inclusive)
console.log(cleanText.slice(0, 4)); // "Java"

// 4. Searching and replacing
console.log(cleanText.includes("Script")); // true
console.log(cleanText.replace("Java", "Type")); // "TypeScript"

// 5. Splitting into an array
console.log(cleanText.split("")); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
