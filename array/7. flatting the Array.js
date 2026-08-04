const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) //['H', 'i', 't', 'e', 's', 'h']
console.log(Array.from({name: "hitesh"})) // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[100, 200, 300]
