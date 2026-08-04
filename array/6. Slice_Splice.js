//slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// Extract from index 2 up to (but not including) index 4
const subArray = animals.slice(2, 4); 
console.log(subArray); // ['camel', 'duck']
console.log(animals);  // ['ant', 'bison', 'camel', 'duck', 'elephant'] (Unchanged)

// Quick clone of an entire array
const shallowCopy = animals.slice();

//splice

const months = ['Jan', 'March', 'April', 'June'];

// Insert at index 1 (delete 0 items, add 'Feb')
months.splice(1, 0, 'Feb');
console.log(months); // ['Jan', 'Feb', 'March', 'April', 'June']

// Delete 1 item at index 3 and replace it
const removed = months.splice(3, 1, 'May');
console.log(months);  // ['Jan', 'Feb', 'March', 'May', 'June']
console.log(removed); // ['April']
