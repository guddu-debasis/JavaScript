// Each Symbol creation is guaranteed to be completely unique
const key1 = Symbol("id");
const key2 = Symbol("id");

console.log(key1 === key2); // false (Even with identical descriptions)

const user = {
    name: "Alex",
    [key1]: 101 // Hidden/protected property key
};

console.log(user[key1]); // 101
