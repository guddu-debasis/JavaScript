const nums = [1, 2, 3];
const doubled = nums.map(x => x * 2); // [2, 4, 6]

const scores = [80, 92, 60, 55, 75];
const passing = scores.filter(score => score >= 60); // [80, 92, 60]

const expenses = [10, 15, 10, 5];
const total = expenses.reduce((sum, current) => sum + current, 0); // 40

const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => console.log(fruit));


